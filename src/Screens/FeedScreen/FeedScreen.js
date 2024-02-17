import { StyleSheet, View } from 'react-native';
import SearchBox from "../Components/SearchBox"
import MessagesContainer from "./components/MessagesContainer"
import Layout from "../Layout";

const FeedScreen=()=> {
    return (
        <Layout children={
            <View style={styles.container}>

                <View style={styles.SearchContainer}>
                    <SearchBox/>
                </View>

                <View style={styles.MessagesContainer}>
                    <MessagesContainer/>
                </View>

            </View>
        } title={"Feed"}></Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    flex1Container:{
        flex:1
    },
    SearchContainer:{
        flex:1,
        alignItems:"center"
    },
    MessagesContainer:{
        flex:8,
    }

});

export default FeedScreen;