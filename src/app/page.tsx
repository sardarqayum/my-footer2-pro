"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>
        basic routing</h1>
        <br />
        <Link href="/login">go to login</Link>
        <br />
        <Link href="/about">go to About</Link>
        <br />

        <button className="bg-red-500 hover:bg-blue-700 rounded-2xl text-white py-2 px-4 font-sans" onClick={() =>router.push("/login")}>Go to login page button</button>
        <br /> 
        <button className="bg-blue-500 hover:bg-red-400 rounded-2xl   text-white py-2 px-4 font-serif" onClick={() =>router.push("/about")}>Go to login page About</button>
    </div>
  )
  }
