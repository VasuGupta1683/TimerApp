import React,{ useEffect, useState } from 'react'
import { View,Text,StyleSheet, TouchableOpacity, Image } from 'react-native'

const Screen1 = ({navigation}) => {
    const[hour,setHour]=useState('00')
    const[minute,setMinute]=useState('00')
    const[second,setSecond]=useState('00')
    // const[ampm,setAmpm]=useState('AM')


    useEffect(() =>{
        getHour()
        getMinute()
        getSecond()
        // getAmpm()
    },[])

    const getHour =() => {
        const date=new Date();
        const hour=date.getHours();
        hour > 9 ? setHour(hour) :setHour('0' + hour)
    }

    const getMinute =() => {
        const date=new Date();
        const minute=date.getMinutes();
        minute > 9 ? setMinute(minute) :setMinute('0' + minute)
    }

    const getSecond =() => {
        const date=new Date();
        const second=date.getSeconds();
        second > 9 ? setSecond(second) :setSecond('0' + second)
    }

    // const getAmpm =() => {
    //     const date=new Date();
    //     const ampm=date.getHours() >=12 ? 'PM' : 'AM';
    //     setAmpm(ampm)
    // }

    setInterval(() => {
        getHour()
        getMinute()
        getSecond()
        // getAmpm()
    }, 1000);
const Showpage = (page) => {
    navigation.navigate(page)
}

    return (
    <View style={styles.container}>
        <Text style={styles.hour}>{hour}</Text>
        <Text style={styles.minute}>{minute}</Text>
        <Text style={styles.seconds}>{second}</Text>
        {/* <Text style={styles.ampm}>{ampm}</Text> */}

        <View style={styles.bottomnav}>
            <TouchableOpacity style={styles.bottomnaviconoutactive}
            onPress={() =>Showpage('s1')}>
                {/* <Text style={styles.bottomnavtext}>+</Text> */}
                <Image source={require('../assets/Clock icon.jpg')} style={styles.bottomnavicon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomnaviconout}
            onPress={() =>Showpage('s2')}>
                {/* <Text style={styles.bottomnavtext}>-</Text> */}
                <Image source={require('../assets/Timer Icon.jpg')} style={styles.bottomnavicon}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    hour:{
        color:'white',
        fontSize:250,
        fontWeight:'bold',
        lineHeight:300,
        height:280,
    },
    minute:{
        color:'grey',
        fontSize:250,
        fontWeight:'bold',
        lineHeight:300,
        height:280,
    },
    seconds:{
        color:'white',
        fontSize:220,
        fontWeight:'bold',
        lineHeight:250,
        height:280,
    },
    ampm:{
        color:'white',
        fontSize:180,
        fontWeight:'bold',
        lineHeight:200,
        height:250,
    },
    bottomnav:{
        flexDirection:'row',
       // backgroundColor:'white',
        width:'100%',
        position:'absolute',
        bottom:0,
        alignItems:'center',
        justifyContent:'center',

    },
    bottomnavicon:{
        width:50,
        height:50,
    },
    bottomnaviconoutactive:{
        width:100,
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:10,
        alignItems:'center', 
    },
    bottomnaviconout:{
        width:100,
        height:50,
        backgroundColor:'grey',
        justifyContent:'center',
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:10,
        alignItems:'center',
        
    }
});


export default Screen1
