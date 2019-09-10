import React from 'react';
import styled from 'styled-components';
import Colors from '../components/colors';
import Base from '../components/Base/Base';
import Button from '../components/Button/Button';

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

const Detail = ({navigation}) => {
  return (
    <Base>
      <Body>
        <Title>Hotmail</Title>
        <Info>
          <Bold>Login:</Bold> email@lalalala.com
        </Info>
        <Info>
          <Bold>Password:</Bold> abcde
        </Info>
        <Button title="Copy" onPress={() => navigation.navigate('Login')} />
        <Button title="Edit" onPress={() => navigation.navigate('Login')} />
        <Button title="Delete" onPress={() => navigation.navigate('Login')} />
      </Body>
    </Base>
  );
};

export default Detail;
