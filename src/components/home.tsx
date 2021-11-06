import React, { useState } from 'react'
import styles from './home.module.scss'
import ReactPlayer from 'react-player'
import clsx from 'clsx'
interface Props {
    
}

export default function Home({}: Props):JSX.Element {
    const [allowQuestions, setAllowQuestions] = useState(false);
    return (
        <>
        <div className={styles.all}>
            <div className={styles.video}>
                <ReactPlayer url={'https://www.youtube.com/watch?v=Bx2DavcGhl8'} onEnded={() => setAllowQuestions(true)}/>
            </div>
        </div>
       {allowQuestions && <div>Domande</div>}
    </>
    )
}
