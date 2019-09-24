import React from 'react';
import {Text, Clipboard} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay';
import styled from 'styled-components';
import environment from './Environment'
import Button from '../components//Button/Button';
import Colors from '../components//colors';

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

const Passes = ({navigation}) => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query PassesQuery {
        passes {
          edges {
            node {
              id
              website
              login
              password
            }
          }
        }
      }
    `}
    variables={{}}
    render={({error, props}) => {
      if (error) {
        return <Text>Error!</Text>;
      }
      if (!props) {
        return <Text>Loading...</Text>;
      }
      return props.passes.edges.map(({ node: pass }, index) => (
        <Section key={pass.id} first={index === 0}>
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
      ))
    }}
  />
)

export default Passes;
