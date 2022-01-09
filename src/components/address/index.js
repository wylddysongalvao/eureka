import React from  'react';
import CityImg from '../../assets/city.png';
import MarkerImg from '../../assets/marker.png';
import FlagImg from '../../assets/flag.png';

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
    BoxAddress
} from  './styles';

function AddressPage({data}) {
    return(
        <ContainerData>
        <BoxAddress>
            <TitleAddress>{data.cep}</TitleAddress>
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
                <TextBold>Ibge:</TextBold> {data.ibge}
            </TextBox>
            <TextBox>
                <TextBold>ddd:</TextBold> {data.ddd}
            </TextBox>
        </Box>
    </ContainerData>
    )
}

export default AddressPage;