import connectToDatabase from "@/app/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET() {
    // await connectToDatabase();
    return NextResponse.json({ status: true, result: "ok",password:process.env.password,user:process.env.usernamedb })
}