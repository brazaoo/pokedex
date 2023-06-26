import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  color: black;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  box-shadow: 5px 5px 5px lightgray;
  :hover {
    transform: translate(0px, -2%);
    background-color: whitesmoke;
    transition: 0.3s;
  }
  @media (min-width: 768px) {
		width: 30%;
	}
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PokemonPhoto = styled.img`
  width: 200px;
`;
export const PokemonName = styled.h2`
  color: orange;
  text-shadow: 1px 1px 1px darkslategrey;
  font-size: 1.8rem;
  margin: 10px;
`;
export const CardButtons = styled.button`
  color: whitesmoke;
  border: none;
  padding: 10px;
  background-color: #3fa796;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 3px 3px 3px lightgray;
  :hover {
    background-color: orangered;
    transition: 0.2s;
    cursor: pointer;
  }
`;
