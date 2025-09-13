import connectToDatabase from "@/app/lib/dbConnection";
import { FoodModel } from "@/app/lib/models/foodsModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    let payload = await params; // unwrap dynamic route params
    await connectToDatabase();
    // console.log(payload)

    // return NextResponse.json({ status: true});

    try {
        // ✅ find single document by _id
        const foodItem = await FoodModel.findById(payload.productid);

        if (!foodItem) {
            return NextResponse.json({ status: false, message: "Not found" }, { status: 404 });
        }

        return NextResponse.json({ status: true, foodItem });
    } catch (error) {
        console.error("Error fetching food item:", error);
        return NextResponse.json({ status: false, error: error.message }, { status: 500 });
    }
}

// API ROUTE FOR UPDATE THE PRODUCT
export async function PUT(req, { params }) {
    let {productid} = await params; // unwrap dynamic route params
    await connectToDatabase();
    // console.log(payload)

    const body = await req.json(); // frontend payload
    const { foodname, price, image, description} = body;

    let result = await FoodModel.findOneAndUpdate({_id:productid},{foodname, price, image, description})
    // note that findoneandupdate jo object ki current info hai wohi return karta hai new wali nahi laki db main update hoo gai hoti hai

    if(result){

        return NextResponse.json({ status: true ,result});
    }

    return NextResponse.json({ status: false,result:"not updated"});f

}


