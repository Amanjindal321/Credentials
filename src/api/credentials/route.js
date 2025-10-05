import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../../lib/db";
import { restaurantSchema } from "../../lib/CredentialsModel";

export async function GET() {

        await mongoose.connect(connectionStr,{useNewUrlParser:true})
        const data=await restaurantSchema.find()
        console.log(data);

    return NextResponse.json({result:true})

}