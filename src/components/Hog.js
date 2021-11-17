import Recat from "react"
import Details from "./Details"

function Hog(props){
    function handleClick(){
        let showDetails=document.getElementById("hogdetails")
        showDetails.classList.toggle("hide")

    }

    return(
        <div className="ui-eight-wide-column">
            <h1 onClick={handleClick}>{props.name}</h1>
            <Details specialty={props.specialty} weight={props.weight} greased={props.greased} medal={props.medal}/>
            <img src={props.image}/>
        </div>
    )
}

export default Hog