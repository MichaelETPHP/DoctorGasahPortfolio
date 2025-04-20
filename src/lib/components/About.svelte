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
    checkVisibility(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  });
</script>

<section id="about" class="section bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title">About Dr. Gasah A</h2>
      <p class="section-subtitle mx-auto">
        Dedicated to improving children's lives through specialized care and groundbreaking research
      </p>
    </div>
    
    <div class="flex flex-col md:flex-row gap-10 items-center">
      <div class="md:w-1/2 transition-all duration-1000" class:translate-x-0={visible} class:-translate-x-16={!visible} class:opacity-100={visible} class:opacity-0={!visible}>
        <div class="relative rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/doctor-profile.jpg" 
            alt="Dr. Gasah A in a clinical setting" 
            class="w-full h-auto"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
          <div class="absolute bottom-0 p-6 text-white">
            <h3 class="text-2xl font-bold">Dr. Gasah A</h3>
            <p class="text-blue-100">Pediatric Hematology Oncologist</p>
          </div>
        </div>
      </div>
      
      <div class="md:w-1/2 transition-all duration-1000 delay-300" class:translate-x-0={visible} class:translate-x-16={!visible} class:opacity-100={visible} class:opacity-0={!visible}>
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">Professional Background</h3>
        <p class="mb-6 text-gray-700">
          Dr. Gasah A is a distinguished pediatric hematology oncologist specializing in childhood blood cancers and neuroblastoma. With years of dedicated training and clinical practice, he has established himself as a leading expert in Ethiopia's medical community.
        </p>
        <p class="mb-6 text-gray-700">
          Dr. Gasah divides his time between Black Lion Hospital, where he serves as a senior consultant, and Betzata Private Clinic, where he provides specialized care in a private setting. His dual role allows him to serve patients across different socioeconomic backgrounds.
        </p>
        
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">Education & Expertise</h3>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Specialized training in pediatric hematology and oncology</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Active researcher in childhood blood cancers and neuroblastoma</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Contributor to international medical journals and conferences</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Advocate for improved pediatric cancer care in Ethiopia</span>
          </li>
        </ul>
        
        <a href="#contact" class="btn btn-primary">Schedule a Consultation</a>
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
