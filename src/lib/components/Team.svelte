<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  
  function checkVisibility() {
    const element = document.getElementById('team');
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
  
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Oncology Specialist",
      bio: "Dr. Johnson specializes in pediatric solid tumors and works closely with Dr. Gasah on complex cases. She has over 10 years of experience in pediatric oncology.",
      image: "/images/team-member1.svg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Hematologist",
      bio: "Dr. Chen is an expert in childhood leukemia and blood disorders. He collaborates with Dr. Gasah on research projects and assists in developing treatment protocols.",
      image: "/images/team-member2.svg"
    },
    {
      name: "Nurse Emma Bekele",
      role: "Oncology Nurse",
      bio: "Nurse Bekele is a dedicated pediatric oncology nurse who provides compassionate care to patients undergoing chemotherapy. She specializes in patient education and supportive care.",
      image: "/images/team-member3.svg"
    }
  ];
</script>

<section id="team" class="section bg-gray-50">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title">Chemotherapy Team</h2>
      <p class="section-subtitle max-w-3xl mx-auto">
        Dr. Gasah works with a dedicated team of specialists to provide comprehensive care for children with cancer.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each team as member, index}
        <div 
          class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          class:opacity-0={!visible}
          class:opacity-100={visible}
          style="transition-delay: {index * 200}ms"
        >
          <img 
            src={member.image} 
            alt={member.name} 
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-blue-900 mb-1">{member.name}</h3>
            <p class="text-blue-600 font-medium mb-3">{member.role}</p>
            <p class="text-gray-600">{member.bio}</p>
          </div>
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