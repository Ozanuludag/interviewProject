import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import axios from 'axios';

const ApiScreen = () => {
  const [posts, setPosts] = React.useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      setPosts(posts);
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.header}>Axios Data Fetching</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ApiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {},
});
