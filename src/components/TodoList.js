import React, {useState} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (todo !== "") {
          setTodos([...todos, todo]);
          setTodo("");
        }
      };

      const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
          return todo !== text;
        });
        setTodos(newTodos);
      };
  

  return (
    <div className='flex flex-col items-center justify-center space-y-8 my-16 py-8 min-h-[54vh]'>
        <div>
            <input
                className='rounded-md py-2 px-4 bg-slate-200'
                type="text"
                name="todo"
                value={todo}
                placeholder="Create a new todo"
                onChange={(e) => {
                setTodo(e.target.value);
                }}
            />
            <button className='mx-8 py-2 px-4 bg-green-500 text-white font-bold rounded-md' onClick={addTodo}> Add </button>
        </div>
        <div>
            {todos?.length > 0 ? (
                <ul className='space-y-4'>
                    {todos.map((entry, index) => (
                    <div className="flex space-x-4 justify-between">
                    <li key={index} className='px-4 py-2 bg-slate-600 text-white font- rounded-md'> {entry} </li>

                    <button className='px-4 py-2 bg-red-700 text-white font-bold rounded-md'
                        onClick={() => {
                        deleteTodo(entry);
                        }}
                    >
                        Delete
                    </button>
                    </div>))}
                </ul>
            ) : (<p className='font-bold dark:text-white'>No task found</p>)}
        </div>
    </div>
  )
}

export default TodoList