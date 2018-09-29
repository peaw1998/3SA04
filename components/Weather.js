import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>
                    <View style={styles.flexDir}>
                        <Text style={styles.text1}>Zip code is {this.props.zipCode}.</Text>
                        <Forecast {...this.state.forecast} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    flexDir: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 360,
        backgroundColor: 'black',
        opacity: 0.5,
    },
    text1: { textAlign: 'center', fontSize: 20, color: 'white', opacity: 0.5, },
});