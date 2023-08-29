'use client'
export default function RemoveRow(props) {
    return(
        <tr>
            <td>{props.competitor.etunimi}</td>
            <td>{props.competitor.sukunimi}</td>
            <td>{props.competitor.seura}</td>
            <td><button onClick={ () => props.changeMode("cancel") }>Peruuta</button></td>
            <td><button  onClick={() => props.removeCompetitor(props.competitor.kilpailijaid)}>Vahvista</button></td>
        </tr>
    )
}