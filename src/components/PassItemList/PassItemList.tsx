import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components';
import Base from '../components/Base/Base';
import Button from '../components/Button/Button';
import Colors from '../components/colors';

const Section = styled.View`
  margin: 8px 0px;
  padding: 8px 0px;
  border-top-color: #cccccc;
  border-top-width: ${({first}) => (first ? 0 : 1)};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.Text`
  margin-top: 8;
  font-size: 18;
  color: ${Colors.dark};
`;

const Bold = styled(Description)`
  font-weight: 600;
`;

const TouchArea = styled.TouchableOpacity`
  width: 82%;
`;

const ScrollableArea = styled.ScrollView`
  flex: 10;
`;

const Header = styled.Text`
  flex: 1;
  font-size: 16;
  text-align: center;
  margin-bottom: -26;
`;

const Footer = styled.View`
  flex: 1;
`;

const getToken = async onError => {
  try {
    const token = await AsyncStorage.getItem('KeepMyPassToken');
    return token
  } catch (error) {
    onError()
  }
};

const PassItemList = ({first, navigation, pass}) => (
  <Section first={first}>
    <TouchArea onPress={() => navigation.navigate('Detail', {id: pass.is})}>
      <Description>
        <Bold>Service:</Bold> {pass.website}
      </Description>
      <Description>
        <Bold>Login:</Bold> {pass.login}
      </Description>
    </TouchArea>
    <Button title="Copy" onPress={() => navigation.navigate('Login')} />
  </Section>
);

export default PassItemList;
