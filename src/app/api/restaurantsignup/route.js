import connectToDatabase from "@/app/lib/dbConnection";
import { RestaurantUser } from "@/app/lib/models/RestaurantUser";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    // Fetch all user logins
    const users = await RestaurantUser.find();
    // console.log(users)

    return NextResponse.json({ status: true, result: users })
}





export async function POST(req, { params }) {
    try {
        let payload = await req.json();
        console.log(payload)

        // checking all  required parameter 

        // if(!payload.restaurantName || !payload.city || !payload.email || !payload.address || !payload.password || !payload.contactNo){
        //     return NextResponse.json({ status: false, result: "plz fill all required data "})
        // }

        // makeing db connection
        await connectToDatabase();

        let newuser = new RestaurantUser(payload)

        const result = await newuser.save();



        return NextResponse.json({ status: true, result })
        
    } catch (error) {

        if(error.code === 11000){

            return NextResponse.json({ status: false, result:"email already exists",code:11000 })
        }
        return NextResponse.json({ status: false, result:error })
        
    }

}