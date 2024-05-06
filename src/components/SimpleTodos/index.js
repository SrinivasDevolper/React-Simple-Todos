import {Component} from 'react'

import UserDeleteItem from '../TodoItem/index'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {userTodosList: initialTodosList}

  userdeleteItem = uniqueId => {
    const {userTodosList} = this.state
    const filterTodoItem = userTodosList.filter(
      eachItem => eachItem.id !== uniqueId,
    )
    this.setState({userTodosList: filterTodoItem})
  }

  render() {
    const {userTodosList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Simple Todos</h1>
          <ul>
            {userTodosList.map(eachList => (
              <UserDeleteItem
                eachList={eachList}
                key={eachList.id}
                userdeleteItem={this.userdeleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
