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
        let success = true;


        if (payload.login) {

            //response when need to login;
            // let newuser =  RestaurantUser(payload)
            const result = await RestaurantUser.findOne({ email: payload.email, password: payload.password });

            if (!result) {
                success = false
            }


            return NextResponse.json({ status: success, result })


        } else {

            // response when need signup 

            let newuser = new RestaurantUser(payload)
            const result = await newuser.save();
            return NextResponse.json({ status: true, result })
        }






    } catch (error) {

        // works only when user try to sign with existing email

        // if (error.code === 11000) {
        //     return NextResponse.json({ status: false, result: "email already exists", code: 11000 })
        // }

        return NextResponse.json({ status: false, result: error })

    }

}