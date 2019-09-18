import React from 'react';
import {Clipboard} from 'react-native'
import styled from 'styled-components';
import Colors from '../colors';
import Base from '../Base/Base';
import Button from '../Button/Button';

const Title = styled.Text`
  margin: 8px;
  font-size: 24;
  color: ${Colors.dark};
  text-align: center;
`;

const Info = styled.Text`
  margin-top: 8;
  font-size: 18;
  color: ${Colors.dark};
`;

const Bold = styled(Info)`
  font-weight: 600;
`;

const Body = styled.View``;

const writeToClipboard = async (pass) => {
  await Clipboard.setString(pass);
};

const PassDetail = ({pass}) => {
  const {website, login, password} = pass;
  return (
    <Base>
      <Body>
        <Title>{website}</Title>
        <Info>
          <Bold>Login:</Bold> {login}
        </Info>
        <Info>
          <Bold>Password:</Bold> {password}
        </Info>
        <Button title="Copy" onPress={() => writeToClipboard(password)} />
        <Button title="Edit" onPress={() => navigation.navigate('Login')} />
        <Button title="Delete" onPress={() => navigation.navigate('Login')} />
      </Body>
    </Base>
  );
};

export default PassDetail;
