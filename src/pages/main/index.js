import React, {useState} from 'react';
import api from '../../services/api';
import SearchImg from '../../assets/search.png';
import Address from '../../components/address';
import Loading from '../../components/loading';
import ButtonComponent from '../../components/button';
import Stored from '../../components/stored';
import Header from '../../components/header';

import {
    Container,
    Input,
    Button,
    Form,
    Icon,    
    Text
} from  './styles';

function Main() {

    const [cep, setCep] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [stored, setStored] = useState(false);
    
    const queryCep = async (e) => {
        e.preventDefault();
        setLoading(true);
        setData([]);

        await api.get(`/cep/single/${cep}`).then(response => {
            setData(response.data);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
        }); 
    }

    return (
        <Container>
            <Header />
            <Form onSubmit={queryCep}>
                <Icon src={SearchImg} />
                <Input value={cep} onChange={e => {setCep(e.target.value.replace(/([0-9]{5})([0-9]{3})/gm, (cep, g1, g2) => {return g1 + '-' + g2}))}}  maxLength={9} />
                <Button>
                    Buscar
                </Button>
            </Form>
            {loading ? <Loading /> :
                <>
                    {stored ? 
                        <>
                            <ButtonComponent Onclick={() => {setStored(false)}} Text="Buscar" />
                            <Stored Stored={stored} />
                        </> 
                        :
                        <> 
                            <ButtonComponent Onclick={() => {setStored(true)}} Text="Armazenados" />
                            {data.length !== 0 ? <Address data={data} /> : <Text>Nenhum dado a mostrar</Text> } 
                        </> 
                    }
                </>
            }
        </Container>
    )
}

export default Main;    