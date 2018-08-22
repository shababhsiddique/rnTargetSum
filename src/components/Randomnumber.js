import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';


class Randomnumber extends React.Component{

  static propTypes = {
    id: PropTypes.number.isRequired,
    number : PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    _onPressHandler: PropTypes.func.isRequired,
    //this.props.number
  };

  handlePress = () => {
    if(this.props.isDisabled){
      return ;
    }
    this.props._onPressHandler(this.props.id);
  };

  render(){
    return (
      <TouchableOpacity style={styles.randomnumberbtn} onPress={this.handlePress}>
        <Text style={[styles.randomnumber, this.props.isDisabled ? styles.disabled : styles.enabled]} >{this.props.number}</Text>
      </TouchableOpacity>
    );
  }

}


const styles = StyleSheet.create({
  randomnumberbtn: {
    width: 100,
    backgroundColor: '#F4DECB',
    marginBottom: 30,
    marginHorizontal: 15,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  randomnumber: {
    fontSize: 40,
    paddingVertical: 10,
    flexGrow: 1,
    textAlign: 'center'
  },
  disabled: {
    opacity: 0.4,
  },
  enabled: {
    opacity: 1,
  }

});

export default Randomnumber;
