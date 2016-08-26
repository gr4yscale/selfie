import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import * as appActions from '../redux/actions/appActions'
import ScrollableTabView from '../../node_modules/react-native-scrollable-tab-view'
import SelfiesContainer from './SelfiesContainer'

class MainContainer extends Component {

  componentWillMount() {
    this.throttledRefreshData = _.throttle(this.refreshData, 60000, {'leading': true, 'trailing': false})
  }

  handleTabChange(tab) {
    console.log('a tab changed!')
  }

  refreshData() {
    //TOFIX: do something here
    console.log('i would be refreshing data here if i knew what to do')
  }

  render() {
    return (
      <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <View/>}
          onChangeTab={(tab) => {
            this.handleTabChange(tab.i)
          }}
      >
        <SelfiesContainer />
      </ScrollableTabView>
    )
  }
}

export default connect(
  (state) => {
    return state
  },
  (dispatch) => {
    return {
      ...bindActionCreators(appActions, dispatch),
    }
  }
)(MainContainer)
