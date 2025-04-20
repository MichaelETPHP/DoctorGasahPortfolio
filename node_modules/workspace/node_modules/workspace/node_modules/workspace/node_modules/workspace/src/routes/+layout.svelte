<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Load Feather icons if needed
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    script.onload = () => {
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    };
    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
</svelte:head>

<Navbar />

<main>
  <slot />
</main>

<Footer />
