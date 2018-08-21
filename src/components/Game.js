import React from 'react';
import PropTypes from 'prop-types';
import {View,  Text, StyleSheet} from 'react-native';

import shuffle from 'lodash.shuffle';

import Randomnumber from './Randomnumber';


class Game extends React.Component{

  //Props Declaraton
  static propTypes = {
    numberChoicesCount : PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
  };


  randomNumbers = Array
  .from({length: this.props.numberChoicesCount})
  .map(() => Math.floor(Math.random()*10 )+1);

  shuffledRandomNumbers = shuffle(this.randomNumbers);

  //The target number player has to add up to
  targetNum = this.randomNumbers
  .slice(0,this.props.numberChoicesCount-2)
  .reduce((a, b) => a + b, 0);


  state = {

    //selected state of all options
    selectedIds: [],

    //time left to play
    remainingSeconds: this.props.initialSeconds,
  }

  gameStatus = 'PLAYING';

  //when component muunted start timer
  componentDidMount(){

    //start timer with id
    this.intervalId = setInterval(()=> {
      this.setState((prevState)=>{
        return {
          remainingSeconds: prevState.remainingSeconds -1
        };
      },()=>{

        //times up
        if(this.state.remainingSeconds === 0){
          clearInterval(this.intervalId);
        }
      });
    },1000);

  }

  componentWillUnmount(){

    //clear timer on unmount
    clearInterval(this.intervalId);
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {

    //if there is a reason to re calculate game status
    if((nextState.selectedIds !== this.state.selectedIds)
    || nextState.remainingSeconds ===0 ){
      //update game status
      this.gameStatus = this.calcGameStatus(nextState);

      if(this.gameStatus !== 'PLAYING'){
        clearInterval(this.intervalId);
      }
    }
  }


  //check if a number is selected
  isNumberSelected = (numberIndex) => {
    return  this.state.selectedIds.indexOf(numberIndex) >= 0;
  }

  //select a number
  selectNumber = (numberIndex) => {

    //update the state of the number
    this.setState((prevState) => {
      return {
        //add this id to selected ids
        selectedIds: [...prevState.selectedIds, numberIndex]
      };
    });
  }

  //determine game status
  calcGameStatus = (nextState) => {

    const sumOfSelected = nextState.selectedIds.reduce((total, cursor) => {
      return total + this.shuffledRandomNumbers[cursor];
    },0);

    if(nextState.remainingSeconds === 0){
      return 'LOST';
    }
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
    const gameStatus = this.gameStatus;

    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.targetNum}</Text>
        <View style={styles.randomContainer}>
          {this.shuffledRandomNumbers.map((randomNumberEntry,index) =>
            <Randomnumber
              key={index}
              id={index}
              number={randomNumberEntry}
              isDisabled = {this.isNumberSelected(index) || gameStatus !== 'PLAYING' }
              _onPressHandler = {this.selectNumber}
            />
          )}
        </View>
        <Text>{this.state.remainingSeconds}</Text>

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
    marginHorizontal: 30,
    marginTop: 30,
    textAlign: 'center',
    color: 'black'
  },
  STATUS_PLAYING: {
    backgroundColor: '#a6dcee',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  }
});

export default Game;
