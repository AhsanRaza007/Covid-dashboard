import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
const Dashboard = () => {

    let [data, setData] = useState({
        "death": 0,
        "recovered": 0,
        "confirmed": 0
    });

    useEffect(()=>{
        axios.get('https://covid19.mathdro.id/api/')
        .then((res)=>{
            let gotData = {
                "death": res.data.deaths.value,
                "confirmed": res.data.confirmed.value,
                "recovered": res.data.recovered.value
            }
            setData(gotData);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [data])

    return (
        <div class="container-fluid">
            <div class="row d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                <Card color="danger" name="Deaths" number={data.death}/>
                <Card color="success" name="Recovered" number={data.confirmed}/>
                <Card color="warning" name="Confirmed" number={data.recovered}/>
            </div>
        </div>
        
    );
};

export default Dashboard;