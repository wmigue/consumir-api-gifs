//app lazy loading, carga segun requerimiento de scroll.


import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useEffect, useState, useRef, Fragment, Component } from "react"
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, SafeAreaView, SectionList, Button, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import config from './config';

export default function getDatos2() {

    const getData = async () => {
        setStartPos(Math.ceil(Math.random() * 50))
        setPagina(pagina + 1)
        setLoading(true)
        // const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' + pagina
        const url = "http://api.giphy.com/v1/gifs/trending?api_key="+config.GIPHY_API_KEY+"&limit=5&offset=" + startPos
        fetch(url)
            .then(r => r.json())
            .then(r => {
                setLoading(false)
                setData(data.concat(r.data))
                console.log(r.data)
                console.log(r)
                console.log(startPos)
            })
    }


    const [data, setData] = useState([])
    const [pagina, setPagina] = useState(1)
    const [loading, setLoading] = useState(false)
    const [startPos, setStartPos] = useState(1)


    useEffect(() => { //cuando carga la pagina solamente.
        getData()
    }, [])

    return (
        <View style={styles.container}>
            {
                data ?
                    data.map((l, i) => (  // L referencia al elemento dentro del array, I es el indice de ese elemento.
                        <ListItem key={i} bottomDivider={true} >
                            <Image style={styles.logo} source={{ uri: l.images.original.url }} />
                            <ListItem.Content>
                                <ListItem.Title>{l.title}</ListItem.Title>
                                <ListItem.Subtitle>{l.slug}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>))
                    : null

            }

            {

                loading ? <ActivityIndicator size="large" color="black" /> : null
            }


            <TouchableOpacity
                style={styles.boton}
                onPress={getData}
            >
                <Text style={styles.boton}>CARGAR MAS</Text>
            </TouchableOpacity>






        </View>
    )







}






const styles = StyleSheet.create({
    container: {

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    texto: {
        fontSize: 22,
        alignContent: 'center',
        alignSelf: 'center'
    },
    visor: {
        width: 150,
        marginBottom: 30,
        marginTop: 30,
        alignSelf: 'center',
        alignContent: "center",
    },
    boton: {
        textAlign: 'center',
        color: "green",
        fontSize: 20,
        backgroundColor: "coral",
        color: "white",


    },
    logo: {
        width: "100%",
        height: "100%",
    }
})