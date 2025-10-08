<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.head.appendChild(script);
  });
</script>

<section id="tiktok" class="py-16 bg-gradient-to-b from-white to-blue-50">
  <div class="container-custom">
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">TikTok</h2>
      <p class="text-gray-600">Follow <span class="font-semibold">@dr.gashaw.arega</span> for pediatric health tips and updates</p>
    </div>

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
  </div>
</section>
