import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #edf1f4;
    min-width: 350px;
`;

export const Input = styled.input.attrs({
    type: 'number',
    placeholder: 'Digite o Cep'
    })`
    min-width: 350px;
    width: 25%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #FFF;
    background-color: #FFF;
    color: #342F36;
    font-size: 18px;
    padding: 0 20px;
    outline:none;
    transition: all 0.3s;

    &:focus {
        border: 1px solid #4094f7;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 30%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.button.attrs({
    type: 'submit'

})`
    min-width: 150px;
    width: 5%;
    border: none;
    background-color: #4094f7;
    border:none;
    box-shadow: 1px 1px 4px #6d6d6d;
    cursor: pointer;
    color:#fff;
    cursor: pointer;
    transition: all 0.3s;

   &:hover {
    transform: scale(1.1);
}

`;

