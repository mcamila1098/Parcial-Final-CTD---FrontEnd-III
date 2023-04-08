import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

const Dentist = () => {
    const params = useParams();
    const [dataDetail, setDataDetail] = useState([]);
    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/${params.id}')
        const convert = await data.json();
        setDataDetail(convert);
    }
    useEffect(() =>{
        getData();
    });
    return(
        <div>
            <h1>Detalle</h1>
            {/* <ol>
                {dataDetail.map(object => (<li>{object.email}</li>))} 
                {dataDetail.map(odonto => (
                    <Link key={odonto.id} to={`${odonto.id}`} >
                        <li>
                            {odonto.email}
                        </li>
                    </Link>
                ))}
            </ol> */}
            <h2>{params.id}</h2>
        </div>

    )
}

export default Dentist