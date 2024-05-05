import { NextResponse } from "next/server";


export async function POST(req){
    req = await req.json()

    
    let raw = await fetch('https://v2.jokeapi.dev/joke/any')
    let json = await raw.json()
    let res = await json
    console.log(json)
    return NextResponse.json(
        {
        responses: [{
            type: 'text',
            texts: [res.setup],
        }],
        context: json
        }
            
        )
        
}