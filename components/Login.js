import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: "#dddddd",
            fontWeight: 500
        }}>
            <View style={{ textAlign: 'center' }}>
                <View style={styles.InputView}>
                    <input style={styles.TextInput} type='text' placeholder='Email' />
                </View>
                <View style={styles.InputView}>
                    <input style={styles.TextInput} type='password' placeholder='Password' />
                </View>
                <TouchableOpacity style={{ padding: 10, backgroundColor: '#00b6ed', borderRadius: 30, marginBottom: 20 }}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
                <a href='/register' style={{ textDecoration: 'none', color: '#000', marginBottom: 40 }}>Forgot your password?</a>
                <a onClick={() => navigation.navigate('Register')} style={{ textDecoration: 'none', color: '#000' }}>Register</a>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    InputView: {
        display: 'flex',
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 30,
        height: '100%',
        padding: 10,
        paddingLeft: 60,
        border: 'none',
        fontWeight: 600,
    }
}
);