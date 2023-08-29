'use client'
export default function CompetitorRow(props) {
    return(
        <tr>
            <td>{props.competitor.etunimi}</td>
            <td>{props.competitor.sukunimi}</td>
            <td>{props.competitor.seura}</td>
            <td><button onClick={ () => props.changeMode("remove", props.index) }>Poista</button></td>
            <td><button onClick={() => props.changeMode("edit", props.index)}>Muokkaa</button></td>
        </tr>
    )
}