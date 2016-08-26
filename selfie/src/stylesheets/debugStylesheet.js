import {StyleSheet} from 'react-native'
import merge from 'merge'

// credits go to brentvatne for this one:
// https://github.com/brentvatne/react-native-debug-stylesheet
// had issues with require calls in his library, so just copied it in to this project

function randomHexColor() {
  return '#'+('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6);
}

function createDebugStylesheet(debugOptions) {
  return {
    create: (styleObject) => {
      for (let styleClass in styleObject) {

        let propertiesForStyleClass = {};
        for (let debugProperty in debugOptions) {
          // Apply the function to get a value unique to this styleClass for the property
          if (typeof debugOptions[debugProperty] == 'function') {
            let value = debugOptions[debugProperty].call(this, styleClass, debugProperty, styleObject[styleClass][debugProperty])

            if (value != null && (typeof value !== 'undefined')) {
              propertiesForStyleClass[debugProperty] = value
            }
          // Otherwise just set the value
          } else {
            propertiesForStyleClass[debugProperty] = debugOptions[debugProperty]
          }
        }
        styleObject[styleClass] = merge(styleObject[styleClass], propertiesForStyleClass)
      }
      return StyleSheet.create(styleObject)
    }
  }
}

export default createDebugStylesheet({
  backgroundColor: randomHexColor,
  opacity: 1.0,
  borderColor: randomHexColor, borderWidth: 0.5,
});
