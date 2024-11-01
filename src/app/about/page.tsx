    "use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Funtion =() =>{
    const router = useRouter();
    return(
        <div>
            <h1> Aboat page. </h1>
                <br />
                <Link href="/">go to home page</Link>
                <br />
                <button onClick={() =>router.push("/")}>Go to login home page button</button>
                <br />
                <Link href="/about/aboutcollege/aboutschool">about college page</Link>
            
        </div>
    )
}

export default Funtion