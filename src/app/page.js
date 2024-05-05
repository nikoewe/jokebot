"use client"
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    fetch('https://v2.jokeapi.dev/joke/Programming', {method: 'GET'})
    .then(x => x.json())
    .then(x => console.log(x))
  },[])
  return (
    <main>
      Hello world
    </main>
  )
}
