<script>
  import { onMount } from 'svelte';
  
  export let show = false;
  
  let modalElement;
  
  onMount(() => {
    // Load TikTok embed script when component mounts
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script when component is destroyed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  });
  
  function closeModal() {
    show = false;
  }
  
  function handleBackdropClick(event) {
    if (event.target === modalElement) {
      closeModal();
    }
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if show}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    class:opacity-0={!show}
    class:opacity-100={show}
    style="transition: opacity 0.3s ease-in-out;"
    on:click={handleBackdropClick}
    bind:this={modalElement}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <div 
      class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-all duration-300"
      class:scale-95={!show}
      class:scale-100={show}
    >
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
        on:click={closeModal}
        aria-label="Close TikTok modal"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <!-- TikTok Embed Content -->
      <div class="p-6">
        <div class="text-center mb-6">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-800">Dr. Gashaw Arega on TikTok</h2>
          </div>
          <p class="text-gray-600">Follow for health tips, medical insights, and pediatric care updates</p>
        </div>
        
        <!-- TikTok Embed -->
        <div class="flex justify-center">
          <blockquote 
            class="tiktok-embed" 
            cite="https://www.tiktok.com/@dr.gashaw.arega" 
            data-unique-id="dr.gashaw.arega" 
            data-embed-type="creator" 
            style="max-width: 780px; min-width: 288px;"
          >
            <section>
              <a target="_blank" href="https://www.tiktok.com/@dr.gashaw.arega?refer=creator_embed">
                @dr.gashaw.arega
              </a>
            </section>
          </blockquote>
        </div>
        
        <!-- Follow Button -->
        <div class="text-center mt-6">
          <a 
            href="https://www.tiktok.com/@dr.gashaw.arega" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            Follow on TikTok
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .opacity-0 {
    opacity: 0;
  }
  
  .opacity-100 {
    opacity: 1;
  }
  
  .scale-95 {
    transform: scale(0.95);
  }
  
  .scale-100 {
    transform: scale(1);
  }
</style>
