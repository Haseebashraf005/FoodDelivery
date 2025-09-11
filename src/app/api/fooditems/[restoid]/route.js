import connectToDatabase from "@/app/lib/dbConnection"
import { FoodModel } from "@/app/lib/models/foodsModel"
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
    let payload = await params;
    // console.log(payload.restoid)
    await connectToDatabase();

    let fooditems = await FoodModel.find({resto_id:payload.restoid});
  return NextResponse.json({ status: true, fooditems })
}