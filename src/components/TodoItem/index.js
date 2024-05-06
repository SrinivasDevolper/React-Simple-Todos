import './index.css'

const UserDeleteItem = props => {
  const {eachList, userdeleteItem} = props
  const {title, id} = eachList
  const onDeltetItem = () => {
    userdeleteItem(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDeltetItem}>
        Delete
      </button>
    </li>
  )
}

export default UserDeleteItem
