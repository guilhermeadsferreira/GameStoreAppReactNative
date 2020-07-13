import React from "react";
import {
  GameContainer,
  GameArtContainer,
  GameArt,
  BackButton,
  GameInfoContainer,
  GameThumbContainer,
  GameThumb,
  GameInfo,
  Download,
  GameStatsContainer,
  Stars,
  ScreenShotsContainer,
  ScreenShots,
  ScreenShotContainer,
  ScreenShot,
  Description,
  ScrollContainer,
} from "./styles";
import Text from "../../components/Text";
import { Ionicons } from "@expo/vector-icons";

const GameScreen = ({ route, navigation }) => {
  const { game } = route.params;

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Ionicons
          key={s}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= s ? "#819ee5" : "#434958"}
        />
      );
    }

    return <Stars>{stars}</Stars>;
  };

  return (
    <ScrollContainer>
      <GameContainer>
        <GameArtContainer>
          <GameArt source={game.cover} />
          <BackButton onPress={() => navigation.goBack()}>
            <Ionicons name="ios-close" size={48} color="#ffffff" />
          </BackButton>
        </GameArtContainer>

        <GameInfoContainer>
          <GameThumbContainer>
            <GameThumb source={game.cover} />
          </GameThumbContainer>
          <GameInfo>
            <Text heavy medium>
              {game.title}
            </Text>
            <Text color="#9a9a9a">{game.teaser}</Text>
          </GameInfo>
          <Download>
            <Ionicons name="md-cloud-download" size={24} color="#ffffff" />
          </Download>
        </GameInfoContainer>

        <GameStatsContainer>
          {renderStars()}
          <Text heavy color="#9a9a9a">
            {game.rating}
          </Text>
          <Text bold color="#9a9a9a">
            {game.category[0]}
          </Text>
          <Text bold color="#9a9a9a">
            {game.age}
          </Text>
          <Text bold color="#9a9a9a">
            Game of the day
          </Text>
        </GameStatsContainer>

        <ScreenShotsContainer>
          <ScreenShots horizontal={true} showsHorizontalScrollIndicator={false}>
            {game.screenshots.map((screenshot, index) => {
              return (
                <ScreenShotContainer key={index}>
                  <ScreenShot source={screenshot} />
                </ScreenShotContainer>
              );
            })}
          </ScreenShots>
        </ScreenShotsContainer>

        <Description medium color="#9a9a9a">
          {game.description}
        </Description>
      </GameContainer>
    </ScrollContainer>
  );
};

export default GameScreen;
