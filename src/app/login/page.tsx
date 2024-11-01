  "use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const page  =()=>{
    const router = useRouter();
    return(
        <div>
            <h1>
                login page.
                <br />
                <Link href="/">go to home page</Link>
                <br />
                <button onClick={() =>router.push("/")}>Go to login home page button</button>
            </h1>
        </div>
    )
}

export default page