import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import fetch from 'node-fetch';

interface product{
  id:number;
  name:string;
  description:string;
  price:number;
  image:string;
}

const product:product[]=require('@/app/(tabs)/product.json')

const HomeScreen = () =>{
  const navigation = useNavigation();
  return <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>KENDO SHOP</Text>
      <TouchableOpacity>
        <Text style={styles.searchButtonText}>🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.loginButtonText}>ログイン</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.main}>
      <TouchableOpacity onPress={()=> navigation.navigate('index')}>
        <View style={styles.backbuttoncontainer}>
          <Text style={styles.backbutton}>＜Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('GoodsDetail')}>
        <View style={styles.box}>
          <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimg} />
          <View style={styles.infotext}>
            <Text style={styles.goodsSub}>{product.name}</Text>
            <Text style={styles.goodsinfo}>詳細~~~~~~~~~~</Text>
            <Text style={styles.goodsPrice}>価格5000円</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.box}>
          <Image source={require('@/assets/images/ShinaiLogo.png')} style={styles.goodsimg} />
          <View style={styles.infotext}>
            <Text style={styles.goodsSub}>商品名</Text>
            <Text style={styles.goodsinfo}>詳細~~~~~~~~~~</Text>
            <Text style={styles.goodsPrice}>価格5000円</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
    
  </View>;
  
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 30,
    marginLeft:5,
    marginRight:5,
  },
  main:{
    padding:20,
  },
  header:{
    flexDirection: 'row', // 横並びにするために追加
    justifyContent: 'space-between', // 左右に配置
    alignItems: 'center',
    padding: 30,
  },
  headerText:{
    fontSize:24,
    fontWeight:"bold",
    color:"white"
  },
  searchButtonText:{
    fontSize:24,
    marginLeft:30,
  },
  textContainer:{
    borderRadius: 50,
    backgroundColor:"#CC66FF",
  },
  loginButtonText:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    padding: 5,
  },
  backbuttoncontainer:{
    borderRadius: 50,
    backgroundColor:"#666666",
  },
  backbutton:{
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    padding: 5,
  },
  box:{
    borderRadius: 50,
    backgroundColor:"#666666",
    marginTop:20,
    flexDirection: 'row', 
    justifyContent:'space-around'
  },
  infotext:{
    padding:5,
  },
  goodsimg:{
    width:100,
    height:100,
  },
  goodsSub:{
    fontSize:24,
    fontWeight:"100",
    color:"white",
  },
  goodsinfo:{
    fontSize:20,
    fontWeight:"100",
    color:"white",
  },
  goodsPrice:{
    fontSize:20,
    fontWeight:"100",
    color:"white",
  }

  
  
  
});

export default HomeScreen;
