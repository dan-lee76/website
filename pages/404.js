import React from 'react'
import styles from './404.module.css'
export default function Custom404() {
    return <div className={styles.rickBody}>
        <h1 className={styles.rickHeader}>Never gonna find this page</h1>
        <h2 className={styles.rickSubHeader}>Find a rick to take you home</h2>
        <a href="/"><img className={styles.rickRightBottom} src="404/rick.gif" alt="give you up"  /></a>
        <a href="/"><img className={styles.rickLeftBottom} src="404/rick.gif" alt="let you down"  /></a>
        <a href="/"><img className={styles.rick}  src="404/fav.ico" alt="never gonna"  /></a>
    </div>
}