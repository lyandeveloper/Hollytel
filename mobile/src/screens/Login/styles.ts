import styled from 'styled-components/native';

export const Container = styled.View``;

export const CoverWrap = styled.View`
  position: relative;
  width: 100%;
  height: 100px;
  z-index: 1;
`;

export const Logo = styled.Image`
  position: absolute;
  z-index: 999;
  margin-top: 70px;
  margin-left: 30px;
`;

export const CoverImg = styled.Image`
  position: absolute;
  width: 100%;
  height: 50%;
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(200, 200, 200, 0.5);
  z-index: 999;
`;

export const Form = styled.View`
  position: relative;
  top: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #fff;
  z-index: 999;
  padding: 20px;
`;

export const Fieldset = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #888;
`;

export const InputField = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  padding: 0 10px;
  height: 40px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  margin-top: 30px;
  background: #f22e62ff;
  color: white;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  margin-top: 10px;
  background: #fff;
  height: 50px;
  border: 1px solid #f22e62ff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTxtSecondary = styled.Text`
  color: #f22e62ff;
  font-size: 16px;
  font-weight: bold;
`;
