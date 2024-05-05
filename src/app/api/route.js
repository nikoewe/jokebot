import { NextResponse } from "next/server";


export async function POST(req){
    req = await req.json()

    let category = req.context['4ent']
    let raw = await fetch(`https://v2.jokeapi.dev/joke/${category}`)
    let json = await raw.json()
    let res = await json

    console.log(req)

    let jokeText = {
        type: json.type,
        line1: json.type === 'single' ? json.joke : json.setup,
        line2: json.delivery
    }

    return NextResponse.json(
        {
        responses: [
            {
            type: 'text',
            texts: [jokeText.line1],
        }],
        context: {
            type: jokeText.type,
            line2: jokeText.line2

        }
        }
            
        )
        
}