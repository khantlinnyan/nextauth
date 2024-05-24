import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email, password } = await request.json();
    const userFound = await User.findOne({
      email,
    }).select("+password");

    if (!userFound) throw new Error("Invalid Email");

    const passwordMatch = await bcrypt.compare(password, userFound.password);

    if (!passwordMatch) throw new Error("Invalid Password");
    return NextResponse.json(
      {
        data: userFound,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      console.error("Error during signin:", error);
      return NextResponse.error();
    }
  }
}
