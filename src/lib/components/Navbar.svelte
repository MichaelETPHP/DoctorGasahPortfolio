<script>
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let scrolled = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function handleScroll() {
    scrolled = window.scrollY > 50;
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header class={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
  <div class="container-custom flex items-center justify-between">
    <a href="#" class="flex items-center">
      <span class={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>Dr. Gasah A</span>
    </a>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-8">
      <a href="#about" class={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>About</a>
      <a href="#services" class={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>Services</a>
      <a href="#research" class={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>Research</a>
      <a href="#locations" class={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>Locations</a>
      <a href="#contact" class="btn btn-primary">Contact</a>
    </nav>
    
    <!-- Mobile Menu Button -->
    <button 
      class="md:hidden focus:outline-none" 
      aria-label="Toggle menu"
      on:click={toggleMenu}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class={`h-6 w-6 ${scrolled ? 'text-blue-900' : 'text-white'}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        {#if isMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>
  
  <!-- Mobile Navigation -->
  {#if isMenuOpen}
    <div class="md:hidden bg-white shadow-lg">
      <nav class="container-custom py-4 flex flex-col space-y-4">
        <a 
          href="#about" 
          class="text-gray-700 hover:text-blue-500 transition-colors px-4 py-2"
          on:click={toggleMenu}
        >About</a>
        <a 
          href="#services" 
          class="text-gray-700 hover:text-blue-500 transition-colors px-4 py-2"
          on:click={toggleMenu}
        >Services</a>
        <a 
          href="#research" 
          class="text-gray-700 hover:text-blue-500 transition-colors px-4 py-2"
          on:click={toggleMenu}
        >Research</a>
        <a 
          href="#locations" 
          class="text-gray-700 hover:text-blue-500 transition-colors px-4 py-2"
          on:click={toggleMenu}
        >Locations</a>
        <a 
          href="#contact" 
          class="text-blue-600 font-medium px-4 py-2"
          on:click={toggleMenu}
        >Contact</a>
      </nav>
    </div>
  {/if}
</header>
