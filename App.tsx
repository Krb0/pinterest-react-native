import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import PinScreen from "./screens/PinScreen";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <PinScreen />
      {/*       <Navigation colorScheme={colorScheme} />
       */}
      <StatusBar />
    </SafeAreaProvider>
  );
}
