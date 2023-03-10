/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ReactNativeForegroundService from "@supersami/rn-foreground-service";

const tarefa_in_the_foreground = () => {
  console.log("bingo!")
}

ReactNativeForegroundService.register();

ReactNativeForegroundService.add_task(() => tarefa_in_the_foreground(), {
  delay: 5000,
  onLoop: true,
  taskId: "taskid",
  onError: (e) => console.log(`Error logging:`, e),
});

ReactNativeForegroundService.start({
  id: 1244,
  title: "Foreground Service",
  message: "We are live World",
  icon: "ic_launcher",
  button: true,
  button2: true,
  buttonText: "Button",
  button2Text: "Anther Button",
  buttonOnPress: "cray",
  setOnlyAlertOnce: true,
  color: "#000000",
  progress: {
    max: 100,
    curr: 50,
  },
});

AppRegistry.registerComponent(appName, () => App);
