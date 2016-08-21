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
  Text,
  Image
} from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Actions} from '../../node_modules/react-native-router-flux'
import * as appActions from '../redux/actions/appActions'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const selfiesMock = [
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/c2d29bf0-67b6-11e6-a25f-cb2186c6afe8.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/61dd4c50-67c5-11e6-a8e2-bd57fe668278.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/988b52d0-67c3-11e6-87d4-3721be0c5ff4.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/cc93f420-67c7-11e6-8fe3-ab96e77ecaa2.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/add06f50-67c7-11e6-88a9-d1a307b12e7d.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/575f91e0-67c8-11e6-bcb1-d3df66d91853.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/05863360-67c8-11e6-b0b0-7b29ec58b06e.jpg",
  },
  {
    url: "https://s3.eu-central-1.amazonaws.com/selfie-dev-images/uploads/f1bf2e90-67c7-11e6-a104-3531ac9580b0.jpg",
  },

]

class SelfiesContainer extends Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds.cloneWithRows(selfiesMock),
    }
  }

  render() {

    let dataSource = this.props.users ? this.state.dataSource.cloneWithRows(this.props.users) : this.state.dataSource.cloneWithRows(selfiesMock)
    return (
      <View style={styles.container}>
        <ListView
            dataSource = {dataSource}
            renderRow = {(selfie, sectionId, rowID) => {
              return (
                <Image source={{uri: selfie.url}} style={{width: deviceWidth, height: 400}}/>
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
