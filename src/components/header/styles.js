import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px;

    @media (max-width: 500px) {
        justify-content: center;
    }
`;

export const Logo = styled.img.attrs({
    alt: 'logo'
})`
    width: 50px;
    height: 50px;
    margin: 20px;
`;

export const TitleLogo = styled.h2`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;