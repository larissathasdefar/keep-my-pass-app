import React from 'react';
import {Clipboard} from 'react-native'
import styled from 'styled-components';
import Button from '../Button/Button';
import Colors from '../colors';

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

const writeToClipboard = async (pass) => {
  await Clipboard.setString(pass);
};

const PassItemList = ({first, navigation, pass}) => (
  <Section first={first}>
    <TouchArea onPress={() => navigation.navigate('Detail', {id: pass.id})}>
      <Description>
        <Bold>Service:</Bold> {pass.website}
      </Description>
      <Description>
        <Bold>Login:</Bold> {pass.login}
      </Description>
    </TouchArea>
    <Button title="Copy" onPress={() => writeToClipboard(pass.password)} />
  </Section>
);

export default PassItemList;
