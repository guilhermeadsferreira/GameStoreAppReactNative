import styled from "styled-components/native";
import Text from "../../components/Text";

export const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

export const Header = styled.View`
  margin: 32px 16px 0 16px;
`;

export const SearchContainer = styled.View`
  margin: 32px 8px;
  background-color: #404040;
  border-radius: 100px;
  justify-content: center;
`;

export const Search = styled.TextInput`
  padding: 16px 64px 16px 32px;
  color: #c6c6c6;
`;

export const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const SectionContainer = styled.View`
  margin: 0 16px;
`;

export const PopularGames = styled.ScrollView`
  margin: 16px 0 16px -16px;
`;

export const PopularGameContainer = styled.View`
  margin: 0 16px;
`;

export const PopularGame = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const LiveGamesTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LiveGames = styled.FlatList`
  flex: 1;
  margin: 16px 16px 0 16px;
`;

export const LiveGameContainer = styled.View``;

export const LiveGame = styled.Image`
  width: 100%;
  height: 275px;
  margin-bottom: 16px;
  border-radius: 12px;
`;

export const LiveGameOver = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: 8px;
  right: 16px;
`;

export const LiveGameTitle = styled.View`
  background-color: #819ee5;
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 4px;
`;

export const LiveGameBadge = styled.View`
  background-color: #e54949;
  border-radius: 4px;
  padding: 2px 8px;
`;
