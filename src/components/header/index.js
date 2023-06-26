import react from "react";
import useRequestData from "../../hooks/useRequestData";
import ButtonBack from "../../img/voltar.png";
import Logo from "../../img/pokelogo.png";
import Pokebola from "../../img/pokebola.png";
import { goToBack } from "../../routes/Coordinator";
import {
  BackImage,
  Headers,
  ImgPokeball,
  LogoImage,
  PokeButton,
} from "./style";

function Header({ isHome = true }) {
  return (
    <Headers className="header">
      <a href="/">
        <LogoImage src={Logo} title="Home"></LogoImage>
      </a>
      {isHome ? (
        <PokeButton href="/pokedex">
          <ImgPokeball src={Pokebola} title="Pokedex" />
        </PokeButton>
      ) : (
        <a href="/">
          <BackImage src={ButtonBack} title="Voltar"></BackImage>
        </a>
      )}
    </Headers>
  );
}
export default Header;
