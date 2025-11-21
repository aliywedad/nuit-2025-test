"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
 
  const [value,SetValnue]=useState(0);
 

  useEffect(()=>{
    
    console.log("the value is ",value);

  },[value])
  
  return (
    <div className="flex min-h-screen items-center h-full  justify-center bg-zinc-50 font-sans ">
     <button className="mx-3" onClick={()=>{SetValnue(value+1)}}> + </button>
     {value}
     <button   className="mx-3" onClick={()=>{SetValnue(value-1)}}> - </button>
    </div>
  );
}
