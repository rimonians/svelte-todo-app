import { writable } from "svelte/store";

const getTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const todos = writable(getTodos);

export const createTodo = (content, cb) => {
  const todo = {
    id: Math.random(),
    content,
    status: "uncomplete",
  };
  todos.update((values) => {
    const newTodos = [...values, todo];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    return newTodos;
  });
  cb();
};

export const updateTodo = (id, status) => {
  todos.update((values) => {
    const updated = values.map((value) => {
      if (value.id === id) {
        return {
          ...value,
          status: status === "complete" ? "uncomplete" : "complete",
        };
      } else {
        return value;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updated));
    return updated;
  });
};

export const deleteTodo = (id) => {
  todos.update((values) => {
    const afterDeleted = values.filter((value) => value.id !== id);
    localStorage.setItem("todos", JSON.stringify(afterDeleted));
    return afterDeleted;
  });
};

export default todos;
