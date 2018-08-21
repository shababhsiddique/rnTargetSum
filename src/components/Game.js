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
    selectedIds: [],
  }

  isNumberSelected = (numberIndex) => {
    return  this.state.selectedIds.indexOf(numberIndex) >= 0;
  }

  selectNumber = (numberIndex) => {
    //console.log('you just selected '+numberIndex);
    //console.log(this.state);

    this.setState((prevState) => {
      return {
        selectedIds: [...prevState.selectedIds, numberIndex]
      };
    });
  }

  gameStatus = () => {
    const sumOfSelected = this.state.selectedIds.reduce((total, cursor) => {
      return total + this.randomNumbers[cursor];
    },0);

    //console.log('Total selected is '+sumOfSelected+' target is '+this.targetNum);
    if(sumOfSelected < this.targetNum){
      return 'PLAYING';
    }
    if(sumOfSelected === this.targetNum){
      return 'WON';
    }
    if(sumOfSelected > this.targetNum){
      return 'LOST';
    }
  }

  render(){

    //catch game status before rendering anything
    const gameStatus = this.gameStatus();

    return (
      <View style={styles.container}>
        <Text style={styles.target}>{this.targetNum}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumberEntry,index) =>
            <Randomnumber
              key={index}
              id={index}
              number={randomNumberEntry}
              isDisabled = {this.isNumberSelected(index)}
              _onPressHandler = {this.selectNumber}
            />
          )}
        </View>
        <Text style={styles.result}>{gameStatus}</Text>

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
