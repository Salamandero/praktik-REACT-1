// const { render } = require('@testing-library/react');

import React, { Component } from 'react';
import Button from './Button/Button';
import { data } from '../data/data';
import UsersList from './UsersList/UsersList';
import { nanoid } from 'nanoid';
import AddForm from './AddForm/AddForm';

export class App extends Component {
  state = {
    isListShow: false,
    users: data,
    isAddFormShow: false,
  };

  showUsersList = () => {
    this.setState(prevState => ({
      isListShow: !prevState.isListShow,
    }));
  };
  deleteUser = userId => {
    this.setState(prevSate => ({
      users: prevSate.users.filter(({ id }) => id !== userId),
    }));
  };
  showForm = () => {
    this.setState({
      isAddFormShow: true,
    });
  };
  addUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isAddFormShow: false,
    }));
  };
  render() {
    const { isListShow, isAddFormShow, users } = this.state;

    return (
      <>
        <Button
          text={isListShow ? 'Hide users' : 'Show users'}
          clickHandler={this.showUsersList}
        />
        {isListShow && (
          <>
            <UsersList users={users} deleteUser={this.deleteUser} />
            {isAddFormShow ? (
              <Button text="Add user" clickHandler={this.showForm} />
            ) : (
              <AddForm addUser={this.addUser} />
            )}
          </>
        )}
      </>
    );
  }
}
export default App;
