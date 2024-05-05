"use client"

import { useEffect, useState } from "react"


export default function Home() {

  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    
  },[loaded])

  useEffect(()=>{
    const scriptTag = document.createElement('script');
    scriptTag.src =
      'https://cdn.jsdelivr.net/npm/@moveo-ai/web-client@latest/dist/web-client.min.js';
    scriptTag.addEventListener('load', () => {
      console.log('Script is loaded');
      window.MoveoAI.init({ 
        integrationId: "6d9b0f7c-95d2-44ba-822a-f065e4692900",
        element:document.getElementById('embed')})
      .then((desk) => console.log("Moveo connected"))
      .catch((error) => console.error(error)
      );
    });
    document.body.appendChild(scriptTag);
    

  
  },[])

  return (
    <main>
      
      
      Hello world

    </main>
  )
}
