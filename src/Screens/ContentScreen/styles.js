import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    flex1Container:{
        flex:1
    },
    bottomImgContainer:{
        marginTop: 10,
        width: '95%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: '#e8e8e8'
    },
    bottomImg: {
        width: '100%',
        height: '100%',
    },
    container: {
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        marginTop: 5,
        opacity: 0.9
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '95%',
        height: '95%',
        borderRadius: 10
    },
    textBox: {
        flex: 1,
        fontSize: 17,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    date: {
        alignSelf: 'flex-end',
        color: 'grey',
        marginRight: 10,
        marginBottom: 5
    },
    threeDots: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#5DB075',
        marginLeft: 10,

    },
    SearchContainer:{
        flex:1,
        alignItems:"center",
        marginBottom:60,
    }
})

export default styles;