import * as React from 'react'
import { Animated, Button, StyleSheet, Text } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'

const addOne = (input: number) => input + 1

export const Counter: React.FC<{label:string}> = ({label}) => {
  const [count, setCount] = React.useState(0)
  const animX = React.useRef(new Animated.Value(0)).current;

  const _onPan = Animated.event<PanGestureHandlerGestureEvent>([
    { nativeEvent: { translationX: animX } },
  ], {
    useNativeDriver: true,
  })

  return (
    <PanGestureHandler onGestureEvent={_onPan}>
      <Animated.View style={[styles.container, {transform: [{translateX: animX}]}]}>
        <Text>{label}, {count} times</Text>
        <Button onPress={() => setCount(addOne(count))} title='Press Me' />
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})
