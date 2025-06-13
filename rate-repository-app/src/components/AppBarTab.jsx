import { Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../theme';

const AppBarTab = ({ title, to }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Text style={theme.tabText}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
