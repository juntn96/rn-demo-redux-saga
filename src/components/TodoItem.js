import React, { Component, PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import Swipeout from 'react-native-swipeout'

class TodoItem extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            isDone: false
        }
    }

    _onPress = () => {
        this.setState({
            isDone: !this.state.isDone
        })
    }

    _onSubmitEditing = (event) => {
        const { submitEditing, item, lastIndex } = this.props
        if (submitEditing) {
            submitEditing({
                id: item.content === null ? lastIndex : item.id,
                content: event.nativeEvent.text
            })
            this._textInput.clear(0)
        }
    }

    _onRemove = () => {
        const { removeItem, item } = this.props
        if (removeItem) {
            removeItem(item)
        }
    }

    render() {

        const { item } = this.props
        const { isDone } = this.state

        const icAdd = require('../images/ic_add.png')
        const icDone = require('../images/ic_done.png')
        const icNotDone = require('../images/ic_not_done.png')

        const icon = item.content === null ? icAdd : isDone ? icDone : icNotDone

        const swipeoutSettings = item.content !== null ? {
            autoClose: true,
            right: [
                {
                    onPress: () => {
                        this._onRemove()
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ]
        } : {}

        return (
            <Swipeout
                {...swipeoutSettings}
                style={{ backgroundColor: 'transparent' }} >
                <View
                    style={styles.container}
                >
                    <TouchableOpacity
                        onPress={this._onPress}
                        activeOpacity={0.8}
                    >
                        <Image
                            style={styles.image}
                            source={icon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        value={item.content}
                        ref={ref => this._textInput = ref}
                        onSubmitEditing={this._onSubmitEditing}
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                    />
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: '#000'
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 16
    },
    input: {
        flex: 1,
        paddingBottom: 4,
        paddingTop: 4,
        fontSize: 15,
        color: '#4f4f4f'
    }
});

export default TodoItem;
