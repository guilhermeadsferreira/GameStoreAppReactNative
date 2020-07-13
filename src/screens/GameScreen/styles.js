import styled from "styled-components/native";
import Text from "../../components/Text";

export const ScrollContainer = styled.ScrollView``;

export const GameContainer = styled.View`
  background-color: #343434;
  flex: 1;
`;

export const GameArtContainer = styled.View``;

export const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 16px;
`;

export const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

export const GameThumbContainer = styled.View``;

export const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

export const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

export const Download = styled.View`
  background-color: #819ee5;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;

export const ScreenShots = styled.ScrollView``;

export const ScreenShotContainer = styled.View`
  padding: 16px;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;

export const ScreenShot = styled.Image`
  height: 200px;
  width: 300px;
  border-radius: 12px;
`;

export const Description = styled(Text)`
  margin: 0 16px 16px 16px;
  line-height: 22px;
  text-align: justify;
`;
