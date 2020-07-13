import React from "react";
import {
  Container,
  Header,
  Search,
  SearchContainer,
  SearchIcon,
  PopularGame,
  PopularGameContainer,
  PopularGames,
  SectionContainer,
  LiveGamesTitle,
  LiveGames,
  LiveGame,
  LiveGameBadge,
  LiveGameContainer,
  LiveGameOver,
  LiveGameTitle,
} from "./styles";
import Text from "../../components/Text";
import { Entypo } from "@expo/vector-icons";
import games from "../../../games";

const LiveScreen = () => {
  return (
    <Container>
      <Header>
        <Text large bold>
          Streaming
        </Text>
        <SearchContainer>
          <Search
            placeholder="Search live streams or games..."
            placeholderTextColor="#838383"
          />
          <SearchIcon>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SectionContainer>
        <Text medium bold>
          Popular Games
        </Text>

        <PopularGames horizontal={true} showsHorizontalScrollIndicator={false}>
          {games.map((game, index) => {
            return (
              <PopularGameContainer key={index}>
                <PopularGame source={game.cover} />
              </PopularGameContainer>
            );
          })}
        </PopularGames>
      </SectionContainer>

      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>
            Live Now
          </Text>
          <Text bold color="#819ee5">
            View all
          </Text>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
};

export default LiveScreen;
