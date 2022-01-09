import styled from "styled-components";

export const ContainerMenu  = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  justify-content: center;
  align-self: center;
  max-width: 570px;
  margin: 5px 20px;

  @media (max-width: 500px) {
    width: 100%;
    }
  `;

  export const Menu = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin:10px;
    padding: 0;
`;

export const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
`;	

export const MenuButton = styled.a`
    width: 100px;
    text-align: center;
    color: #fff;
    border: 1px solid #0378fe;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 5px;
`;