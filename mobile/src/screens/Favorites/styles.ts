import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 30px 20px;
`;

export const FavoriteTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  padding: 20px 0;
`;
