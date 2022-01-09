import React from "react";
import LogoImg from '../../assets/logo.png';
import{
    Header,
    Logo,
    TitleLogo
} from './styles';

function HeaderComponent() {
    return (
        <Header>
           <Logo src={LogoImg} />
           <TitleLogo>
               CONSULTA CEP
           </TitleLogo>
        </Header>
    )
}

export default HeaderComponent;