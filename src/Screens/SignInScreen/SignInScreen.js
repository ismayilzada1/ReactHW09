import {  Text, TextInput, View,TouchableOpacity } from "react-native";
import styles from './styles';
import React, { useState } from 'react';
import Layout from "../Layout";


const SignInScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <Layout children={
                <View style={styles.container}>

                    {/*<View style={styles.header}>*/}
                    {/*    <Text style={styles.title}>Sign In</Text>*/}
                    {/*</View>*/}

                    <View style={styles.form}>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor="#BDBDBD"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="#BDBDBD"
                            secureTextEntry={true}
                        />

                    </View>


                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpButtonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.forgotPassword} >Forgot your password?</Text>
                    </View>


                </View>
            } title={"Sign In"}></Layout>
    );
};

export default SignInScreen;
