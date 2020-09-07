import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 50px 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const AvatarWrapper = styled.TouchableOpacity`
  position: relative;
  width: 150px;
  height: 150px;
  background: #ccc;
  border-radius: 100px;
  margin-top: 20px;
  align-self: center;
`;

export const Avatar = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

export const Form = styled.View``;

export const InputText = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  margin-top: 20px;
  padding: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  padding: 15px;
  background: #f22e62ff;
  margin-top: 30px;
  border-radius: 8px;
`;

export const ButtonTxt = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;
