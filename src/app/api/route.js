import { NextResponse } from "next/server";


export async function POST(REQUEST){
    const req = await REQUEST.json()

    
    let raw = await fetch('https://v2.jokeapi.dev/joke/any')
    let json = await raw.json()
    let res = await json
    console.log(json)
    return NextResponse.json({context: json})
}