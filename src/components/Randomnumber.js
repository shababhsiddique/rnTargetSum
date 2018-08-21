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
    this.props._onPressHandler(this.props.id);
    //console.log(this.props.number);
  };

  render(){
    console.log('this btn should be disabled '+this.props.isDisabled);
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
    backgroundColor: '#a6dcee',
    marginBottom: 30,
    marginHorizontal: 15,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
