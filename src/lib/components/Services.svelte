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
    checkVisibility(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  });
  
  const services = [
    {
      icon: 'icon-treatment',
      title: 'Pediatric Hematology',
      description: 'Diagnosis and treatment of blood disorders in children including anemia, hemophilia, and other bleeding disorders.'
    },
    {
      icon: 'icon-treatment',
      title: 'Pediatric Oncology',
      description: 'Specialized treatment of various childhood cancers with focus on personalized care and evidence-based protocols.'
    },
    {
      icon: 'icon-research',
      title: 'Blood Cancer Treatment',
      description: 'Expert management of leukemia, lymphoma, and other blood-related cancers specific to pediatric patients.'
    },
    {
      icon: 'icon-research',
      title: 'Neuroblastoma Care',
      description: 'Advanced diagnostic and treatment approaches for neuroblastoma, including integration with international treatment protocols.'
    },
    {
      icon: 'icon-consultation',
      title: 'Patient Consultations',
      description: 'Comprehensive evaluations and second opinions for complex hematological and oncological conditions.'
    },
    {
      icon: 'icon-support',
      title: 'Family Support & Education',
      description: 'Guidance and resources for families navigating pediatric cancer diagnosis, treatment, and survivorship.'
    }
  ];
</script>

<section id="services" class="section bg-blue-50">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title relative inline-block">
        Services & Specialties
        <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span>
      </h2>
      <p class="section-subtitle mx-auto">
        Specialized care for children with blood disorders and cancer
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service, index}
        <div 
          class="card hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2"
          class:opacity-0={!visible}
          class:opacity-100={visible}
          style="transition-delay: {index * 100}ms"
        >
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 mx-auto">
            <svg class="h-10 w-10">
              <use href="/images/service-icons.svg#{service.icon}"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-blue-900 text-center mb-4">{service.title}</h3>
          <p class="text-gray-600 text-center">{service.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-16 text-center">
      <a href="#contact" class="btn btn-primary flex items-center justify-center mx-auto">
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
