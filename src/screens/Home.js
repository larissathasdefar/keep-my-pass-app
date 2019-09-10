import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
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

const Login = ({navigation}) => {
  return (
    <Base>
      <Header>Click on the emails to see the password</Header>

      <ScrollableArea>
        <Section first>
          <TouchArea onPress={() => navigation.navigate('Detail')}>
            <Description>
              <Bold>Service:</Bold> Hotmail
            </Description>
            <Description>
              <Bold>Login:</Bold> emailasi@lalalala.com
            </Description>
          </TouchArea>
          <Button title="Copy" onPress={() => navigation.navigate('Login')} />
        </Section>

        <Section>
          <TouchArea onPress={() => navigation.navigate('Detail')}>
            <Description>
              <Bold>Service:</Bold> Hotmail
            </Description>
            <Description>
              <Bold>Login:</Bold> emailasi@lalalala.com
            </Description>
          </TouchArea>
          <Button title="Copy" onPress={() => navigation.navigate('Login')} />
        </Section>
      </ScrollableArea>

      <Footer>
        <Button
          title="Add a password"
          onPress={() => navigation.navigate('Add')}
        />
      </Footer>
    </Base>
  );
};

export default Login;
