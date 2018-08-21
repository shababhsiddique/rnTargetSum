import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';


class Randomnumber extends React.Component{

  static propTypes = {
    number : PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    //this.props.number
  };

  handlePress = () => {
    //console.log(this.props.number);
  };

  render(){
    return (
      <TouchableOpacity style={[styles.randomnumberbtn, this.props.isSelected && styles.selectedNumber]} onPress={this.handlePress}>
        <Text style={styles.randomnumber} >{this.props.number}</Text>
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
  selectedNumber: {
    opacity: 0.4,
  }

});

export default Randomnumber;
