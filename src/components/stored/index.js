import React, {useEffect, useState} from 'react';
import { Component } from 'react/cjs/react.production.min';
import api from '../../services/api';
import Address from '../address/index';
import LoadingComponent from '../loading/index';

import { ContainerStored } from './styles';

function StoredComponent({Stored}) {

    const [stored, setStored] = useState([]);
    const [Loading, setLoading] = useState(false);

    const GetStored = async () => {
        setLoading(true);
       await api.get('/cep').then((res) => {
            setStored(res.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        }); 
    };

    useEffect(() => {
        GetStored();
    }, []);


    return(
        <ContainerStored>
            {Loading ? <LoadingComponent /> :
            <>
                {stored.map((item) => (
                    <Address Update={GetStored} Id={item._id} Delete={Stored} key={item._id} data={item}/>
                
                ))}
                </>
            }
        </ContainerStored>
    )
}

export default StoredComponent;