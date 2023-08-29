import {useState} from 'react';
export default function EditRow(props) {
    const [state, setState] = useState({
        etunimi: props.competitor.etunimi,
        sukunimi: props.competitor.sukunimi,
        seura: props.competitor.seura
    })

    const onChange = (event) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }

    const modifyCompetitor = () => {
        let competitor = {
            ...state,
            id:props.competitor.kilpailijaid
        }
        props.modifyCompetitor(competitor);
    }

    return(
        <tr>
            <td> <input type="text"
                        name="etunimi"
                        id="etunimi"
                        required
                        onChange={onChange}
                        value={state.etunimi} /></td>            
            <td> <input type="text"
                        name="sukunimi"
                        id="sukunimi"
                        onChange={onChange}
                        required
                        value={state.sukunimi} /></td>
            <td> <input type="text"
                        name="seura"
                        id="seura"
                        onChange={onChange}
                        required
                        value={state.seura} /></td>
            <td><button className="btn btn-success" onClick={modifyCompetitor}>Tallenna</button></td>
            <td><button className="btn btn-danger" onClick={() => props.changeMode("cancel")}>Peruuta</button></td>
        </tr>
    )
}