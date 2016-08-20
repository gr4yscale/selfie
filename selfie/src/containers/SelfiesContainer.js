import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ListView,
  Dimensions,
  LinkingIOS,
  Alert,
  Platform,
  IntentAndroid,
  Text
} from 'react-native'


import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Actions} from '../../node_modules/react-native-router-flux'
import * as appActions from '../redux/actions/appActions'

let deviceHeight = Dimensions.get('window').height;

class SelfiesContainer extends Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4,', 'row 5']),
    }
  }

  render() {

    let dataSource = this.props.users ? this.state.dataSource.cloneWithRows(this.props.users) : this.state.dataSource.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4,', 'row 5'])
    return (
      <View style={styles.container}>
        <ListView
            dataSource = {dataSource}
            renderRow = {(data, sectionId, rowID) => {
              return (
                <Text>Some data here</Text>
              )
            }}
            initialListSize={20}
            pageSize={4}
            style = {styles.listView}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#44FF77',
    height:deviceHeight - 62,
  },
  content: {
    flex:1,
  },
  listView: {
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
  },
})

export default connect(
  (state) => {
    return {
      users: state.users,
    }
  },
  (dispatch) => {
    return {
      ...bindActionCreators(appActions, dispatch),
      dispatch,
    }
  }
)(SelfiesContainer)
