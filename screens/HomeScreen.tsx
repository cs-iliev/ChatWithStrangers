import * as React from 'react';

import { Text, Image, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

import ChatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList 
        data={ChatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
});