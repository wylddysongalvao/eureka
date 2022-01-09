import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    background-color: #141c2f;
    min-width: 350px;
    
`;


export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 500px;
    height: 40px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50px;
    background-color: #1f2a48;
    padding: 4px;
    border-radius: 13px;
    box-shadow: 0px 0px 10px 0px #191830;

    @media (max-width: 500px) {
        max-width: 90%;
    }
`;

export const Icon = styled.img.attrs({
    alt: 'ícone de busca'
})`
    width: 25px;
    height: 25px;    
`;

export const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Pesquisar o CEP',

    })`
    width: 70%;
    height: 25px;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: transparent;
    color: #fff;
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 2px;
    outline:none;
    margin: 5px;
    padding: 4px;
    transition: all 0.3s;
    // box-shadow: 2px 2px 4px #bfbfbf;

    &:focus {
        border: 1px solid #0378fe;
    }

    @media (max-width: 500px) {
        width: 55%;
    }
`;

export const Button = styled.button.attrs({
    type: 'submit'

})`
    min-width: 80px;
    width: 5%;
    border: none;
    background-color: #0378fe;
    border:none;
    height: 35px;
    cursor: pointer;
    color:#fff;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 8px;

   &:hover {
    transform: scale(1.1);
}
`;

export const Text = styled.p`
    margin: 0;
    margin-left: 10px;
    padding: 0;
    font-size: 14px;
    width: max-content;
`;