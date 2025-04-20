<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  
  function checkVisibility() {
    const element = document.getElementById('research');
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
  
  const researchAreas = [
    {
      title: "Blood Cancer Research",
      description: "Dr. Gashaw's research on blood cancers focuses on the unique genetic markers and treatment outcomes in Ethiopian children. His work aims to develop protocols optimized for local healthcare resources and genetic profiles.",
      items: [
        "Genetic profiling of pediatric leukemia in Ethiopian populations",
        "Modified treatment protocols adapted to limited-resource settings",
        "Long-term outcomes and survivorship studies"
      ]
    },
    {
      title: "Neuroblastoma Studies",
      description: "As a leading researcher on pediatric neuroblastoma in East Africa, Dr. Gashaw conducts studies on early detection methods, regional prevalence patterns, and optimized treatment approaches.",
      items: [
        "Early detection biomarkers for high-risk populations",
        "Regional epidemiological patterns of neuroblastoma",
        "Multi-modal treatment approaches in resource-constrained settings"
      ]
    }
  ];
</script>

<section id="research" class="section bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title">Research Highlights</h2>
      <p class="section-subtitle mx-auto">
        Advancing pediatric oncology through clinical research and innovation
      </p>
    </div>
    
    <div class="flex flex-col md:flex-row gap-12">
      {#each researchAreas as area, index}
        <div 
          class="md:w-1/2 card bg-gradient-to-br from-blue-50 to-white transition-all duration-700"
          class:opacity-0={!visible}
          class:opacity-100={visible}
          style="transition-delay: {index * 200}ms"
        >
          <h3 class="text-2xl font-semibold text-blue-800 mb-4">{area.title}</h3>
          <p class="text-gray-700 mb-6">{area.description}</p>
          
          <h4 class="text-lg font-medium text-blue-700 mb-3">Key Focus Areas:</h4>
          <ul class="space-y-2 mb-6">
            {#each area.items as item}
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-gray-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    
    <div class="mt-16 bg-blue-50 p-8 rounded-lg shadow-inner" class:opacity-0={!visible} class:opacity-100={visible} style="transition-delay: 400ms">
      <h3 class="text-xl font-semibold text-blue-900 mb-4 text-center">Research Impact</h3>
      <p class="text-gray-700 text-center mb-6">
        Dr. Gashaw's research has contributed to improved survival rates for children with blood cancers in Ethiopia through locally-adapted treatment protocols and enhanced diagnostic approaches.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <span class="text-3xl font-bold text-blue-600">200+</span>
          <span class="text-gray-600">Patients in Clinical Studies</span>
        </div>
        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <span class="text-3xl font-bold text-blue-600">12</span>
          <span class="text-gray-600">Published Research Papers</span>
        </div>
        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
          <span class="text-3xl font-bold text-blue-600">4</span>
          <span class="text-gray-600">International Collaborations</span>
        </div>
      </div>
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
