import styled from 'styled-components/native';

export const HeaderBar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BarContainer = styled.View`
  background: #fff;
  padding: 10px 10px 20px;
  elevation: 5;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  flex: 1;
  border-radius: 50px;
  padding: 0 10px;
  elevation: 3;
`;

export const SearchBarInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
`;

export const BarButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  background: #f8d551;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin-left: 5px;
`;

export const BottomBar = styled.View`
  margin-top: 15px;
`;

export const BottomBarLabel = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #f8d551;
`;

export const BottomBarInput = styled.TextInput`
  border-radius: 50px;
  padding: 10px 20px;
  background: #eee;
`;

export const BottomBarInputRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const BottomBarInputRowItem = styled.View`
  width: 49%;
`;

export const BottomBarButton = styled.Pressable`
  background: #f8d551;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  margin-top: 10px;
`;

export const BottomBarButtonLabel = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 15px;
`;

export const LabelFormError = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  color: red;
`;

export const LabelSavedProduct = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  color: green;
`;
