<script>
  import { onMount } from 'svelte';

  let visible = false;

  function checkVisibility() {
    const element = document.getElementById('about');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight * 0.75) {
      visible = true;
    }
  }

  onMount(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  });
</script>

<section id="about" class="py-20 bg-gradient-to-b from-white to-blue-50">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
        About Dr. Gasah A
      </h2>
      <p class="text-xl text-blue-700/80 max-w-3xl mx-auto leading-relaxed">
        Dedicated to improving children's lives through specialized care and groundbreaking research
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <div class="lg:w-1/2 transition-all duration-1000" 
           class:translate-x-0={visible} 
           class:-translate-x-16={!visible} 
           class:opacity-100={visible} 
           class:opacity-0={!visible}>
        <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="/doctor-profile.jpg" 
            alt="Dr. Gasah A in a clinical setting" 
            class="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy" decoding="async"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-90"></div>
          <div class="absolute bottom-0 p-8 text-white">
            <h3 class="text-3xl font-bold mb-2">Dr. Gasah A</h3>
            <p class="text-blue-100 text-lg">Pediatric Hematology Oncologist</p>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 transition-all duration-1000 delay-300" 
           class:translate-x-0={visible} 
           class:translate-x-16={!visible} 
           class:opacity-100={visible} 
           class:opacity-0={!visible}>
        <div class="space-y-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-2xl font-bold text-blue-900 mb-4">Professional Background</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              Dr. Gasah A is a distinguished pediatric hematology oncologist specializing in childhood blood cancers and neuroblastoma. With years of dedicated training and clinical practice, he has established himself as a leading expert in Ethiopia's medical community.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Dr. Gasah divides his time between Black Lion Hospital, where he serves as a senior consultant, and Betzata Private Clinic, where he provides specialized care in a private setting.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-2xl font-bold text-blue-900 mb-6">Education & Expertise</h3>
            <ul class="space-y-4">
              {#each [
                'Specialized training in pediatric hematology and oncology',
                'Active researcher in childhood blood cancers and neuroblastoma',
                'Contributor to international medical journals and conferences',
                'Advocate for improved pediatric cancer care in Ethiopia'
              ] as item}
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-gray-700">{item}</span>
                </li>
              {/each}
            </ul>
          </div>

          <a href="#contact" 
             class="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .-translate-x-16 {
    transform: translateX(-4rem);
  }

  .translate-x-16 {
    transform: translateX(4rem);
  }
</style>