import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import Address from '../address/index';

import { ContainerStored } from './styles';

function StoredComponent() {

    const [stored, setStored] = React.useState([]);

    const GetStored = async () => {
       await api.get('/cep').then((res) => {
            setStored(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        GetStored();
    }, []);

    return(
        <ContainerStored>
            {stored.map((item) => (
                <Address key={item.id} data={item}/>
               
            ))}
        </ContainerStored>
    )
}

export default StoredComponent;