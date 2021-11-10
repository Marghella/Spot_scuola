import React, { ReactElement, useState } from 'react'
import styles from './domande.module.scss'
import RadioToggle from '../radiotoggle/index'
interface Props {
    question: string
    risposte: string[]
    rispostaSelezionata: number
   setRisposta: React.Dispatch<React.SetStateAction<number[]>>
   index: number
}

export default function Domande({question, risposte, rispostaSelezionata, setRisposta, index}: Props): ReactElement {
    return (
        <div className={styles.questionform}>
            <div className={styles.question}>
                <span>
                    {question}
                </span>
            </div>
            <div className={styles.answer}>
                {risposte.map((r, i) => <div style={{color: 'white'}}>
                    <RadioToggle enabled={rispostaSelezionata === i} onClick={() => setRisposta((prev) => prev.map((p, j) => j === index ? i : p ))}>
                    {r}   
                    </RadioToggle>                    
                </div>)}
            </div>
        </div>
    )
}
