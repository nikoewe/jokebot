"use client";

import { useEffect, useState } from "react";

import chatBoxLoader from "./utils/chatBoxLoader";
import Arcade from "./components/Arcade";

export default function Home() {
  //Load the chatbox from a function an a separate file in case
  //it is needed in another page.
  useEffect(() => {
    chatBoxLoader();
  }, []);

  return (
    <main>
      <Arcade />
    </main>
  );
}
