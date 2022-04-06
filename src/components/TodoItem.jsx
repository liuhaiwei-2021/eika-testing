function TodoItem({ item }) {
  const { name, price, isCompleted, imageURL } = item;
  return (
    <li className="todo-item">
      <input
        className="item-check"
        type="checkbox"
        defaultChecked={isCompleted}
      />
      <span className="item-name">{name} </span>
      <span className="item-price">{price}:-</span>

      {/* <input type="file" accept="image/png, image/jpeg" />
      <img src={imageURL} alt="Thumbnail of the product" /> */}
    </li>
  );
}

export default TodoItem;
