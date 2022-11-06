import React from "react";

export default function Footer(){
    const year = new Date();
    return(
        <div className="text-center container mx-auto">
            <small className="font-medium">Copyrights &copy; {year.getFullYear()} .All rights reserved</small>
        </div>
    )
}