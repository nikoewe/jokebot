"use client"

import { useEffect, useState } from "react"

import chatBoxLoader from "./utils/chatBoxLoader"
import Arcade from "./components/Arcade"


export default function Home() {

  

  useEffect(()=>{
    chatBoxLoader()
  },[])

  return (
    <main className="container">
      <Arcade/>
    </main>
  )
}
