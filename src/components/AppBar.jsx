import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    padding: 10,
    flexDirection: 'row',
  },
  scrollView: {
    flexGrow: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: 5,
    gap: 10, // Si tu versión de React Native lo soporta
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab title='Repositories' to='/repositories' />
        <AppBarTab title='SignIn' to='/signIn' />
        <AppBarTab title='SignIn' to='/signIn' />
        <AppBarTab title='SignIn' to='/signIn' />
        <AppBarTab title='SignIn' to='/signIn' />
        <AppBarTab title='SignIn' to='/signIn' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
