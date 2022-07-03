<script>
  import todos from "../store/todoStore";
  import Item from "./Item.svelte";
</script>

<div class="output__section">
  <h3>All todos ({$todos.length})</h3>
  <div class="items">
    {#each $todos as todo}
      <Item {todo} />
    {/each}
  </div>
</div>

<style>
  .output__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
