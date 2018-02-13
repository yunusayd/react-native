import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, image, url } = album;
    const {
        thumnailContainerStyle, 
        thumbnailStyle,
        imageStyle,
        headerContentStyle,
        headerTextStyle 
    } = styles;
    console.log(image);
    return (
        <Card>
            <CardSection>
                <View style={thumnailContainerStyle}>
                    <Image
                        style={thumbnailStyle} 
                        source={{ uri: image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStyle} 
                    source={{ uri: image }} 
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
    };

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }   

};

export default AlbumDetail;
