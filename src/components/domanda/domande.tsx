import React, { ReactElement } from 'react'
import styles from './domande.module.scss'


interface Props {
    question: string
    risposte: string[]
    rispostaSelezionata: number
}

export default function Domande({question, risposte, rispostaSelezionata}: Props): ReactElement {
    return (
        <div className={styles.questionform}>
            <div className={styles.question}>
                <span>
                    {question}
                </span>
            </div>
            <div className={styles.answer}>
                div
            </div>
        </div>
    )
}
