import React, {useState} from 'react';
import styled from 'styled-components';
import SignUpImage from '../assets/signup.png';
import Colors from '../components/colors';
import Base from '../components/Base/Base';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';

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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Base>
      <Title>Create Your Account</Title>
      <Image source={SignUpImage} />
      <Text>Login</Text>
      <TextInput
        placeholder="Login"
        value={login}
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
      <Button title="Sign up" onPress={() => navigation.navigate('Home')} />
    </Base>
  );
};

export default SignUp;
