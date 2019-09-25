import React, {useState} from 'react';
import styled from 'styled-components';
import SignUpImage from '../assets/signup.png';
import Colors from '../components/colors';
import Base from '../components/Base/Base';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import SignUpMutation from './mutations/SignUp';

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

const Image = styled.Image`
  width: 56;
  height: 56;
  margin: 10px auto;
`;

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Base>
      <Title>Create Your Account</Title>
      <Image source={SignUpImage} />
      <Text>Name</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
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
        title="Sign up"
        onPress={() => {
          SignUpMutation.signUp({
            input: { name, email: login, password },
            onCompleted: () => navigation.navigate('Home'),
            onError: () => alert('Sorry... Something went wrong...'),
          })
        }} />
    </Base>
  );
};

export default SignUp;
