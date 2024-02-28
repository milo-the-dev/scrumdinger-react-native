import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
    return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <Text>Hello World!</Text>
        </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})

export default App;
