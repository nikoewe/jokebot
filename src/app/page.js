"use client"

import { useEffect, useState } from "react"

import chatBoxLoader from "./utils/chatBoxLoader"


export default function Home() {

  

  useEffect(()=>{
    chatBoxLoader()
  },[])

  return (
    <main>
      Hello world
      

    </main>
  )
}
