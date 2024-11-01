"use client"

import React from "react"
import Link from "next/link"

export default function Home() {
 
  return (
    <div>
      <h1>
        basic routing</h1>
        <br />
        <Link href="/login">go to login</Link>
        <br />
        <Link href="/about">go to About</Link>
        <br />

       
    </div>
  )
  }
