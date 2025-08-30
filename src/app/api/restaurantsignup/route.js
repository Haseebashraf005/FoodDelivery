import connectToDatabase from "@/app/lib/dbConnection";
import { RestaurantUser } from "@/app/lib/models/RestaurantUser";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    // Fetch all user logins
    const users = await RestaurantUser.find();
    console.log(users)

    return NextResponse.json({ status: true, result: users})
}