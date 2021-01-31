import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Report = () => {
    let [countries, setCountries] = useState([]);
    useEffect(async ()=>{
        let countriesRes = await axios.get('https://covid19.mathdro.id/api/countries');
        setCountries(countriesRes.data.countries);
    }, [countries]);
    return (
        <div className="container-fluid">
            {
                countries.map((country)=>{
                    return  <Country country={country.name}/>
                })
            }
        </div>
    );
};

export default Report;