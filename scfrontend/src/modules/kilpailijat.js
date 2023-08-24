"use client"
import React, { useEffect, useState} from 'react';

export default function Kilpailijat()
{
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
                {kilpailijatLista.map (kilpailija =>
                    <li key={kilpailija.kilpailijaid}>{kilpailija.etunimi} {kilpailija.sukunimi} {kilpailija.seura}</li>
                    )}


            </ul>
        </div>
    )
}