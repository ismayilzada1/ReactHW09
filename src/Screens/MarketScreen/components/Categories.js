import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Categories = ({ title, items }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View style={styles.item} key={index}>
                        <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, // Adjust as needed
        maxHeight: 210,
    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: "500",
        marginHorizontal: 8,
    },
    item: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginHorizontal: 8,
    },
    itemImage: {
        height: 110,
        width: 110,
        borderRadius: 8,
        borderWidth: 0
    },
    itemName: {
        color: "#000",
        fontSize: 14,
        fontWeight: "400",
    },
    itemPrice: {
        color: "#000",
        fontSize: 14,
        fontWeight: "600",
    }
});

export default Categories;
