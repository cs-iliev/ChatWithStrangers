import React from 'react';

import Message from '../components/Message';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {

    const route = useRoute();
    const navigation = useNavigation();

    navigation.setOptions({title: 'Elon Musk'});

    return(
        <SafeAreaView style={styles.page}>
            <FlatList 
                data={chatRoomData.messages}
                renderItem={({ item }) => <Message message={item} />}
                showsVerticalScrollIndicator={false}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
});