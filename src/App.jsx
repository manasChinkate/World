import React, { useEffect, useState } from 'react'
import CountryCard from './components/CountryCard/CountryCard'
import { getData } from './components/backend/backend'
import Nav from './components/Nav/Nav.jsx'
import { Link } from 'react-router-dom'
import Loader from './components/Loader'
import Form from 'react-bootstrap/Form';
import './App.css'




const App = () => {

  const [Country, setCountry] = useState([]);  //for fetching and showing the data
  const [Loading, setLoading] = useState(true) //for loading api


  const [region, setRegion] = useState(''); //for region vise listing
  const [country, setCountryName] = useState(''); //for naming vise listing
  const [filterList, setFilterList] = useState(''); //to store filterd list


  const handleRegion = (event) => {
    setRegion(event.target.value);

  }
  const handleName = (event) => {
    setCountryName(event.target.value);

  }

  useEffect(() => {
    getData().then(result => {

      const countries = result.data
      setCountry(countries);
      setLoading(false)
      setFilterList(Country)

    });
  }, [])

  useEffect(() => {
    // console.log("region or country changed", region, country);

    if (region === '' && country === '') {
      setFilterList(Country);
    }
    else {

      let updatedcountries = Country;

      if (region.length) {
        updatedcountries = updatedcountries.filter(countryName => {
          if (countryName.region === region)
            return true;
          return false;
        });
      }

      if(country.length){
        updatedcountries = updatedcountries.filter(countryName =>{
          const lowercaseName = countryName.name.toLowerCase();
          if(lowercaseName.includes(country.toLowerCase()))
            return true;
          return false;
        });
      }
      setFilterList(updatedcountries);
  
    }
  }
    , [region, Country, country])



  return (
    <>
      {/* <Nav /> */}

      <div className='btndiv'
      value={region}
      onClick={handleRegion}
      
      style={{
        backgroundColor:'rgb(37, 37, 37)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'5px',
        // position:"fixed"

      }}>
        <div style={{
          gap:'5px',
          display:'flex',
        alignItems:'center',
        justifyContent:'center',
        }}>
        <button value={"Asia"} className='btn'>Asia</button>
        <button value={"Europe"} className='btn'>Europe</button>
        <button value={"Americas"} className='btn'>Americas</button>
        <button value={"Africa"} className='btn'>Africa</button>
        <button value={"Oceania"} className='btn'>Oceania</button>
      </div>
      </div>


      <div>
        <div className='wrapper'>
          
          <div style={{
            display: "flex",
            
          }}>



            <Form.Control type="text" placeholder="Search By Name"

              onChange={handleName}
              value={country}
              style={{
                backgroundColor: 'white',
                height: "40px",
                border: 'None',
                margin: '10px',
                paddingLeft: '5px',
                color: 'black',
                borderRadius: '7px',
                width:"50%"

              }}
            />
            <Form.Select placeholder="Search By Name"
              value={region}
              onChange={handleRegion}


              style={{
                backgroundColor: 'white',
                height: "40px",
                border: 'None',
                margin: '10px',
                paddingLeft: '5px',
                paddingRight: '5px',
                color: 'black',
                width:"50%",
                borderRadius: '7px'

              }}
            >

              <option  ></option>
              <option value={"Africa"} >Africa</option>
              <option value={'Americas'}>Americas</option>
              <option value={'Asia'}>Asia</option>
              <option value={'Europe'}>Europe</option>
              <option value={'Oceania'}>Oceania</option>

            </Form.Select>


          </div>

        </div>
      </div>

      <div className="body" >
        <div className='main' >

          {
            Loading ?

              <Loader />
              :
              <>
                {
                  filterList.map(countryy => (

                    <Link style={{ textDecoration: "None" }} to={`/Card/${countryy.alpha3Code}`}>
                      <CountryCard
                        name={countryy.name}
                        image={countryy.flags.png}
                        capital={countryy.capital}
                        population={countryy.population}
                        key={countryy.name}
                      />
                    </Link>

                  ))}
              </>
          }

        </div>
      </div>
    </>


  )
}

export default App