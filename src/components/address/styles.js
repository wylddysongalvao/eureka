import styled from 'styled-components';

export const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65%;
    max-width: 460px;
    height: auto;
    background-color: #1f2a48;
    list-style: none;
    margin:0;
    padding:20px;
    color: #fff;
    border-radius: 14px;
    box-shadow: 0px 0px 10px 0px #191830;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        padding: 40px;
    }

`;

export const Address = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 80%;
    height: 80px;

    @media (max-width: 500px) {
    
        flex-direction: column;
        width: 100%;
        height: 120px;
        
    }
`;

export const TitleAddress = styled.h3`
    font-size: 18px;
    margin: 0;
    align-self: flex-start;
    letter-spacing: 1px;
`;

export const AddressList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    list-style: none;   
    margin:0;
    padding:0;
`

export const BoxAddress = styled.div`
    display: flex;
    width: 77%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 15px;
    }
    `;

export const AddressListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    margin:5px;
    padding:0;

    @media (max-width: 500px) {
        margin:3px;
    }
`

export const IconAddress = styled.img.attrs({
    alt: 'ícones referentes ao endereço'
})`
    width: 20px;
    height: 20px;    
`;

export const Box = styled.div`
    display: flex;
    width: 80%;
    height: 60px;
    border-radius: 5px;
    background-color: #141c2f;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 12px;

    @media (max-width: 500px) {
        width: 100%;
        margin: 0px;
    }

`

export const Text = styled.p`
    margin: 0;
    margin-left: 10px;
    padding: 0;
    font-size: 14px;
    width: max-content;
`;

export const TextBox = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 14px;
    width: max-content;
`;

export const TextBold = styled.b`
    margin: 0;
    font-size: 14px;
    margin-left: 8px;
`;

export const InfoExtra = styled.div`

    background-color: #141c2f;
`

export const IconDelete = styled.img.attrs({
    alt: 'ícone de deletar'
})`
    width: 25px;
    height: 25px;
    cursor: pointer;
    
`