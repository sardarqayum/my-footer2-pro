    "use client"

import React from "react";
import Link from "next/link";

const Funtion =() =>{
   
    return(
        <div>
            <h1> Aboat page. </h1>
                <br />
                <Link href="/">go to home page</Link>
                <br />
                
                <br />
                <Link href="/about/aboutcollege/aboutschool">about college page</Link>
            
        </div>
    )
}

export default Funtion