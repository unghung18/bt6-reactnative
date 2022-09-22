import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={{ padding: 10, backgroundColor: '#00b6ed', marginBottom: 20 }} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
}