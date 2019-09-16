import * as React from 'react';
import {Text, View} from 'react-native';
import hoistStatics from 'hoist-non-react-statics';
import {QueryRenderer, GraphQLTaggedNode, Variables} from 'react-relay';

import Environment from './Environment';


type Config = {
  query: GraphQLTaggedNode,
  queriesParams?: (props: object) => Variables,
  variables?: Variables,
  getFragmentProps?: (fragmentProps: object) => object,
  loadingView?: React.ReactNode | null,
};
export default function createQueryRenderer(
  FragmentComponent: React.Component,
  Component: React.Component,
  config: Config,
) {
  const {query, queriesParams} = config;

  class QueryRendererWrapper extends React.Component<{}> {
    render() {
      const variables = queriesParams ? queriesParams(this.props) : config.variables;

      return (
        <QueryRenderer
          environment={Environment}
          query={query}
          variables={variables}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.toString()}</Text>;
            }

            if (props) {
              return <View>
              {props.passes.map(item => <Text key={item._id}>{Object.keys(item)}</Text>)}
            </View>
              const fragmentProps = config.getFragmentProps
                ? config.getFragmentProps(props)
                : { query: props };
              return <FragmentComponent {...this.props} {...fragmentProps} />;
            }

            return <Text>Loading...</Text>;
          }}
        />
      );
    }
  }

  return hoistStatics(QueryRendererWrapper, Component);
}
