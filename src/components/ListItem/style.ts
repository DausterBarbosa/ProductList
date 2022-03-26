import styled from 'styled-components/native';

export const ListItemContainer = styled.View`
  border-radius: 7px;
  background: #fff;
  elevation: 5;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const ListItemHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ListItemInfoContaier = styled.View`
  flex: 1;
`;

export const ListItemName = styled.Text`
  font-size: 15px;
  color: black;
`;

export const ListItemPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 5px 0;
`;

export const ListItemStock = styled.Text`
  font-size: 15px;
  color: #777;
`;

export const ListItemId = styled.Text`
  font-size: 15px;
  color: #777;
  font-weight: bold;
  margin-top: 5px;
`;

export const ListItemBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #eee;
`;

export const ListItemBottomPanel = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ListItemBottomPanelInfo = styled.Text`
  font-size: 15px;
  background: #fff;
  padding: 5px 15px;
  border-radius: 7px;
  margin: 0 5px;
  color: black;
`;

export const ListItemBottomPanelButton = styled.Pressable``;

export const ListItemBottomTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
