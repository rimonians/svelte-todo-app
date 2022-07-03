<script>
  import { createTodo } from "../store/todoStore";
  let content = "";

  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (content) {
      createTodo(content, () => {
        content = "";
      });
    } else {
      alert("Todo content can't be empty");
    }
  };
</script>

<form class="input__section" on:submit={handleCreateTodo}>
  <input
    type="text"
    placeholder="Write todo content.."
    autocomplete="off"
    spellcheck="false"
    bind:value={content}
  />
</form>

<style>
  .input__section {
    display: flex;
  }
  .input__section input {
    flex: 1;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    font-weight: 600;
  }
  .input__section input:focus {
    box-shadow: 0 0 3px rgba(0, 129, 250, 0.8);
  }
</style>
