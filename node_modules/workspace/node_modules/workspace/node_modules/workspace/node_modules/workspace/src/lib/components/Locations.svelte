<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  
  function checkVisibility() {
    const element = document.getElementById('locations');
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
  
  const locations = [
    {
      name: "Black Lion Hospital",
      role: "Senior Consultant",
      address: "Churchill Avenue, Addis Ababa, Ethiopia",
      hours: "Monday, Wednesday, Friday: 8:00 AM - 4:00 PM",
      description: "Dr. Gashaw serves as a senior consultant at Black Lion Hospital, Ethiopia's premier referral and teaching hospital. Here, he leads the pediatric hematology-oncology team and supervises complex cases referred from throughout the country.",
      icon: "home"
    },
    {
      name: "Betzata Private Clinic",
      role: "Specialist Consultant",
      address: "Bole Road, Addis Ababa, Ethiopia",
      hours: "Tuesday, Thursday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 1:00 PM",
      description: "At Betzata Private Clinic, Dr. Gashaw provides specialized care in a private setting. The clinic offers personalized attention, shorter waiting times, and continuity of care for patients requiring ongoing treatment.",
      icon: "briefcase"
    }
  ];
</script>

<section id="locations" class="section bg-blue-900 text-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title text-white">Work Locations</h2>
      <p class="section-subtitle text-blue-200 mx-auto">
        Where you can find Dr. Gashaw's clinical practice
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each locations as location, index}
        <div 
          class="bg-blue-800 rounded-lg shadow-lg p-8 hover:bg-blue-700 transition-all duration-300"
          class:opacity-0={!visible}
          class:opacity-100={visible}
          style="transition-delay: {index * 200}ms"
        >
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-4">
              <img src="/images/hospital-icon.svg" alt="Hospital icon" class="w-8 h-8" />
            </div>
            <div>
              <h3 class="text-2xl font-semibold">{location.name}</h3>
              <p class="text-blue-200">{location.role}</p>
            </div>
          </div>
          
          <p class="mb-4 text-blue-100">{location.description}</p>
          
          <div class="mb-4 pt-4 border-t border-blue-700">
            <div class="flex items-start mb-2">
              <svg class="feather h-5 w-5 mr-2 text-blue-300 flex-shrink-0 mt-1">
                <use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#map-pin"/>
              </svg>
              <span>{location.address}</span>
            </div>
            <div class="flex items-start">
              <svg class="feather h-5 w-5 mr-2 text-blue-300 flex-shrink-0 mt-1">
                <use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#clock"/>
              </svg>
              <span>{location.hours}</span>
            </div>
          </div>
          
          <a href="#contact" class="inline-block mt-2 text-blue-200 hover:text-white font-medium transition-colors">
            Book an appointment →
          </a>
        </div>
      {/each}
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
