"use client"
import Link from 'next/link'
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { fetchCompetitors } from '@/lib/redux/actions/competittorsActions';
import { deleteComptetitor } from '@/lib/redux/actions/competittorsActions';


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

      let competitors = useSelector(state => state.competitors.competitors);

      console.log("Kilpailijat")
      console.log(competitors);



    return (
        <div>
         <h1>Kilpailijat</h1>
            
         <Link href={"/kilpailijat/uusikilpailija"}>Uusikilpailija</Link>
            <ul>
                {competitors.map (kilpailija =>
                    <li key={kilpailija.kilpailijaid}>{kilpailija.etunimi} {kilpailija.sukunimi} {kilpailija.seura}</li>
                    )}


            </ul>
        </div>
    )
}