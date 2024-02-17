import React from 'react';
import {StyleSheet, Text, View, ScrollView, Pressable,Alert, Linking, Platform, Dimensions} from 'react-native';
import {modelName, brand, designName, osVersion} from 'expo-device';

const AboutDeviceScreen = () => {

    const {OS, Version} = Platform;
    const {width, height} = Dimensions.get('window');

    const AboutDevice =()=>{
        Alert.alert(
            "Device Info", `Brand: ${brand}
            Device: ${modelName}
            Operation System: ${OS}
            Operation System version: ${osVersion}
            Version: ${Version}                 
            Width: ${width}
            Height: ${height} ${'\n'}`,
            [{text: 'Close'}]);
    }

    const CallUs=()=>{
        Linking.openURL(`tel:+994515555555`).then(r => console.log(r));
    }


    return (
            <View style={styles.container}>


                <Pressable style={styles.CustomButton} onPress={AboutDevice}>
                    <Text style={styles.ButtonText}>About Device</Text>
                </Pressable>

                <Pressable style={styles.CustomButton} onPress={CallUs}>
                    <Text style={styles.ButtonText}>Call Us</Text>
                </Pressable>

            </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "space-around",
        alignItems:"center",
    },
    CustomButton:{
        padding:20,
        borderRadius:15,
        backgroundColor:"blue",
    },
    ButtonText:{
        color:"white",
        fontSize:23,
        fontWeight:600
    }
});

export default AboutDeviceScreen;