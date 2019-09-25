import React, {useState} from 'react';
import styled from 'styled-components';
import Colors from '../components/colors';
import Base from '../components/Base/Base';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import LoginMutation from './mutations/Login';

const Text = styled.Text`
  margin-top: 8;
  font-size: 18;
  font-weight: 400;
  color: ${Colors.dark};
`;

const Title = styled(Text)`
  font-size: 30;
  text-align: center;
`;

const Subtitle = styled(Text)`
  text-align: center;
  margin-bottom: 24;
`;

const Login = ({navigation}) => {
  const [login, setLogin] = useState('larissa@lala.com');
  const [password, setPassword] = useState('123');
  return (
    <Base>
      <Title>Keep My Pass</Title>
      <Subtitle>Your personal key agenda</Subtitle>
      <Text>Login</Text>
      <TextInput
        placeholder="Login"
        value={login}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={text => setLogin(text)}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Login"
        onPress={() => {
          LoginMutation.login({
            input: { email: login, password },
            onCompleted: () => navigation.navigate('Home'),
            onError: () => alert('Sorry... Something went wrong...'),
          })
        }} />
      <Button
        color="secondary"
        title="Create an account"
        onPress={() => navigation.navigate('SignUp')}
      />
    </Base>
  );
};

export default Login;
