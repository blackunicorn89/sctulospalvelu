'use client'
import React, { useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { AddCompetitor } from '@/lib/redux/actions/competittorsActions';
import { useRouter} from 'next/navigation';



export default function NewCmpetitor()
{
 
    const router = useRouter();    
    const dispatch = useDispatch()

   
 
    const[competitorState, setCompetitorState] = useState({
        etunimi: "",
        sukunimi: "",
        seura: ""
    })

    const onChange = (e) => {
        setCompetitorState((competitorState) => {
            return {
                ...competitorState,
                [e.target.name]:e.target.value
            }
        })
    }

    //Submittien hallinta
    const saveCompetitor = (e) => {
        e.preventDefault()
        let competitor = {
            ...competitorState
        }
        console.log(competitor)
        dispatch(AddCompetitor(competitor))
        setCompetitorState({
            etunimi: "",
            sukunimi: "",
            seura: ""
        })
        router.back()

    }

    return (
        <div>
         <h1>Lisää uusi kilpailija</h1>
         <form onSubmit={saveCompetitor}>
         <label htmlFor="etunimi" className="form-label">Etunimi:</label>
            <input type="text"
                            name="etunimi"
                            id="etunimi"
                            required
                            value={competitorState.etunimi}
                            onChange={onChange} />
            <br/>
            <label htmlFor="sukunimi" className="form-label">Sukunimi:</label>
            <input type="text"
                            name="sukunimi"
                            id="sukunimi"
                            required
                            value={competitorState.sukunimi}
                            onChange={onChange} />
            <br/>
             <label htmlFor="seura" className="form-label">Seura:</label>
            <input type="text"
                            name="seura"
                            id="seura"
                            required
                            value={competitorState.seura}
                            onChange={onChange} />
            <br />
            <input type="submit" value="Tallenna"/>
         </form>

            
        </div>
    )
}