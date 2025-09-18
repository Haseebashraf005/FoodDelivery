import connectToDatabase from "@/app/lib/dbConnection"
import { RestaurantUser } from "@/app/lib/models/RestaurantUser";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDatabase();

    let restaurantUsers = await RestaurantUser.find();
    // this will get all data from restaurantUsers we will split the locatin


    let locations = restaurantUsers.map(user => user.city.charAt(0).toUpperCase() + user.city.slice(1));
    //it will return all locatino also first letter of location is capital


    // now we need to remove duplicates from locations

    locations = [...new Set(locations)];

    return NextResponse.json({ status: true, locations });
}
