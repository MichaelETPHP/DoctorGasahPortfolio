<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from 'svelte';
  
  onMount(() => {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  });
</script>

<Navbar />

<main>
  <slot />
</main>

<Footer />
