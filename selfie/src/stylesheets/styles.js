import { Dimensions, StyleSheet } from 'react-native'
// import StyleSheet from '../stylesheets/debugStylesheet.js'
import cairn from '../../node_modules/cairn'

const deviceWidth = Dimensions.get('window').width;

export const COLOR_1 = '#FFFFFF'
export const COLOR_2 = '#000000'
export const COLOR_3 = '#33FFBB'
export const COLOR_4 = '#282C34'
export const COLOR_5 = '#666666'
export const FONT_FAMILY = 'AvenirNext-Medium'
export const FONT_SIZE_HUGE = 24
export const FONT_SIZE_HEADING = 18
export const FONT_SIZE_TITLE = 14
export const FONT_SIZE_SUBTITLE = 12
export const FONT_WEIGHT_HUGE = '600'
export const FONT_WEIGHT_HEADING = '400'
export const FONT_WEIGHT_TITLE = '300'
export const FONT_WEIGHT_SUBTITLE = '200'
export const ICON_SIZE_NORMAL = 30

export default cairn({
  container: {
    flex:1,
  },

  text: {
    fontFamily: FONT_FAMILY,
    color: COLOR_1,
    margin: 8,

    huge: {
      fontSize: FONT_SIZE_HUGE,
      fontWeight: FONT_WEIGHT_HUGE,
    },

    heading: {
      fontSize: FONT_SIZE_HEADING,
      fontWeight: FONT_WEIGHT_HEADING,
    },

    title: {
      fontSize: FONT_SIZE_TITLE,
      fontWeight: FONT_WEIGHT_TITLE,
    },

    subtitle: {
      fontSize: FONT_SIZE_SUBTITLE,
      fontWeight: FONT_WEIGHT_SUBTITLE,
    },
  },

  textInput: {
    position:'absolute',
    margin: 0,

    input: {
      padding: 8,
      color: COLOR_2,
      backgroundColor: COLOR_1,
    },
    shadow: {
      backgroundColor:COLOR_2,
      marginLeft: 4,
      marginTop: 4,
      opacity: 0.3,
    },
    flatInput: {
      padding: 8,
      color: COLOR_2,
    },
  },

  buttonText: {
    touchable: {
      backgroundColor:'transparent',
      justifyContent: 'center',
      props: {
        underlayColor: COLOR_3,
      },
    },
    text: {
      margin: 10,
      color: COLOR_1,
      fontFamily: FONT_FAMILY,
      fontSize: FONT_SIZE_HUGE,
      fontWeight: FONT_WEIGHT_HEADING,
      textAlign: 'center',
    },
    textWrapper: {
      backgroundColor:COLOR_2,
      height: 48,
      borderRadius: 24,
      justifyContent:'center',
    },
  },

  buttonIcon: {
    props: {},
    icon: {
      position:'absolute',
      left: 0,
      top: 0,
      backgroundColor:'transparent',
    },
  },

  buttonBottomBar: {
    container: {
      position:'absolute',
      width:deviceWidth,
      height: 50,
      bottom: 0,
    },
    touchable: {
      height: 50,
      backgroundColor: COLOR_5,
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    touchableValid: {
      backgroundColor: COLOR_4,
    },
    touchableInvalid: {
      backgroundColor: COLOR_5,
    },
    text: {
      color: COLOR_3,
      fontFamily: FONT_FAMILY,
      fontSize: FONT_SIZE_HUGE,
      fontWeight: FONT_WEIGHT_HEADING,
      textAlign: 'center',
      justifyContent:'center',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    textValid: {
      color: COLOR_1,
      fontWeight: FONT_WEIGHT_HUGE,
    },
    textInvalid: {
      color: COLOR_3,
    },
  },

  card: {
    content: {
      backgroundColor:COLOR_4,
      marginRight: 6,
      marginBottom: 6,
    },
    shadow: {
      position:'absolute',
      backgroundColor:COLOR_2,
      marginLeft: 6,
      marginTop: 6,
      opacity: 0,
    },
  },

  tabBar: {
    props: {
      activeIconIndicatorOffset:  41,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 0,
    },
    tabContainer: {
      height: 64,
      flexDirection: 'row',
      paddingTop: 20,
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: 'rgba(0,0,0,0.05)',
      paddingBottom: 4,
      backgroundColor: COLOR_4,
      justifyContent: 'center',
      opacity: 0.5,
    },
    icon: {
      width: ICON_SIZE_NORMAL, // be sure to change constant in TabBar.js
      height: ICON_SIZE_NORMAL,
      position: 'absolute',
      top: 0,
      left: 32,
      props: {
        size: ICON_SIZE_NORMAL,
        color: COLOR_1,
      },
    },
    tabDotStyle: {
      position: 'absolute',
      width: 6,
      height: 6,
      borderRadius: 3,
      marginLeft: 3,
      backgroundColor: COLOR_3,
      bottom: 10,
    },
  },

  listCell: {
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      paddingLeft: 12,
      backgroundColor: COLOR_1,
      height: 40,
    },
    touchable: {
      props: {
        delayPressIn: 0,
        delayPressOut: 0,
        underlayColor: COLOR_1,
        activeOpacity: 1,
      },
    },
    text: {
      color: COLOR_4,
      fontFamily: FONT_FAMILY,
      fontSize: FONT_SIZE_HEADING,
      fontWeight: FONT_WEIGHT_HEADING,
    },
    textSelected: {
      color: COLOR_2,
      fontWeight: FONT_WEIGHT_HEADING,
    },
    selectionIcon: {
      position:'absolute',
      right: 10,
      marginLeft: 10,
      width: ICON_SIZE_NORMAL,
      height: ICON_SIZE_NORMAL,
      props: {
        name: 'md-close',
        size: ICON_SIZE_NORMAL,
        color: COLOR_5,
      },
    },
    deletionIcon: {
      position:'absolute',
      right: 10,
      marginLeft: 10,
      top: 6,
      padding: 0,
      paddingLeft: 0,
      width: ICON_SIZE_NORMAL,
      height: ICON_SIZE_NORMAL,
      props: {
        name: 'ios-close-outline',
        size: ICON_SIZE_NORMAL,
        color: COLOR_5,
      },
    },
  },

  form: {
    container: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
    },
    textInput: {
      height: 40,
      marginLeft: 10,
      padding: 8,
      color: COLOR_1,
      fontSize: FONT_SIZE_TITLE,
      props: {
        autoCapitalize: 'none',
        autoCorrect: false,
        blurOnSubmit: false,
        placeholderTextColor: COLOR_5,
        underlineColorAndroid: 'rgba(0,0,0,0)',
        clearButtonMode:'while-editing',
        enablesReturnKeyAutomatically: true,
      },
    },
  },

  separator: {
    position: 'absolute',
    bottom: 0,
    width: deviceWidth,
    height: 0.5,
    backgroundColor: COLOR_5,
  },

  // container-specific:

  share: {
    formContainer: {
      backgroundColor: COLOR_1,
      flexDirection: 'column',
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      paddingBottom: 8,
    },

    textInput: {
      color: COLOR_4,
      margin: 0,
      marginLeft: 0, // have to define this because if a 'parent' style is applied cairn won't overwrite it unless explicit
      paddingLeft: 12,
      props: {
        placeholderTextColor: COLOR_5,
      },
    },
  },


  // account settings

  actionSettingsTabContainer: {
    height: 56,
    flexDirection: 'row',
    marginTop: 0,
    paddingTop: 0,
    borderWidth: 0,
    // paddingBottom: 4,
    backgroundColor: 'transparent',
  },

  actionSettingsTabBar: {
    props: {
      activeTabIndicatorOffset: 31,
    },

    activeTabIndicatorStyle: {
      position: 'absolute',
      width: 24,
      height: 3,
      backgroundColor: COLOR_4,
      bottom: 0,
    },
  },

  // component-specific

  actionButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'transparent',
  },

  actionButtonCircleBackground: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: 38,
    height: 38,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 19,
    backgroundColor: 'red',
  },

  actionButtonText: {
    fontSize: FONT_SIZE_HUGE,
    fontWeight: FONT_WEIGHT_HEADING,
    backgroundColor:'transparent',
  },

  // closeIcon: {
  //   position:'absolute',
  //   left: 0,
  //   top: 0,
  //   width: 30,
  //   height: 30,
  // },

}, (styles) => StyleSheet.create(styles))
