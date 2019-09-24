import React from 'react';
import styled from 'styled-components';
import Base from '../components/Base/Base';
import Button from '../components/Button/Button';
import Passes from '../relay/PassesQuery'

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

const Home = ({navigation}) => {
  return (
    <Base>
      <Header>Click on the emails to see the password</Header>

      <ScrollableArea>
        <Passes navigation={navigation} />
      </ScrollableArea>

      <Footer>
        <Button
          title="Add a password"
          onPress={() => navigation.navigate('PassForm')}
        />
      </Footer>
    </Base>
  );
};

export default Home;
