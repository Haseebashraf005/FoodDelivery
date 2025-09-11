import connectToDatabase from "@/app/lib/dbConnection"
import { FoodModel } from "@/app/lib/models/foodsModel"
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  let payload = await params;
  // console.log(payload.restoid)
  await connectToDatabase();

  let fooditems = await FoodModel.find({ resto_id: payload.restoid });
  return NextResponse.json({ status: true, fooditems })
}




export async function DELETE(req, { params }) {
  let payload = await params;

  await connectToDatabase();
  console.log(payload.restoid)

  try {
    const deleted = await FoodModel.findByIdAndDelete(payload.restoid);
    if (!deleted) {
      return NextResponse.json({ status: false, message: "Food item not found" }, { status: 404 });
    }

    return NextResponse.json({ status: true, message: "Food item deleted successfully" });
  } catch (err) {
    return NextResponse.json({ status: false, message: "Error deleting food item", error: err.message }, { status: 500 });
  }
}