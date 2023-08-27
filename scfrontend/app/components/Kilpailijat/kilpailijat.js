"use client"
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {haeKilpailijat} from './kilpailijatSlice';


export default function Kilpailijat()
{

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(haeKilpailijat())
      }, []); // [dispatch] Voiko laittaa?? 

      const appState = useSelector((state) => state);

      //console.log("mikäo on appstate")  
      //console.log(appState)

      let kilpailijat = appState.kilpailijat.kilpailijat

      console.log("ilmeisesti ei tule mitään")
      console.log(kilpailijat);


const [kilpailijatLista, setKilpailijatLista] = useState([]);

    useEffect(() => {
    if (kilpailijatLista.length === 0) {
        fetch("http://localhost:5092/api/kilpailijat")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setKilpailijatLista(json);
            });
    }
    });

    return (
        <div>
         <h1>Kilpailijat</h1>
            <ul>
                {kilpailijat.map (kilpailija =>
                    <li key={kilpailija.kilpailijaid}>{kilpailija.etunimi} {kilpailija.sukunimi} {kilpailija.seura}</li>
                    )}


            </ul>
        </div>
    )
}