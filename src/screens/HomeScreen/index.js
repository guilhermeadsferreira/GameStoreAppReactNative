import React, { useState, useRef } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Avatar,
  Categories,
  Category,
  CategoryName,
  CategoryDot,
  Games,
  Game,
  GameCover,
  GameInfo,
  GameImage,
  GameTitle,
} from "./styles";
import Text from "../../components/Text";
import categoriesList from "../../../categories";
import gamesList from "../../../games";

export default HomeScreen = ({ navigation }) => {
  const [selectCategory, setSelectedCategory] = useState("All");
  const gamesRef = useRef();

  const changeCategory = (category) => {
    gamesRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedCategory(category);
  };

  const GameItem = (game) => {
    return (
      <Game onPress={() => navigation.navigate("GameScreen", { game: game })}>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text medium bold>
              {game.title}
            </Text>
            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };

  return (
    <Container>
      <Header>
        <Text large>
          Hello{" "}
          <Text large bold>
            DesignIntoCode,
          </Text>
          {`\n`}
          <Text large bold>
            Best games for today
          </Text>
        </Text>

        <Avatar source={require("../../../assets/avatar.jpg")} />
      </Header>

      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoriesList.map((categorie, index) => {
          return (
            <Category key={index} onPress={() => changeCategory(categorie)}>
              <CategoryName selected={selectCategory === categorie}>
                {categorie}
              </CategoryName>
              {selectCategory === categorie && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>

      <Games
        data={gamesList.filter((game) => {
          return (
            game.category.includes(selectCategory) || selectCategory === "All"
          );
        })}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gamesRef}
      />
    </Container>
  );
};
