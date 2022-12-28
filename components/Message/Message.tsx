import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const blue = '#3872E9';
const grey = 'lightgrey';

const myId = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id == myId;

    return (
        <View style={[
            styles.container, isMe ? styles.rightContainer : styles.leftContainer]}
        >
            <Text style={{color: isMe ? 'black' : 'white'}}>{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3872E9',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    leftContainer: {
        backgroundColor: '#3872E9',
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer: {
        backgroundColor: 'lightgrey',
        marginLeft: 'auto',
        marginRight: 10,
    }
});

export default Message