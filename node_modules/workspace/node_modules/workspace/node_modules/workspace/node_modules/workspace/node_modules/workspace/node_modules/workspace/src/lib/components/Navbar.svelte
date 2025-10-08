<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  let isMenuOpen = false;
  let scrolled = false;
  let showServices = false;
  let servicesCloseTimer;
  
  $: currentPath = $page.url.pathname;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function handleScroll() {
    // On home page, scrolled depends on position; on other pages, always solid
    if (currentPath === '/') {
      scrolled = window.scrollY > 50;
    } else {
      scrolled = true;
    }
  }
  
  function openServices() {
    if (servicesCloseTimer) clearTimeout(servicesCloseTimer);
    showServices = true;
  }
  
  function delayedCloseServices() {
    if (servicesCloseTimer) clearTimeout(servicesCloseTimer);
    servicesCloseTimer = setTimeout(() => {
      showServices = false;
    }, 180);
  }
  
  onMount(() => {
    // Initialize scrolled state based on route immediately
    scrolled = currentPath !== '/' || window.scrollY > 50;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  // React to route changes
  $: if (currentPath !== '/') {
    scrolled = true;
  } else {
    scrolled = typeof window !== 'undefined' ? window.scrollY > 50 : false;
  }
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
      
      <!-- Services with Dropdown -->
      <div class="relative"
           on:mouseenter={openServices}
           on:mouseleave={delayedCloseServices}
      >
        <button 
          class={`flex items-center ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}
          aria-haspopup="true"
          aria-expanded={showServices}
          on:click={() => (showServices = !showServices)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          Services
          <svg class="w-4 h-4 ml-1 transition-transform" style={`transform: rotate(${showServices ? 180 : 0}deg)`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        
        {#if showServices}
          <div class="absolute left-0 mt-2 w-[560px] max-w-[92vw] rounded-2xl shadow-2xl border border-blue-100/60 backdrop-blur bg-white/95 p-5 z-50"
               on:mouseenter={openServices}
               on:mouseleave={delayedCloseServices}
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-blue-900">
              {#each [
                'የ ደም ህመሞች ምርመራ እና ህክምና',
                'የደም ማነስ እና ተዛማች ችግሮች',
                'የመድማትና የመርጋት ህመሞች',
                'የአጥንት መቅኔ ምርመራ እና የደም ካንሰር ህክምና',
                'የደም መቅኒ መስነፍ ወይም ያለማምረት ችግር',
                'የደም ካንሰር ህክምና ና የማማከር አገልግሎት',
                'የተለያዩ የህጻናት የካንሰር ምርመራ እና ህክምና እና ህክምና',
                'የቅድመና ድኅረ ንቅለ ተከላ አገልጎት',
                'በተፈጥሮ የተከሰተ የሰውነት መድኅን መቀነስ'
              ] as item}
                <div class="flex items-start gap-3">
                  <div class="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-inner">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="leading-snug">{item}</span>
                </div>
              {/each}
            </div>
            <div class="pt-4 text-right">
              <a href="/services" class="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium">View all services
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
        {/if}
      </div>
      
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
          <!-- About -->
          <a 
            href="#about" 
            class="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transform transition-transform hover:-translate-x-1 hover:scale-105"
            on:click={toggleMenu}
          >
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span class="font-medium">About</span>
          </a>

          <!-- Services with collapsible submenu -->
          <details class="group">
            <summary class="list-none flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
              <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span class="font-medium flex-1">Services</span>
              <svg class="w-4 h-4 ml-2 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </summary>
            <ul class="mt-2 ml-14 mb-2 space-y-2 text-sm text-blue-900">
              {#each [
                'የ ደም ህመሞች ምርመራ እና ህክምና',
                'የደም ማነስ እና ተዛማች ችግሮች',
                'የመድማትና የመርጋት ህመሞች',
                'የአጥንት መቅኔ ምርመራ እና የደም ካንሰር ህክምና',
                'የደም መቅኒ መስነፍ ወይም ያለማምረት ችግር',
                'የደም ካንሰር ህክምና ና የማማከር አገልግሎት',
                'የተለያዩ የህጻናት የካንሰር ምርመራ እና ህክምና እና ህክምና',
                'የቅድመና ድኅረ ንቅለ ተከላ አገልጎት',
                'በተፈጥሮ የተከሰተ የሰውነት መድኅን መቀነስ'
              ] as item}
              <li class="flex items-start gap-3">
                <div class="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shadow-inner">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="leading-snug">{item}</span>
              </li>
              {/each}
            </ul>
          </details>

          <!-- Research -->
          <a 
            href="#research" 
            class="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transform transition-transform hover:-translate-x-1 hover:scale-105"
            on:click={toggleMenu}
          >
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span class="font-medium">Research</span>
          </a>
          
          <!-- Locations -->
          <a 
            href="#locations" 
            class="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transform transition-transform hover:-translate-x-1 hover:scale-105"
            on:click={toggleMenu}
          >
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="font-medium">Locations</span>
          </a>

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
