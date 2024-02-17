import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SearchBox from "../Components/SearchBox"
import Categories from "./components/Categories"
import Layout from "../Layout";
export default function App() {

    const HotDealsItems = [
        {
            "name": "Iphone 14 Pro",
            "price": 729.99,
            "imageUrl": "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-14-pro/iphone-14-pro-deep-purple.jpg"
        },
        {
            "name": "4K Smart TV",
            "price": 899.99,
            "imageUrl": "https://umico.az/_ipx/_/https://strgimgr.umico.az/sized/840/551069-6afbee0af75dd142b287bdc5b43207a7.jpg"
        },
        {
            "name": "MacBook Air 13",
            "price": 979.95,
            "imageUrl": "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201111082120490380/201210170016351443.png@jpeg"
        },
        {
            "name": "Iphone 14 Pro",
            "price": 729.99,
            "imageUrl": "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-14-pro/iphone-14-pro-deep-purple.jpg"
        },
        {
            "name": "4K Smart TV",
            "price": 899.99,
            "imageUrl": "https://umico.az/_ipx/_/https://strgimgr.umico.az/sized/840/551069-6afbee0af75dd142b287bdc5b43207a7.jpg"
        },
        {
            "name": "MacBook Air 13",
            "price": 979.95,
            "imageUrl": "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201111082120490380/201210170016351443.png@jpeg"
        },
        {
            "name": "Iphone 14 Pro",
            "price": 729.99,
            "imageUrl": "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-14-pro/iphone-14-pro-deep-purple.jpg"
        },
        {
            "name": "4K Smart TV",
            "price": 899.99,
            "imageUrl": "https://umico.az/_ipx/_/https://strgimgr.umico.az/sized/840/551069-6afbee0af75dd142b287bdc5b43207a7.jpg"
        },
        {
            "name": "MacBook Air 13",
            "price": 979.95,
            "imageUrl": "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201111082120490380/201210170016351443.png@jpeg"
        },
        {
            "name": "Iphone 14 Pro",
            "price": 729.99,
            "imageUrl": "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-14-pro/iphone-14-pro-deep-purple.jpg"
        },
        {
            "name": "4K Smart TV",
            "price": 899.99,
            "imageUrl": "https://umico.az/_ipx/_/https://strgimgr.umico.az/sized/840/551069-6afbee0af75dd142b287bdc5b43207a7.jpg"
        },
        {
            "name": "MacBook Air 13",
            "price": 979.95,
            "imageUrl": "https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/201111082120490380/201210170016351443.png@jpeg"
        },
    ];

    const Trendings = [
        {
            "name": "Basmati rice 5kg",
            "price": 29.99,
            "imageUrl": "https://shop.natcofoods.com/cdn/shop/products/R1130_NATCO_BASMATI_5kg_BAG.jpg?v=1588953753"
        },

        {
            "name": "Chevrolet Aveo",
            "price": 5899.99,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chevrolet_Aveo_LT_1.2_%28T300%29_%E2%80%93_Frontansicht%2C_6._Oktober_2011%2C_Mettmann.jpg/1280px-Chevrolet_Aveo_LT_1.2_%28T300%29_%E2%80%93_Frontansicht%2C_6._Oktober_2011%2C_Mettmann.jpg"
        },

        {
            "name": "Xbox 360",
            "price": 479.95,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/220px-Microsoft-Xbox-360-E-wController.jpg"
        },
        {
            "name": "Basmati rice 5kg",
            "price": 29.99,
            "imageUrl": "https://shop.natcofoods.com/cdn/shop/products/R1130_NATCO_BASMATI_5kg_BAG.jpg?v=1588953753"
        },

        {
            "name": "Chevrolet Aveo",
            "price": 5899.99,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chevrolet_Aveo_LT_1.2_%28T300%29_%E2%80%93_Frontansicht%2C_6._Oktober_2011%2C_Mettmann.jpg/1280px-Chevrolet_Aveo_LT_1.2_%28T300%29_%E2%80%93_Frontansicht%2C_6._Oktober_2011%2C_Mettmann.jpg"
        },

        {
            "name": "Xbox 360",
            "price": 479.95,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/220px-Microsoft-Xbox-360-E-wController.jpg"
        },
        {
            "name": "Basmati rice 5kg",
            "price": 29.99,
            "imageUrl": "https://shop.natcofoods.com/cdn/shop/products/R1130_NATCO_BASMATI_5kg_BAG.jpg?v=1588953753"
        },

        {
            "name": "Chevrolet Aveo",
            "price": 5899.99,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chevrolet_Aveo_LT_1.2_%28T300%29_%E2%80%93_Frontansicht%2C_6._Oktober_2011%2C_Mettmann.jpg/1280px-Chevrolet_Aveo_LT_1.2_%28T300%29_%E2%80%93_Frontansicht%2C_6._Oktober_2011%2C_Mettmann.jpg"
        },

        {
            "name": "Xbox 360",
            "price": 479.95,
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/220px-Microsoft-Xbox-360-E-wController.jpg"
        },
    ];


    return (
        <Layout title={"Market"} children={
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <SearchBox />
                    </View>
                    <View style={styles.categoriesContainer}>
                        <Categories title="Hot Deals" items={HotDealsItems} />
                    </View>
                    <View style={styles.categoriesContainer}>
                        <Categories title="Trendings" items={Trendings} />
                    </View>
                    <View style={styles.categoriesContainer}>
                        <Categories title="Hot Deals" items={HotDealsItems} />
                    </View>
                    <View style={styles.categoriesContainer}>
                        <Categories title="Trendings" items={Trendings} />
                    </View>

                </View>
            </ScrollView>
        }></Layout>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginTop:15
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    headerContainer:{
        flex: 1
    },
    searchContainer: {
        flex: 1,
        alignItems:"center",
        marginTop:15
    },
    categoriesContainer: {
        flex: 4,
        marginBottom:15
    },
});
