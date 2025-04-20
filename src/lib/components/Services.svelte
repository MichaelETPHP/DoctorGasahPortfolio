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
      <h2 class="section-title">Services & Specialties</h2>
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
            <svg class="feather h-8 w-8">
              <use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#{service.icon}"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-blue-900 text-center mb-4">{service.title}</h3>
          <p class="text-gray-600 text-center">{service.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-16 text-center">
      <a href="#contact" class="btn btn-primary">Book an Appointment</a>
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
