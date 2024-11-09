import { useState } from "react"

 export default function Product (prod:any) {
    const data = prod.data

    const [color, setColor] = useState("#ffffff")

    function background () {
        if ( color === "#ffffff" ) {
            setColor("#f2f2f2f2")
        } else {
            setColor("#ffffff")
        }
    }

    return (
        <div onClick={() => background()} style={{backgroundColor: `${color}`}}>
            <span>{data.id}</span>
            <h1>{data.name}</h1>
            <h2>${data.price}</h2>
        </div>
    )
 }