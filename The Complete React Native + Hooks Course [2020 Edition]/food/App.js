import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultDetail from './src/screens/ResultDetail';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultDetail: ResultDetail
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);