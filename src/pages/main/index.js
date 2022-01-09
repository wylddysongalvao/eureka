import React, {useState} from 'react';
import api from '../../services/api';
import SearchImg from '../../assets/search.png';
import Address from '../../components/address';
import Loading from '../../components/loading';
import Menu from '../../components/menu';
import Stored from '../../components/stored';
import {
    Container,
    Input,
    Button,
    Form,
    Icon,    
} from  './styles';

function Main() {

    const [cep, setCep] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [stored, setStored] = useState(true);
    
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
            <Form onSubmit={queryCep}>
                <Icon src={SearchImg} />
                <Input value={cep} onChange={e => {setCep(e.target.value.replace(/([0-9]{5})([0-9]{3})/gm, (cep, g1, g2) => {return g1 + '-' + g2}))}}  maxLength={9} />
                <Button>
                    Buscar
                </Button>
            </Form>
            <Menu/>
            {loading ? <Loading /> : null}
            {stored ? <Stored />:<> {data.length != 0 ? <Address data={data} /> : null } </> }
        </Container>
    )
}

export default Main;    