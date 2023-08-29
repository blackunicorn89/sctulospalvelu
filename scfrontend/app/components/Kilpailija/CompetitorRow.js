export default function CompetitorRow(props) {
    return(
        <tr>
            <td>{props.kilpailijat.etunimi}</td>
            <td>{props.kilpailijat.sukunimi}</td>
            <td>{props.kilpailijat.seura}</td>
            <td><button onClick={ () => props.changeMode("remove", props.index) }>Poista</button></td>
            <td><button onClick={() => props.changeMode("edit", props.index)}>Muokkaa</button></td>
        </tr>
    )
}