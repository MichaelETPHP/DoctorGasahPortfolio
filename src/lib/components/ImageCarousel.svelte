<script>
  import { onMount } from 'svelte';
  export let images = [];
  export let intervalMs = 3500;

  let current = 0;
  let timer;

  function next() {
    current = (current + 1) % images.length;
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
  }

  function goTo(i) {
    current = i;
  }

  onMount(() => {
    if (images.length > 1) {
      timer = setInterval(next, intervalMs);
    }
    return () => timer && clearInterval(timer);
  });
</script>

{#if images && images.length}
  <div class="relative w-full overflow-hidden rounded-2xl border border-blue-100/60 bg-white/50">
    <!-- Slides -->
    <div class="whitespace-nowrap transition-transform duration-500" style="transform: translateX(-{current * 100}%);">
      {#each images as src, i}
        <div class="inline-block align-top w-full">
          <img src={src} alt="carousel image" class="w-full h-56 sm:h-72 md:h-96 object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      {/each}
    </div>

    <!-- Arrows -->
    {#if images.length > 1}
      <button class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow" aria-label="Previous" on:click={prev}>
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full w-10 h-10 flex items-center justify-center shadow" aria-label="Next" on:click={next}>
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    {/if}

    <!-- Dots -->
    {#if images.length > 1}
      <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {#each images as _, i}
          <button class="w-2.5 h-2.5 rounded-full transition-all {i === current ? 'bg-blue-600 w-6' : 'bg-white/80 border border-blue-300'}" aria-label={`Go to slide ${i+1}`} on:click={() => goTo(i)}></button>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <div class="w-full h-56 sm:h-72 md:h-96 rounded-2xl bg-blue-50 border border-blue-100/60 flex items-center justify-center text-blue-400">No images</div>
{/if}
