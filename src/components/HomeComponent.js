import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";

import TodoItem from "./TodoItem";

class HomeComponent extends Component {
  componentDidMount() {
    this.props.fetchTodo();
  }

  _keyExtractor = item => item.id;

  _renderItem = ({ item }) => {
    const todos = this.props.data.todos;
    return (
      <TodoItem
        submitEditing={this._onSubmitEditing}
        removeItem={this._onRemove}
        lastIndex={todos[todos.length - 1].id}
        item={item}
      />
    );
  };

  _onSubmitEditing = item => {
    this.props.add(item);
  };

  _onRemove = item => {
    this.props.remove(item);
  };

  render() {
    const { data } = this.props;
    // console.log('data: ', data.todos)
    return (
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
        {!data.loading ? (
          <Text style={styles.text}>
            To do: {data.todos.length !== 0 ? data.todos.length - 1 : 0}
          </Text>
        ) : (
          <ActivityIndicator />
        )}
        <FlatList
          data={data.todos}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          extraData={this.props}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#EEEEEE",
  },
  text: {
    fontSize: 24,
    color: "#00cc33",
    alignSelf: "center",
  },
});

export default HomeComponent;
