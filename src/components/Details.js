import Recat from "react"

function Details({specialty, weight, greased, medal}){
    return(
        <div className="ui-eight-wide-column" id="hogdetails">
            <p> Specialty: {specialty}</p>
            <p> Weight: {weight}</p>
            <p>Greased: {greased}</p>
            <p>Medal: {medal}</p>
        </div>
    )
}

export default Details