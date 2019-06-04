import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from './App';
import Song from './app/components/song' 

const MainNavigator = createStackNavigator({
    Home: {screen: App},
    Song: {screen: Song}

});

const appNavig = createAppContainer(MainNavigator);
export default appNavig;