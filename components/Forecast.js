import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text1}>{this.props.main}</Text>
                <Text style={styles.text1}>{this.props.description}</Text>
                <Text style={styles.text1}>{this.props.temp}</Text>
                <Text style={styles.text1}>°C</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
    text1: { textAlign: 'center', fontSize: 20, color: 'white',  },
});