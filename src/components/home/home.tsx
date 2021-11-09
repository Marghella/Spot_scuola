import React, { useState, useEffect } from 'react'
import styles from './home.module.scss'
import ReactPlayer from 'react-player'
import Domande from '../domanda/domande'
import risorse from '../domanderisposte.json'
import axios from 'axios'
interface Props {
    
}

export default function Home({}: Props):JSX.Element {
    const [allowQuestions, setAllowQuestions] = useState(false);
    // Se sono 5 vuol dire nessuna risposta
    const { domande, risposte } = risorse;
    let vDomande = [];
    for (let i = 0; i < domande.length; i++) {
        vDomande.push({domanda: domande[i], risposte: risposte[i]}) 
    }

    useEffect(() => {
        // Biscotto?
        axios.get(`http://localhost:5000/check`, { withCredentials: true })
        .then((d)=> console.log(d))
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
        <div className={styles.all}>
            <div className={styles.video}>
                <ReactPlayer url={'https://www.youtube.com/watch?v=U-_qSBfMH1Q'} onEnded={() => setAllowQuestions(true)}/>
            </div>
        </div>
       {allowQuestions && <>
            {vDomande.map((dom => 
                <Domande question={dom.domanda} rispostaSelezionata={5} risposte={dom.risposte} />
            ))}
        </>}
    </>
    )
}
