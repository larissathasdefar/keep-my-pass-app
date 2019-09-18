import React from 'react';
import {Text, View} from 'react-native';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './Environment'
import PassItemList from '../components/PassItemList/PassItemList'

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
      console.log(props)
      if (error) {
        return <Text>Error!</Text>;
      }
      if (!props) {
        return <Text>Loading...</Text>;
      }
      return props.passes.edges.map(({ node }, index) => (
        <PassItemList
          key={node.id}
          first={index === 0}
          navigation={navigation}
          pass={{ id: node.id, website: node.website, login: node.login, password: node.password }}
        />
      ))
    }}
  />
)

export default Passes;
