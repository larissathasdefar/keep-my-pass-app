import React from 'react';
import {Clipboard} from 'react-native'
import styled from 'styled-components'
import {graphql, createFragmentContainer} from 'react-relay';
import createQueryRenderer from './QueryRender';
import Colors from '../components/colors'
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

const writeToClipboard = async (pass) => {
  await Clipboard.setString(pass);
};

const PassDetail = ({query, navigation}) => {
  const {pass} = query;
  return (
    <Base>
      <Body>
        <Title>{pass.website}</Title>
        <Info>
          <Bold>Login:</Bold> {pass.login}
        </Info>
        <Info>
          <Bold>Password:</Bold> {pass.password}
        </Info>
        <Button title="Copy" onPress={() => writeToClipboard(pass.password)} />
        <Button
          title="Edit"
          onPress={() => navigation.navigate('PassForm', {pass})}
        />
        <Button title="Delete" onPress={() => navigation.navigate('Login')} />
      </Body>
    </Base>
  );
};

export const PassFragmentContainer = createFragmentContainer(
  PassDetail, {
  query: graphql`
    fragment PassDetail_query on Query {
      pass(id: $id) {
        id
        website
        login
        password
      }
    },
  `,
});

export default createQueryRenderer(
  PassFragmentContainer,
  PassDetail,
  {
    query: graphql`
      query PassDetailQuery($id: ID!) {
        ...PassDetail_query
      }
    `,
    queriesParams: ({navigation}) => ({id: navigation.getParam('id')}),
  },
);
