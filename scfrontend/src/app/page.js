

import Image from 'next/image'
import styles from './page.module.css'
import Kilpailijat from '@/modules/kilpailijat'


export default function Page() 
{


   

  return (
    <div>
      <h1>Tämä lienee etusivu</h1>
      <Kilpailijat/>
    </div>
    
  )
}
