import React from "react"
import Hog from "./Hog"

function HogList({hogs}){

    const hogContainer = hogs.map((hog)=>{ return(
        <Hog key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>
    )
    })

    return(
        <div className="ui-grid-container">  
        {hogContainer} 
        </div>
    )
}

export default HogList