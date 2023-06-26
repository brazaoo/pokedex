import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Headers, LogoImage, BackImage } from "../homePage/Style";
import {
  CardPowers,
  ImgContainer,
  ImgDetails,
  PowerContainer,
  PowerDetails,
  SuperPowerDetails,
  SuperPowerDetailsMini,
  TypeContainer,
} from "./Style";
import { goToBack, goToHomePage } from "../../routes/Coordinator";
import Logo from "../../img/pokelogo.png";
import ButtonBack from "../../img/voltar.png";
import Header from "../../components/header";

const DetailsPage = () => {
  const navigate = useNavigate();
  const [selectPoke, setSelectPoke] = useState({});

  // const getDetailsPoke = () => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/2`)
  //   .then((res) => {
  //     setSelectPoke(res.data)
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     alert("Erro")
  //   })
  // }

  // useEffect(() => {
  //  getDetailsPoke()
  // }, [])
  useEffect(() => {
    //O useParams está retornando um Objeto - transformando o objeto em string para conseguir chamar o axios
    // var nameObject = JSON.stringify(name);
    // var nameString = nameObject.slice(7, -3);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then((res) => {
        setSelectPoke(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  return (
    <div>
      <Header isHome={false}></Header>
      <Container>
        <ImgContainer>
          <ImgDetails>
            <img
              src={
                selectPoke &&
                selectPoke.sprites &&
                selectPoke.sprites.front_default
              }
            />
          </ImgDetails>
          <ImgDetails>
            <img
              src={
                selectPoke &&
                selectPoke.sprites &&
                selectPoke.sprites.back_default
              }
            />
          </ImgDetails>
        </ImgContainer>

        <PowerContainer>
          <PowerDetails>
            {" "}
            <div>
              <h2>Stats</h2>
              {selectPoke.stats &&
                selectPoke.stats.map((stat) => {
                  return (
                    <div key={stat.stat.name}>
                      <p>
                        <strong> {stat.stat.name.toUpperCase()}: </strong> {stat.base_stat}
                      </p>
                    </div>
                  );
                })}
            </div>
          </PowerDetails>
        </PowerContainer>

        <TypeContainer>
          <SuperPowerDetailsMini>
            <div>
              {" "}
              <h2>Type</h2>
              {selectPoke.types &&
                selectPoke.types.map((type) => {
                  return (
                    <div key={type.type.name}>
                      <p> {type.type.name} </p>
                    </div>
                  );
                })}
            </div>
          </SuperPowerDetailsMini>
          <SuperPowerDetails>
            <div>
              {" "}
              <h2>Skills</h2>
              {selectPoke.moves &&
                selectPoke.moves.map((move, index) => {
                  if (index <= 3 && selectPoke.moves.length) {
                    return (
                      <div key={move.move.name}>
                        <p> {move.move.name} </p>
                      </div>
                    );
                  }
                })}
            </div>
          </SuperPowerDetails>
        </TypeContainer>
      </Container>
    </div>
  );
};

export default DetailsPage;
