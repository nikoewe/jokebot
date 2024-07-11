"use client";
import "./arcade.css";
import Image from "next/image";

export default function Arcade({ ...props }) {
  return (
    <div className="container">
      <div className="background">
        <div className="screen" id="embed"></div>
      </div>
    </div>
  );
}
