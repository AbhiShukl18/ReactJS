// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { add, delet } from '../ReduxTodo/Action';


// const Reduxtodo = () => {
//     const [todo, setTodo] = useState("");   //single todo
//   const [allTodos, setAllTodos] = useState([]);  // store todo in array
//   const dispatch = useDispatch();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(add({
//       text: todo,
//       completed: false,
//     }));
//     setTodo('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       value={todo}
//       onChange={(e) => setTodo(e.target.value)}
//     />
//     <button type="submit">Add Todo</button>
//   </form>
//   )
// }

// export default Reduxtodo
