import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { CartContext } from './CartContext';

const data = [
    {
        id: '1',
        image: require('../assets/Images/Content/dress1.png'),
        heading: 'Office Wear',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '2',
        image: require('../assets/Images/Content/dress2.png'),
        heading: 'Black',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '3',
        image: require('../assets/Images/Content/dress3.png'),
        heading: 'Church Wear',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '4',
        image: require('../assets/Images/Content/dress4.png'),
        heading: 'Lamerei',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '5',
        image: require('../assets/Images/Content/dress5.png'),
        heading: '21WN',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '6',
        image: require('../assets/Images/Content/dress6.png'),
        heading: 'Lopo',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '7',
        image: require('../assets/Images/Content/dress7.png'),
        heading: '21WN',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
    {
        id: '8',
        image: require('../assets/Images/Content/dress1.png'),
        heading: 'Office Wear',
        subHeading: 'reversible angora cardigan',
        price: '$120',
    },
];


const CardItem = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <TouchableOpacity
                    style={styles.overlayContainer}
                    onPress={() => addToCart(item)}
                >
                    <Image
                        source={require('../assets/Images/addCircle.png')}
                        style={styles.overlayImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>{item.heading}</Text>
                <Text style={styles.subHeading}>{item.subHeading}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );
};

const CardList = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardItem item={item} />}
            contentContainerStyle={styles.listContainer}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 250,
    },
    imageContainer: {
        position: 'relative',
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    overlayImage: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 40,
        height: 40,
    },
    textContainer: {
        padding: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#ed9c3d',
    },
});

export default CardList;
