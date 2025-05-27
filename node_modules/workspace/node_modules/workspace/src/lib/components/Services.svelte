
<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  
  function checkVisibility() {
    const element = document.getElementById('services');
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
  
  const services = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>`,
      title: 'የህፃናት የካንሰር ህክምና | Pediatric Cancer Care',
      description: 'የህጻናት የካንሰር ምርመራ እና ህክምና | Childhood cancer diagnosis & treatment የደም ካንሰር ህክምና እና የማማከር አገልግሎት Blood cancer management & follow-up'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>`,
      title: 'የቅድመና ድኅረ ንቅለ ተከላ አገልግሎት እና የመድኅን ችግር | Transplant & Immunodeficiency Care',
      description: 'የቅድመና ድኅረ ንቅለ ተከላ ምክርና አገልግሎት | Pre- & post-transplant consultation በተፈጥሮ የተከሰተ የሰውነት መድኅን መቀነስ | Primary immunodeficiency diagnosis & management'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>`,
      title: 'የደም ህመሞች ምርመራ እና ህክምና | Blood Disorders Diagnosis & Treatment',
      description: 'የደም ማነስ እና ተዛማች ችግሮች | Anemia & related conditions የመድማትና የመርጋት ህመሞች | Bleeding & thrombosis disorders'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>`,
      title: 'የአጥንት መቅኔ ምርመራ እና የደም ካንሰር ህክምና | Bone Marrow & Blood Cancer Treatment',
      description: 'የአጥንት መቅኔ ላይ ናሙና እና ምርመራ | Bone marrow biopsy & evaluation የመቅኒ መስነፍ ወይም ያለማምረት ችግር | Bone marrow failure syndromes'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`,
      title: 'Patient Consultations',
      description: 'Comprehensive evaluations and second opinions for complex hematological and oncological conditions.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>`,
      title: 'Family Support & Education',
      description: 'Guidance and resources for families navigating pediatric cancer diagnosis, treatment, and survivorship.'
    }
  ];
</script>

<section id="services" class="section bg-gradient-to-b from-blue-50 to-white relative overflow-hidden py-16 md:py-24">
  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="absolute inset-0" style="background-image: url('/images/pattern.svg');"></div>
  </div>
  
  <!-- Decorative Elements -->
  <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
  <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-red-200 opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div>

  <div class="container mx-auto px-4 sm:px-6 relative z-10">
    <div class="text-center mb-12 md:mb-16">
      <div class="inline-block">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block mb-2">
          Services & Specialties 
          <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span>
        </h2>
      </div>
      
      <div class="flex justify-center items-center gap-3 my-6">
        <div class="h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent flex-grow max-w-[100px]"></div>
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <div class="h-px bg-gradient-to-r from-blue-600 via-blue-600 to-transparent flex-grow max-w-[100px]"></div>
      </div>
      
      <p class="text-gray-600 max-w-2xl mx-auto">
        Specialized care for children with blood disorders and cancer, led by Dr. Gasah A.
      </p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {#each services as service, index}
        <div 
          class="card group hover:shadow-xl bg-white rounded-xl p-6 md:p-8 border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
          class:opacity-0={!visible}
          class:opacity-100={visible}
          style="transition-delay: {index * 100}ms"
        >
          <!-- Service Header with Icon -->
          <div class="flex items-center mb-6">
            <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {@html service.icon}
            </div>
            <h3 class="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
          </div>
          
          <!-- Divider -->
          <div class="w-16 h-1 bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 mb-4"></div>
          
          <!-- Description -->
          <p class="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      {/each}
    </div>
    
    <!-- Call to Action -->
    <div class="mt-12 md:mt-16 text-center">
      <a 
        href="#contact" 
        class="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Book an Appointment
      </a>
    </div>
  </div>
</section>

<style>
  .opacity-0 {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .opacity-100 {
    opacity: 1;
    transform: translateY(0);
  }
</style>
