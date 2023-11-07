import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getdetails } from '../backend/backend.js'
import styles from "./Card.module.css";

const Card = () => {


  const { countryCode } = useParams();
  const [details, setDetails] = useState({})
  useEffect(() => {
    getdetails(countryCode).then(result => {
      console.log("result :", result.data)
      setDetails(result.data)
    })
  }, [])

  

  
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imgcontainer}>
        <p className={styles.pt}>Flag of {details.name}</p>
          <img className={styles.img} src={details.flags?.png} alt={details.name} />
          
        </div>
        <div className={styles.details}>
          <h1 className={styles.h1}> {details.name}</h1>
          <p className={styles.p}> Population : {details.population}</p>
          {/* <p>{details.}</p>  */}
          <p className={styles.p}> Capital : {details.capital}</p>
          <p className={styles.p}> NativeName : {details.nativeName}</p>
          <p className={styles.p}> Region : {details.subregion}</p>
          
        </div>
      </div>
    </>
  )
}

export default Card