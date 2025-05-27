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
    <a href="/" class="flex items-center" aria-label="Home">
      <div class={`w-10 h-10 mr-2 rounded-full flex items-center justify-center ${scrolled ? 'bg-white' : 'bg-blue-100'}`}>
        <img src="/images/heart-logo.svg" alt="Dr. Gasah A Logo" class="w-7 h-7" />
      </div>
      <span class={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>Dr. Gasah A</span>
    </a>
    
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-8">
      <a href="#about" class={`flex items-center ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        About
      </a>
      <a href="#services" class={`flex items-center ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        Services
      </a>
      <a href="#research" class={`flex items-center ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Research
      </a>
      <a href="#locations" class={`flex items-center ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Locations
      </a>
      <a href="#contact" class="btn btn-primary flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Contact
      </a>
    </nav>
    
    <!-- Mobile Menu Button with Animation -->
    <button 
      class="md:hidden relative w-10 h-10 focus:outline-none rounded-full hover:bg-white/10 flex items-center justify-center transition-colors duration-300" 
      aria-label="Toggle menu"
      on:click={toggleMenu}
    >
      <div class="w-6 h-6 flex flex-col justify-center items-center overflow-hidden">
        <!-- Top bar -->
        <span 
          class={`block h-0.5 w-6 ${scrolled ? 'bg-blue-900' : 'bg-white'} rounded-full transform transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 translate-y-1.5' : '-translate-y-1'}`}>
        </span>
        
        <!-- Middle bar -->
        <span 
          class={`block h-0.5 ${scrolled ? 'bg-blue-900' : 'bg-white'} rounded-full transform transition-all duration-200 ${isMenuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'}`}>
        </span>
        
        <!-- Bottom bar -->
        <span 
          class={`block h-0.5 w-6 ${scrolled ? 'bg-blue-900' : 'bg-white'} rounded-full transform transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 -translate-y-1.5' : 'translate-y-1'}`}>
        </span>
      </div>
      
      <!-- Ripple animation when clicked -->
      {#if isMenuOpen}
        <span class="absolute inset-0 rounded-full animate-ripple opacity-20 bg-blue-300"></span>
      {/if}
    </button>
  </div>
  
  <!-- Mobile Navigation Animated -->
  <div 
    class="md:hidden fixed inset-0 z-40 bg-blue-900/50 backdrop-blur-sm transition-opacity duration-300"
    style="opacity: {isMenuOpen ? '1' : '0'}; pointer-events: {isMenuOpen ? 'auto' : 'none'}"
  >
    <div 
      class="bg-white shadow-lg max-w-sm ml-auto h-full transform transition-transform duration-300 ease-out"
      style="transform: translateX({isMenuOpen ? '0%' : '100%'})"
    >
      <div class="container-custom py-6 px-4 flex flex-col h-full">
        <!-- Menu Header -->
        <div class="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-blue-900">Dr. Gasah A</span>
          </div>
          <button 
            class="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-300"
            on:click={toggleMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      
        <!-- Navigation Links -->
        <nav class="flex flex-col space-y-3 overflow-y-auto flex-grow">
          {#each [{href: "#about", text: "About", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"},
                 {href: "#services", text: "Services", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"},
                 {href: "#research", text: "Research", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},
                 {href: "#locations", text: "Locations", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}] as item, i}
            <a 
              href={item.href} 
              class="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transform transition-transform hover:-translate-x-1 hover:scale-105"
              on:click={toggleMenu}
              style="transition-delay: {i * 50}ms"
            >
              <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon} />
                </svg>
              </div>
              <span class="font-medium">{item.text}</span>
            </a>
          {/each}
          
          <!-- Contact Button (Highlighted) -->
          <a 
            href="#contact"
            class="mt-6 flex items-center px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transform transition-all hover:-translate-x-1 hover:scale-105"
            on:click={toggleMenu}
            style="transition-delay: 250ms"
          >
            <div class="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span class="font-medium">Contact</span>
          </a>
        </nav>
        
        <!-- Footer -->
        <div class="pt-4 mt-auto border-t border-gray-100">
          <div class="flex justify-center space-x-4 py-2">
            <p class="text-sm text-gray-500">© 2025 Dr. Gasah A. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
