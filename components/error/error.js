import React from "react"
import styles from "../../styles/error.module.scss"

export function NavBar(props){
    return (
        props.error ? <div className={styles.error}>{props.error}</div> : <></>
    )
}