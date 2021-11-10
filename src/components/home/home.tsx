import React, { useState, useEffect, useRef } from 'react'
import styles from './home.module.scss'
import ReactPlayer from 'react-player'
import Domande from '../domanda/domande'
import Wave from '../../icons/wave'
import risorse from '../domanderisposte.json'
import axios from 'axios'
interface Props {
    
}

export default function Home({}: Props):JSX.Element {
    const questionRef = useRef<HTMLDivElement>(null);
    const [allowQuestions, setAllowQuestions] = useState(false);
    const [permissions, setPermissions] = useState(false);
    const [answers, setAnswers] = useState<number[]>(Array(risorse.domande.length).fill(NaN));
    const [submit, setSubmit] = useState(false);
    // Se sono 5 vuol dire nessuna risposta
    const { domande, risposte } = risorse;
    let vDomande = [];
    for (let i = 0; i < domande.length; i++) {
        vDomande.push({domanda: domande[i], risposte: risposte[i]}) 
    }

    useEffect(() => {
        // Biscotto?
        axios.get(`http://localhost:5000/check`, { withCredentials: true })
        .then(({data})=> setPermissions(data === 'Yes'))
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if (answers.every(a => !isNaN(a))) setSubmit(true); else setSubmit(false)
    }, [answers])

    async function Mandaledomande() {
        const v = await axios.post('http://localhost:5000/sendquestions', answers, { withCredentials: true });
        console.log(v);
    }

    return (
        <>
        <div className={styles.veryall}>
        <div className={styles.all}>
            <div className={styles.video}>
                <ReactPlayer url={'https://www.youtube.com/watch?v=U-_qSBfMH1Q'} onEnded={() => {
                    setAllowQuestions(true);
                    questionRef.current?.scrollIntoView({behavior: 'smooth'});
                }}/>
            </div>
        </div>
            {allowQuestions && 
            <>
            {permissions ?
        <div className={styles.qsection} ref={questionRef}>
            {vDomande.map(((dom, i) => 
                <Domande index={i} question={dom.domanda} rispostaSelezionata={answers[i]} setRisposta={setAnswers} risposte={dom.risposte} />
            ))}
            {submit && <button onClick={() => Mandaledomande()}>Submit</button>}
        </div> : <>
        <div>
            Hai già votato (grafici)
            </div>
        </> }
        <Wave className={styles.wave}>
            <text x="900" y="300" style={{fill: 'white', fontSize: '30px' }}> Sito realizzato dalla 5Bosa 2021/2022 </text> 
        </Wave>
            </>}
            </div>
    </>
    )
}
