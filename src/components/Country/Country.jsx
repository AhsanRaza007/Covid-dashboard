import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Country = (props) => {
    let country = props.country;
    let [countryData, setCountryData] = useState({
        "death": 0,
        "recovered": 0,
        "confirmed": 0
    })
    useEffect(()=>{
        axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then((res)=>{
            let gotData = {
                "death": res.data.deaths.value,
                "confirmed": res.data.confirmed.value,
                "recovered": res.data.recovered.value
            }
            setCountryData(gotData);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [countryData]);
    return (
        <>
            <div class="row d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">{country}</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row mb-5">
                <Card color="danger" name="Deaths" number={countryData.death}/>
                <Card color="success" name="Recovered" number={countryData.confirmed}/>
                <Card color="warning" name="Confirmed" number={countryData.recovered}/>
            </div>
        </>
    );
};

export default Country;