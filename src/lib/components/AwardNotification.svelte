<script>
  import { onMount } from 'svelte';
  let show = false;
  
  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 1000);
    
    setTimeout(() => {
      show = false;
    }, 7000);
  });
</script>

<div 
  class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
  class:pointer-events-none={!show}
  class:opacity-0={!show}
  class:translate-y-[-1rem]={!show}
  style="transition: all 0.5s ease-in-out;"
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"
       class:opacity-0={!show}
       style="transition: opacity 0.5s ease-in-out;"></div>
  
  <div class="relative bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto transform transition-all duration-500 focus:outline-none"
       class:scale-95={!show}
       class:opacity-0={!show}
  >
    <!-- Close Button -->
    <button
      class="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center z-10"
      aria-label="Close"
      on:click={() => show = false}
      tabindex="0"
    >
      &times; 
    </button>
    <div class="p-3 sm:p-6">
      <!-- Award Badge -->
      <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 sm:-top-12">
        <div class="bg-blue-600 rounded-full p-2 sm:p-3 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
      </div>
      
      <div class="text-center pt-10 sm:pt-12">
        <h3 class="text-lg sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">
          Dr. Gashaw Arega – (ESHO) Best Research Award Winner
        </h3>
        
        <div class="flex justify-center mb-4 sm:mb-6">
          <img src="https://gashawarega.com/images/dr-gasah-profile.jpg" alt="Dr. Gashaw receiving award" class="w-full max-w-xs sm:max-w-sm md:w-72 h-auto object-cover rounded-lg shadow-lg" />
        </div>
        
        <div class="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <p class="font-semibold text-base sm:text-lg hidden sm:block">
            Ethiopian Society of Hematology and Oncology (ESHO) Best research award winner is Dr. Gashaw Arega
          </p>
          <p class="hidden sm:block">
            Dr. Gashaw Arega is an Assistant Professor of Pediatrics and Child Health at Tikur Anbessa Specialized Hospital, Addis Ababa University.
          </p>
          <p class="hidden sm:block">
            He is the youngest Pediatrics Hematology and Oncology Senior Fellow at Addis Ababa University.
          </p>
          
          <div class="mt-4 sm:mt-6">
            <a href="https://e-sho.org/dr-gashaw-arega-esho-best-research-award-winner/" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
              <span>Read More</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
