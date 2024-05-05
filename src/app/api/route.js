import { NextResponse } from "next/server";

export async function POST(REQUEST){

    const req = await REQUEST.json()
    console.log(req)
    return NextResponse.json({status: 200})
}