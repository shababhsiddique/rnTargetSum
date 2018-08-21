import React from 'react';
import PropTypes from 'prop-types';
import {View,  Text, StyleSheet} from 'react-native';
import Randomnumber from './Randomnumber';

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

  state = {
    selectedNumbers: [0,4],
  }

  isNumberSelected = (numberIndex) => {
    var selectStatus = this.state.selectedNumbers.indexOf(numberIndex);
    return (selectStatus >= 0);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.targetNum}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumberEntry,index) =>
            <Randomnumber key={index}
              number={randomNumberEntry}
              isSelected = {this.isNumberSelected(index)}
            />
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
    marginTop: 30,
    marginHorizontal: 15,
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
