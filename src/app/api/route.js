//This endpoint is working as a webhook, made to catch any request coming from
//the chatbox. The only parameter that could be handled here is the category option
//coming in the request object sended by the bot. This key determines the kind of jokes we're receiving.
//In case that this key is not set, the default value will be 'any' which implies
//that any kind of joke could be received from the API.
//As response we're sending a JSON following the structure requiered by the chatbot.
//The joke API we're using here can provide two types of jokes: 'single', only 1 line; and 'twopart'
//which has two text lines. In order to let the bot know how to handle both cases, we're sending
//under the context key if it's necessary to show the second line.

import { NextResponse } from "next/server";


export async function POST(req){
    //Wait until all the data has been received
    req = await req.json()
    console.log(req)

    //We receive a key in our request which contains the information about what kind of joke is expected.
    let category = req.context['category'] ? req.context['category'] : 'Any'

    //Fetch joke API modifying the URL in order to get the kind of jokes requested.
    let res = await fetch(`https://v2.jokeapi.dev/joke/${category}`)
    res = await res.json()
    res = await res

    //Summarize useful data in an object to reuse it if it's neccesary
    let jokeText = {
        type: res.type,
        line1: (res.type === 'single') ? res.joke : res.setup,
        line2: (res.type === 'twopart') ? res.delivery : ''
    }
  //  console.log(res)

//  It responds with a json object structured in the way the chatbot requires
    return NextResponse.json(
        {
        responses:[
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