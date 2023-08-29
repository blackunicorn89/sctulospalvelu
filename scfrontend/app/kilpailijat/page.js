"use client"
import Link from 'next/link'
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { fetchCompetitors } from '@/lib/redux/actions/competittorsActions';
import { deleteComptetitor, editCompetitor } from '@/lib/redux/actions/competittorsActions';
import CompetitorRow from '../components/Kilpailija/CompetitorRow'
import RemoveRow from '../components/Kilpailija/RemoveRow';
import EditRow from '../components/Kilpailija/EditRow';


export default function Competitors()
{

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCompetitors())
      }, []); 

      const[buttonState, setButtonState] = useState({
        removeIndex:-1,
        editIndex:-1
    })

    const changeMode = (mode, index) => {
        if (mode === "remove") {
            setButtonState ({
                removeIndex:index,
                editIndex:-1
            })
        }
        if (mode === "edit") {
            setButtonState ({
                removeIndex:-1,
                editIndex:index
            })
        }
        if (mode === "cancel") {
            setButtonState ({
                removeIndex:-1,
                editIndex:-1
            })
        }
    }
      
    const removeCompetitor = (id) => {
        dispatch(deleteComptetitor(id))
        changeMode("cancel")
    }
    
    const modifyCompetitor = (competitor) => {
        let competitorId = competitor.id
        dispatch(editCompetitor(competitorId, competitor))
        console.log(competitorId)
        console.log(competitor)
        changeMode("cancel")
    }

      let competitorsState = useSelector(state => state.competitors.competitors);
      let competitors = competitorsState.map((competitor, index) => {
        if (buttonState.editIndex === index) {
            return <EditRow key={competitor.kilpailijaid} competitor={competitor} modifyCompetitor={modifyCompetitor} changeMode={changeMode}></EditRow>
        }

        if (buttonState.removeIndex === index) {
           return <RemoveRow key={competitor.kilpailijaid} competitor={competitor} changeMode={changeMode} removeCompetitor={removeCompetitor}></RemoveRow>
        }
        return <CompetitorRow key={competitor.kilpailijaid} competitor={competitor} index={index} changeMode={changeMode}/>
    })
      

      console.log("Kilpailijat")
      console.log(competitors);



    return (
        <div>
         <h1>Kilpailijat</h1>
            
         <Link href={"/kilpailijat/uusikilpailija"}>Uusikilpailija</Link>

         <table>
            <thead>
                <tr>
                    <th>Etunimi</th>
                    <th>Sukunimi</th>
                    <th>Seura</th>
                    <th>Poista</th>
                    <th>Muokkaa</th>
                </tr>
            </thead>
            <tbody>
                {competitors}
            </tbody>
        </table>

            {/*<ul>
                {competitors.map (kilpailija =>
                    <li key={kilpailija.kilpailijaid}>{kilpailija.etunimi} {kilpailija.sukunimi} {kilpailija.seura}</li>
                    )}


            </ul>
                */}
        </div>
    )
}