import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { goToHomePage, goToPokedex } from "../../routes/Coordinator";
import {
  CardContainer,
  Headers,
  Container,
  PokemonPhoto,
  LogoImage,
  CardButtons,
  PokemonName,
  ImgPokeball,
  PokeButton,
} from "./Style";
import { BASE_URL } from "../../constants/Constants";
// import CartContext from "../../context/Context";
// import Pokedex from "../pokedex/Pokedex";
import { useState } from "react";
import axios from "axios";
import Logo from "../../img/pokelogo.png";
import Pokebola from "../../img/pokebola.png";
import Header from "../../components/header";

function HomePage(item) {
  const navigate = useNavigate();

  const [cartPoke, setCartPoke] = useState([]);
  const [poke, setPoke] = useState([]);

  const addToPoke = (item) => {
    console.log(item);
    setCartPoke(cartPoke.filter((pokemon) => pokemon.id !== item.length));
    setPoke([...poke, item]);
  };

  const [data] = useRequestData(BASE_URL);

  const pokemon =
    data &&
    data.results.map((item) => {
      const goToDetailsPage = () => {
        navigate("/details-page");
        localStorage.setItem("url", item.url);
      };

      const Imgs = () => {
        const [img, setImg] = useState("");
        axios.get(item.url).then((response) => {
          setImg(response.data.sprites.front_default);
        });
        return <PokemonPhoto src={img} alt="imagem-pokemon" />;
      };

      return (
        <CardContainer
          id={item.id}
          item={item}
          key={item.name}
          poke={poke}
          setPoke={setPoke}
        >
          <Imgs />
          <PokemonName>{item.name}</PokemonName>
          <CardButtons onClick={() => addToPoke(item)}>Capturar</CardButtons>
          <CardButtons onClick={goToDetailsPage}>Detalhes</CardButtons>
        </CardContainer>
      );
    });

  return (
    <div>
      <Header></Header>
      <Container className="container">{pokemon}</Container>
    </div>
  );
}

export default HomePage;
