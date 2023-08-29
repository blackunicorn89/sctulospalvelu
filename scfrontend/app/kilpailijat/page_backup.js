"use client"
import Link from 'next/link'
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { fetchCompetitors } from '@/lib/redux/actions/competittorsActions';
import { usePathname } from 'next/navigation'


export default function Competitors()
{

    const pathname = usePathname();
    
    console.log("mikä on tämän sivun pathname")
    console.log(pathname)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCompetitors())
      }, []); 

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