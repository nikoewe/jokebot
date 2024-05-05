import { NextResponse } from "next/server";


export async function POST(req){
    req = await req.json()
    console.log(req)
    let category = req.context['4ent']
    let raw = await fetch(`https://v2.jokeapi.dev/joke/${category}`)
    let json = await raw.json()
    let res = await json

    console.log(req)

    let jokeText = {
        type: res.type,
        line1: (res.type === 'single') ? res.joke : res.setup,
        line2: (res.type === 'twopart') ? res.delivery : ''
    }
    console.log(res)

    return NextResponse.json(
        {
        responses: 
            {
            type: 'text',
            texts: [jokeText.line1],
        },
        context: {
            type: jokeText.type,
            line2: jokeText.line2

        }
        }
            
        )
        
}