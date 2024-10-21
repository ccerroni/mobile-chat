import {Slot} from "expo-router";

// Import your global CSS file
import "../global.css"
import { View } from "react-native";

export default function _layout() {
return (
  <View>
    <Slot />
  </View>
)
}

// export default Slot