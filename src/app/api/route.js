import { NextResponse } from "next/server";

export async function POST(REQUEST){
    const req = await REQUEST.json()
    
    let res
    fetch('https://v2.jokeapi.dev/joke/any')
    .then(x => x.json())
    .then(x => res = x)
    console.log(res)
    
    return NextResponse.json({context: res})
}