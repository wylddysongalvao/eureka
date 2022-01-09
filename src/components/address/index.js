import React from  'react';
import CityImg from '../../assets/city.png';
import MarkerImg from '../../assets/marker.png';
import FlagImg from '../../assets/flag.png';
import PeoplesImg from '../../assets/peoples.png';
import PhoneImg from '../../assets/phone.png';
import DeleteImg from '../../assets/erase.png';
import api from '.././../services/api';
import {
    ContainerData,
    Address,
    AddressList,
    AddressListItem,
    IconAddress,
    TitleAddress,
    Text,
    Box,
    TextBox,
    TextBold,
    BoxAddress,
    IconDelete
} from  './styles';

function AddressPage({data, Delete, Id}) {

    const Erase = async() => {
        await api.delete(`/cep/${Id}`).then(() => {
            Delete();
        }).catch((err) => {
            console.log(err);
        });
    }

    const Confirm = () => {
        console.log(Id);
        if(window.confirm('Deseja realmente excluir este endereço?')) {
            Erase();
        }
    }

    return(
        <ContainerData>
        <BoxAddress>
            <TitleAddress>{data.cep}</TitleAddress>
            {Delete ? <IconDelete onClick={Confirm} src={DeleteImg} /> : null}
        </BoxAddress> 
        <Address>

            <AddressList>
                <AddressListItem style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <IconAddress src={MarkerImg} /> <Text>{data.logradouro}</Text>
                </AddressListItem>
                <AddressListItem style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <IconAddress src={CityImg} /> <Text>{data.localidade}</Text>
                </AddressListItem>
            </AddressList>

            <AddressList>
                <AddressListItem style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <IconAddress src={MarkerImg} /> <Text>{data.bairro}</Text>
                </AddressListItem>
                <AddressListItem style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                    <IconAddress src={FlagImg} /> <Text>{data.uf}</Text>
                </AddressListItem>
            </AddressList>
        </Address>
        <BoxAddress>
            <TextBox>
                Complemento: {data.complemento}
            </TextBox>
        </BoxAddress>
        <Box>
            <TextBox>
                <IconAddress src={PeoplesImg} />
                <TextBold>Ibge: </TextBold>  {data.ibge}
            </TextBox>
            <TextBox>
                <IconAddress src={PhoneImg} />
                <TextBold>ddd: </TextBold>  {data.ddd}
            </TextBox>
        </Box>
    </ContainerData>
    )
}

export default AddressPage;