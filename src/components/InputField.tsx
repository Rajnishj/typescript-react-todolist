import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, addTodo }: Props) => {
  const InputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        addTodo(e);
        InputRef.current?.blur();
      }}
      className="input"
    >
      <input
        ref={InputRef}
        type="text"
        className="input-sec"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="form-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default InputField;
