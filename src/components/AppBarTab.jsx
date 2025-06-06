import { Text, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';

const AppBarTab = ({ title }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Text style={theme.tabText}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
