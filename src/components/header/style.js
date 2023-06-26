import styled from "styled-components";

export const Headers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(#254949, #7eceb3, #407072);
  color: whitesmoke;
  width: 100%;
  height: 75px;
  padding-left: 30px;
  padding-right: 30px;
`;
export const ImgPokeball = styled.img`
  width: 36px;
`;
export const PokeButton = styled.a`
  border: none;
  border-radius: 100%;
  :hover {
    transform: rotate(1turn);
    transition: 0.8s;
    cursor: pointer;
  }
`;
export const LogoImage = styled.img`
  width: 100px;
  :hover {
    transform: translate(0px, -0.5%);
    cursor: pointer;
    opacity: 0.9;
  }
`;
export const BackImage = styled.img`
  width: 70px;
  :hover {
    transform: translate(0px, -1%);
    cursor: pointer;
    opacity: 0.9;
  }
`;