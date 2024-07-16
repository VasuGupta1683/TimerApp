import React,{ useEffect, useState } from 'react'
import { View,Text,StyleSheet, TouchableOpacity, Image } from 'react-native'

const Screen2 = ({navigation}) => {

    const Showpage = (page) => {
        navigation.navigate(page)
    }

    const [hour,setHour]=useState(0)
    const [minute,setMinute]=useState(0)
    const [second,setSecond]=useState(0)
    const[interv,setInterv]=useState()

    const[timeron,settimeron]=useState(0)
    const[stopped,setstopped]=useState(0)

    let currsecond=second
    let currminute=minute
    let currhour=hour

    const updatetimer=() =>{
        if(currsecond==59){
            currsecond=0
            currminute++
        }
        if(currminute==59){
            currminute=0
            currsecond=0
            currhour++
    }
    currsecond++

    setSecond(currsecond)
    setMinute(currminute)
    setHour(currhour)
}

    const starttimer = () =>{
        updatetimer()
        setstopped(0)
        // console.log('Start timer');
        setInterv(setInterval(updatetimer,1000))
        settimeron(1)
    }
    const stoptimer = () =>{
        // console.log('Stop timer');
        setstopped(1)
        clearInterval(interv)
    }
    const resettimer = () =>{
        settimeron(0)
        setHour(0)
        setMinute(0)
        setSecond(0)
        clearInterval(interv)
    }
        return (
    <View style={styles.container}>
        <Text style={styles.number}>{hour > 10 ? hour : '0' + hour}
            <Text style={styles.small}>
                HR
            </Text>
        </Text>
        <Text style={styles.number}>{minute > 10 ? minute :'0' + minute}
            <Text style={styles.small}>
                MIN
            </Text>
        </Text>
        <Text style={styles.number}>{second > 10 ? second :'0' + second}
            <Text style={styles.small}>
                SEC
            </Text>
        </Text>

            {timeron ==0 ?
            <View style={styles.startstop}>
            <TouchableOpacity style={styles.start} onPress={starttimer}>
                    <Text style={styles.start}>Start</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.stop} onPress={stoptimer}>
                    <Text style={styles.stop}>Stop</Text>
            </TouchableOpacity> */}
        </View>
        :
        <View style={styles.startstop}>
                <TouchableOpacity style={styles.reset} onPress={resettimer}>
                    <Text style={styles.reset}>Reset</Text>
                </TouchableOpacity>

                {stopped ==0 ?
                <TouchableOpacity style={styles.stop} onPress={stoptimer}>
                <Text style={styles.stop}>Stop</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.stop} onPress={starttimer}>
                        <Text style={styles.stop}>Continue</Text>
                </TouchableOpacity>}
            </View>}

        <View style={styles.bottomnav}>
            <TouchableOpacity style={styles.bottomnaviconout}
            onPress={() => Showpage('s1')}>
                <Image source={require('../assets/Clock icon.jpg')} style={styles.bottomnavicon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomnaviconoutactive}
            onPress={() => Showpage('s2')}>
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
    
    number:{
        color:'white',
        fontSize:180,
        fontWeight:'bold',
        lineHeight:180,
        height:180,
    },
    small:{
        color:'grey',
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
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
    },
    startstop:{
        flexDirection:'row',
        marginVertical:20,
        marginBottom:20,
    },
    start:{
        color:'black',
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20,
        marginRight:1,
    },
    stop:{
        color:'black',
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20,
        marginLeft:1,
    },
    reset:{
        color:'black',
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20,
        marginRight:1,
    }
});


export default Screen2
