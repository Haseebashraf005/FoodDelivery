import connectToDatabase from "@/app/lib/dbConnection";
import { FoodModel } from "@/app/lib/models/foodsModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    let fooditems = await FoodModel.find()



    return NextResponse.json({ status: true,  fooditems })
}



export async function POST(req) {
    await connectToDatabase();

    let payload = await req.json()
    let success = false;


    let newitem = new FoodModel(payload)
    const result = await newitem.save();

    if (result) {
        success = true;
    }

    return NextResponse.json({ status: success, result })



}
