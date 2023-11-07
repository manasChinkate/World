import React from 'react'
import styles from "./CountryCard.module.css";

const CountryCard = (props) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
        <img className={styles.image} src={props.image} alt={props.alt} />
        </div>
        <h1 className={styles.h1}>{props.name}</h1>
        <div className={styles.subtitle}>
          <h3>{props.capital} | {props.population}</h3>
        </div>

      </div>
    </>

  )
}

export default CountryCard