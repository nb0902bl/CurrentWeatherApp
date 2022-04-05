import { View, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View >
       <ActivityIndicator size="large" color="blue" />
    </View>
  )
}
;

export default Loading