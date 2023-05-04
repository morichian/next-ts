import { useState } from "react";
import axios from "axios";
import Styles from "../styles/style.module.css";
import Link from "next/link";

const Add = () => {
  const [todo, setTodo] = useState<string>("");
  const addNewTodoHandler = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/todos/create", {
        Todo: todo,
      });
      console.log("data has been added");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section onSubmit={addNewTodoHandler}>
      <h1 className={Styles.title}>Add Todo</h1>
      <div className={Styles.add}>
        <Link href="/"> Back </Link>
      </div>
      <form className={Styles.box}>
        <input
          type="text"
          placeholder="Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default Add;
