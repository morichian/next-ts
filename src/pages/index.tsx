import { InferGetStaticPropsType } from "next";
import axios from "axios";
import Styles from "../styles/style.module.css";
import Link from "next/link";

const index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);
  return (
    <section className="container">
      <h1 className={Styles.title}>TODO APP</h1>
      <div className={Styles.add}>
        <Link href="/add"> Add </Link>
      </div>
      <section className={Styles.box}>
        {data.map((todo: any) => (
          <div key={todo._id} className="todoRow">
            <h1> {todo.Todo} </h1>
          </div>
        ))}
      </section>
    </section>
  );
};

export default index;

export async function getStaticProps() {
  const response = await axios.get("http://localhost:5000/api/todos");
  const data = await response.data;
  return {
    props: data,
  };
}
