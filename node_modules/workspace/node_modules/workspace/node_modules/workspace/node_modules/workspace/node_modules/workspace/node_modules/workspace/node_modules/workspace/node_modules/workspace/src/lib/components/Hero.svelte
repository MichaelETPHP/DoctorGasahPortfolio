<script>
  import { onMount } from 'svelte';
  
  let ready = false;
  
  onMount(() => {
    ready = true;
  });
</script>

<section id="home" class="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
  <div class="absolute inset-0 bg-blue-900 opacity-80"></div>
  
  <div class="container-custom relative z-10 flex flex-col-reverse md:flex-row items-center">
    <div class="md:w-1/2 pt-8 md:pt-0 md:pr-10 animate-fade-in-up" class:opacity-0={!ready} class:opacity-100={ready}>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Dr. Gashaw A
      </h1>
      <h2 class="text-2xl md:text-3xl font-medium text-blue-200 mb-6">
      MD, MPH | Specialist in Pediatrics & Child Health
      </h2>
      <p class="text-lg md:text-xl mb-8 text-blue-100 max-w-xl">
        Dedicated to advancing care and research in pediatric blood cancers and neuroblastoma in Ethiopia.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="#contact" class="btn btn-primary bg-white text-blue-900 hover:bg-blue-50">
          Book Appointment
        </a>
        <a href="#about" class="btn btn-outline border-white text-white hover:bg-blue-800">
          Learn More
        </a>
      </div>
    </div>
    
    <div class="md:w-1/2 flex justify-center">
      <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-all duration-700 hover:scale-105" class:opacity-0={!ready} class:opacity-100={ready}>
        <img 
          src="/doctor-profile.jpg" 
          alt="Dr. Gashaw A, Pediatric Hematology Oncologist" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
    <a href="#about" class="text-white" aria-label="Scroll to About section">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </div>
</section>

<style>
  .animate-fade-in-up {
    transition: opacity 1s ease-out, transform 1s ease-out;
    transform: translateY(20px);
  }
  
  .opacity-0 {
    opacity: 0;
  }
  
  .opacity-100 {
    opacity: 1;
    transform: translateY(0);
  }
  
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    50% {
      transform: translateY(-20px) translateX(-50%);
    }
  }
</style>
