<script>
  import Heading from "./components/Heading.svelte";
  import InputSection from "./components/InputSection.svelte";
  import OutputSection from "./components/OutputSection.svelte";
</script>

<main>
  <Heading />
  <InputSection />
  <OutputSection />
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    border: none;
    user-select: none;
    font-family: Ubuntu;
  }
  main {
    width: 80%;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    main {
      width: 95%;
    }
  }
</style>
