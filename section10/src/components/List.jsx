import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === '') {
      return todos;
    } else {
      return todos.filter(todo =>
        todo.content.toLowerCase().includes(search.toLowerCase()),
      );
    }
  };

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalyzedData호출!');
    const totalCount = todos.length;
    const doneCount = todos.filter(todo => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 😝</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        type="text"
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
