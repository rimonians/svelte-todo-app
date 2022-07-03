<script>
  import { updateTodo } from "../store/todoStore";
  import { deleteTodo } from "../store/todoStore";
  export let todo;
  $: id = todo.id;
  $: content = todo.content;
  $: status = todo.status;
</script>

<div class="item">
  <p class={status}>{content}</p>
  <div class="actions">
    <button class={status} on:click={() => updateTodo(id, status)}
      >{status}</button
    >
    <button class="delete" on:click={() => deleteTodo(id)}>Delete</button>
  </div>
</div>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  }
  .item > p {
    font-weight: 600;
  }
  .item > p.uncomplete {
    color: orangered;
  }
  .item > p.complete {
    color: dodgerblue;
    text-decoration: line-through;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .actions button {
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
    color: #fff;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
  }
  .actions > button.uncomplete {
    background: orangered;
  }
  .actions > button.complete {
    background: dodgerblue;
  }
  .delete {
    background: crimson;
  }
  @media (max-width: 768px) {
    .item {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
  }
</style>
