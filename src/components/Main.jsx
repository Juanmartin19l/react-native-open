import { StyleSheet, View } from 'react-native';
import { Routes, Route, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<Navigate to='/repositories' replace />} />
        <Route path='/repositories' element={<RepositoryList />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
