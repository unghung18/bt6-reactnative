import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ display: 'block' }}>
      <Image
        style={{
          width: '100vw',
          height: 200,
          resizeMode: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('./assets/facebook.jpg')}
      />
      <View style={{ padding: 20, textAlign: 'center', fontWeight: 600 }}>
        <input style={{ ...styles.TextInput, borderBottom: 'none' }} type='text' placeholder='Số điện thoại hoặc email' />
        <input style={{ ...styles.TextInput, marginBottom: 40 }} type='password' placeholder='Mật khẩu' />
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#00b6ed', borderRadius: 30, marginBottom: 20 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Đăng nhập</Text>
        </TouchableOpacity>
        <a href='/register' style={{ textDecoration: 'none', color: '#0569dd', marginBottom: 20 }}>Quên mât khẩu</a>
        <a href='/register' style={{ textDecoration: 'none', color: '#0569dd' }}>Quay lại</a>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: "#fff",
    padding: 10,
    paddingLeft: 60,
    border: '2px solid #cdcdcf',
    fontWeight: 600,
    display: 'block'
  }
}
);
