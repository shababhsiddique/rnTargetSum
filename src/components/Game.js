import React from 'react';
import PropTypes from 'prop-types';
import {View,  Text, StyleSheet} from 'react-native';


class Game extends React.Component{

  static propTypes = {
    numberChoicesCount : PropTypes.number.isRequired,
    //this.props.numberChoicesCount = {6}
  };

  // TODO: Shuffle random numbers
  randomNumbers = Array
  .from({length: this.props.numberChoicesCount})
  .map(() => Math.floor(Math.random()*10 )+1);

  targetNum = this.randomNumbers
  .slice(0,this.props.numberChoicesCount-2)
  .reduce((a, b) => a + b, 0);


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.targetNum}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map(
            (randomNumberEntry,index) => <Text style={styles.randomnumber} key={index}>{randomNumberEntry}</Text>
          )}
        </View>
      </View>
    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4379a6',
  },
  randomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    //borderWidth: 1,
    //borderStyle: 'solid',
    //borderColor: 'white',
    marginTop: 30,
    marginHorizontal: 15,
  },
  randomnumber: {
    fontSize: 50,
    width: 100,
    backgroundColor: '#a6dcee',
    marginBottom: 30,
    marginHorizontal: 15,
    flexGrow: 1,
    textAlign: 'center',
  },
  target: {
    fontSize: 70,
    backgroundColor: '#a6dcee',
    marginHorizontal: 30,
    marginTop: 30,
    textAlign: 'center',
    color: 'black'
  }
});

export default Game;
