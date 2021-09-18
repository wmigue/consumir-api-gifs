//app lazy loading, carga segun requerimiento de scroll.

import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useEffect, useState, Fragment, Component } from "react"
import { render } from 'react-dom';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, SafeAreaView } from 'react-native'

import Traer from './getDatos';
import Traer2 from './getDatos2';
import Traer3 from './getDatos3';



export default function App() {
  return (
    <View>
     <Traer3/>
    </View>
 
   
  )
}









const styles = StyleSheet.create({
  container: {
marginBottom:40,
marginTop:20
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
})