import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component {
  // onHandleToCalendar = () => {
  //   this.props.navigate.navigation('CalendarWeeks')
  // }

  render() {
    return (
      <View style={styles.parent}>
        <View>
          <Text style={styles.greting}>Hello!</Text>
          <Text style={styles.greting}>
            Click the button for look Your Event!
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <Button containerStyle={{textAlign: 'center'}} title="To Calendar" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greting: {
    textAlign: 'center',
  },
});
