import React from 'react';
import {View,  Text, StyleSheet} from 'react-native';


class Game extends React.Component{

  targetNum = Math.floor(Math.random()*40 )+10;
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.targetNum}</Text>
      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4379a6',
  },
  target: {
    fontSize: 50,
    backgroundColor: '#a6dcee',
    marginHorizontal: 30,
    marginTop: 30,
    textAlign: 'center',
    color: 'black'
  }
});

export default Game;
