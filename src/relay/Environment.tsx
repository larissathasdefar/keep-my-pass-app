import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('KeepMyPassToken');
    return token
  } catch (error) {
    console.log(error);
  }
};

const fetchQuery = async (request, variables) => {
  const body = JSON.stringify({
    query: request.text,
    variables,
  });

  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: await getToken(),
  };

  const response = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers,
    body,
  });

  return await response.json();
};

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
