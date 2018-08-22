import React from 'react';
import Game from './Game';

class App extends React.Component{

  state = {
    gameId : 1,
  }

  resetGame = () => {
    this.setState( (prevState)=>{
      return {gameId: prevState.gameId +1 };
    } );
  }

  render(){

    return (
      <Game
        key={this.state.gameId}
        _gameResetHandler={this.resetGame}
        numberChoicesCount={6}
        initialSeconds = {10}
      />
    );

  }

}


export default App;
