import React, {useState} from 'react';
import {RefreshControl, ScrollView, Pressable, useWindowDimensions, View, Image, Text} from 'react-native';
import styles from './styles';
import SearchBox from '../../Screens/Components/SearchBox';
import Layout from "../Layout";

const Content = () => {
    const contents = [
        {
            id: 1,
            imageUrl: 'https://drivesalez.site/assets/images/aboutUs/team-member2.jpg',
            header: 'Ahmad Ahmadzada',
            date: '4m ago',
            text: '[Eclipse CO-CEO & Co-Founder] Join Us',
        },
        {
            id: 2,
            imageUrl: 'https://drivesalez.site/assets/images/aboutUs/team-member1.jpeg',
            header: 'Mahammad Ismayilzada',
            date: '9m ago',
            text: '[Eclipse CO-CEO & Co-Founder] Join Us',
        },
        {
            id: 3,
            imageUrl: 'https://media.licdn.com/dms/image/D4E03AQGd5EIHXzm16A/profile-displayphoto-shrink_400_400/0/1707342851731?e=1713398400&v=beta&t=hZHC5A16SjIhx9ED0juSKXw25iVrfgPZevOtNsGfnaA',
            header: 'Elvin Suleymanov',
            date: '4h ago',
            text: 'Still working on chess project',
        },
        {
            id: 4,
            imageUrl: 'https://media.licdn.com/dms/image/D4E03AQHrt93lFtUE0g/profile-displayphoto-shrink_400_400/0/1676991664884?e=1712188800&v=beta&t=J241_SqVVXKJJx6v1JzFLW3kkXokvNtnneD23afoQ3E',
            header: 'Mark Nikolov',
            date: '9h ago',
            text: 'Come to Mark Restaurant',
        },
        {
            id: 5,
            imageUrl: 'https://fsx1.itstep.org/api/v1/files/PUXntlrTJL4l3MN3UFuopnUluWCYEpmw?inline=true&f=webp',
            header: 'Little Elvin Suleymanov',
            date: '4y ago',
            text: 'I just started working on my personal chess project',
        },
    ];

    const [refreshing, setRefreshing] = useState(false);

    const {width, height} = useWindowDimensions();

    const refreshHandler = () => {
        console.log('Page refreshed');
    };

    return (
        <Layout children={
            <View style={styles.body}>
                <View style={styles.SearchContainer}>
                    <SearchBox/>
                </View>

                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={refreshHandler}/>
                    }
                    horizontal={false}>
                    {contents.map((content) => (
                        <View key={content.id}>
                            <View style={styles.container} key={content.id}>
                                <Pressable style={[styles.imgContainer, {width: width, height: height - (height - width)}]}>
                                    <Image source={{uri: content.imageUrl}} style={styles.img}/>
                                </Pressable>
                                <Text style={styles.username}>{`@${content.header}`}</Text>
                                <Text style={styles.textBox}>{content.text}</Text>
                                <Text style={styles.date}>{content.date}</Text>
                                <View style={{
                                    alignSelf: 'flex-end',
                                    flexDirection: 'row',
                                    marginRight: 10,
                                    marginBottom: 10
                                }}>
                                    <View style={styles.threeDots}></View>
                                    <View style={[styles.threeDots, {backgroundColor: 'white'}]}></View>
                                    <View style={[styles.threeDots, {backgroundColor: 'white'}]}></View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        } title={"Content"}></Layout>
    );
};

export default Content;
