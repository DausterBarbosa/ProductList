import styled from 'styled-components/native';

export const ListHeaderContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  align-items: center;
`;

export const ListHeaderContainerLabel = styled.Text`
  font-size: 15px;
  color: #777;
  font-weight: bold;
`;

export const ListHeaderItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ListHeaderContainerItem = styled.Text<{
  selected: boolean;
}>`
  font-size: 15px;
  color: ${props => (props.selected ? '#FFF' : ' #f8d551')};
  border: 1px solid #f8d551;
  background: ${props => (props.selected ? '#f8d551' : '#FFF')};
  border-radius: 50px;
  padding: 5px 10px;
  margin-left: 5px;
  text-align: center;
  font-weight: bold;
`;
