import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Text from "../../components/Text";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

export const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")};
  font-weight: ${(props) => (props.selected ? "700" : "500")};
`;

export const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
  margin-top: 2px;
`;

export const Games = styled.FlatList`
  margin-top: 32px;
  flex: 1;
`;

export const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

export const GameCover = styled.Image`
  height: 300px;
  width: 100%;
`;

export const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

export const GameImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const GameTitle = styled.View`
  margin: 0 30px;
`;
