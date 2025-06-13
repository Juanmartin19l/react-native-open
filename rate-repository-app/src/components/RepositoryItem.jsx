import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  languageContainer: {
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    marginBottom: 4,
  },
});

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text fontWeight='bold' fontSize='subheading'>
              {repository.fullName}
            </Text>
          </View>

          <View style={styles.description}>
            <Text color='textSecondary'>{repository.description}</Text>
          </View>

          <View style={styles.languageContainer}>
            <Text color='primary'>{repository.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue} fontWeight='bold'>
            {formatNumber(repository.stargazersCount)}
          </Text>
          <Text color='textSecondary'>Stars</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue} fontWeight='bold'>
            {formatNumber(repository.forksCount)}
          </Text>
          <Text color='textSecondary'>Forks</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue} fontWeight='bold'>
            {repository.reviewCount}
          </Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>

        <View style={styles.statItem}>
          <Text style={styles.statValue} fontWeight='bold'>
            {repository.ratingAverage}
          </Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
