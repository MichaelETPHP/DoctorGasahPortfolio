<script>
  import { onMount } from 'svelte';
  import BookingForm from './BookingForm.svelte';
  
  let visible = false;
  let name = '';
  let email = '';
  let phone = '';
  let message = '';
  let formSubmitted = false;
  let formError = false;
  
  // Tab states
  let activeTab = 'contact'; // 'contact' or 'booking'
  
  function checkVisibility() {
    const element = document.getElementById('contact');
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
  
  function handleSubmit(event) {
    event.preventDefault();
    
    // Validate form
    if (!name || !email || !message) {
      formError = true;
      return;
    }
    
    // In a real application, we would send the form data to a server
    // For now, we'll just simulate a successful submission
    formSubmitted = true;
    formError = false;
    
    // Reset form after submission
    name = '';
    email = '';
    phone = '';
    message = '';
  }
  
  function setActiveTab(tab) {
    activeTab = tab;
  }
</script>

<section id="contact" class="section bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title">Contact Dr. Gasah</h2>
      <p class="section-subtitle mx-auto">
        Get in touch to schedule an appointment or inquire about consultations
      </p>
    </div>
    
    <!-- Tabs -->
    <div class="flex justify-center mb-8">
      <div class="inline-flex bg-gray-100 rounded-full p-1">
        <button 
          class="px-6 py-2 rounded-full transition-colors {activeTab === 'contact' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}"
          on:click={() => setActiveTab('contact')}
        >
          Contact Info
        </button>
        <button 
          class="px-6 py-2 rounded-full transition-colors {activeTab === 'booking' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:text-blue-600'}"
          on:click={() => setActiveTab('booking')}
        >
          Book Appointment
        </button>
      </div>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-12">
      <div 
        class="lg:w-1/2 transition-all duration-700" 
        class:opacity-0={!visible}
        class:opacity-100={visible}
      >
        <div class="bg-blue-50 p-8 rounded-lg shadow-sm">
          <h3 class="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="feather h-5 w-5">
                  <use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#phone"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-blue-900">Phone</h4>
                <p class="text-gray-700">+251 91 234 5678</p>
                <p class="text-gray-500 text-sm">Monday to Friday, 9AM-5PM</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="feather h-5 w-5">
                  <use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#mail"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-blue-900">Email</h4>
                <p class="text-gray-700">dr.gasah@example.com</p>
                <p class="text-gray-500 text-sm">For appointments and inquiries</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="feather h-5 w-5">
                  <use href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather-sprite.svg#clock"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-blue-900">Working Hours</h4>
                <p class="text-gray-700">Black Lion Hospital: Mon, Wed, Fri (8AM-4PM)</p>
                <p class="text-gray-700">Betzata Clinic: Tue, Thu (9AM-6PM), Sat (9AM-1PM)</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8 pt-8 border-t border-blue-100">
            <h4 class="text-lg font-medium text-blue-900 mb-4">Emergency Contact</h4>
            <p class="text-gray-700">
              For urgent medical matters, please contact the emergency department at Black Lion Hospital: +251 11 551 3456
            </p>
          </div>
          
          <!-- Social Media Links -->
          <div class="mt-8 pt-8 border-t border-blue-100">
            <h4 class="text-lg font-medium text-blue-900 mb-4">Connect with Dr. Gasah</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-blue-700 hover:text-blue-900 transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="text-blue-700 hover:text-blue-900 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.09 10.09 0 01-3.13 1.19 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="text-blue-700 hover:text-blue-900 transition-colors" aria-label="ResearchGate">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.586 0H4.414C1.973 0 0 1.973 0 4.414v15.173C0 22.027 1.973 24 4.414 24h15.173C22.027 24 24 22.027 24 19.586V4.414C24 1.973 22.027 0 19.586 0zM12.569 8.104c.871 0 1.458-.586 1.458-1.428s-.587-1.423-1.458-1.423c-.87 0-1.454.582-1.454 1.423s.584 1.428 1.454 1.428zm2.98 9.144c-1.941 0-3.105-1.36-3.105-3.752V9.062h1.305v4.377c0 1.659.807 2.569 2.152 2.569 1.305 0 2.111-.861 2.111-2.569V9.062h1.348v4.434c0 2.392-1.165 3.752-3.811 3.752z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        class="lg:w-1/2 transition-all duration-700 delay-300" 
        class:opacity-0={!visible}
        class:opacity-100={visible}
      >
        {#if activeTab === 'contact'}
          {#if formSubmitted}
            <div class="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
              <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-green-800 mb-4">Message Sent!</h3>
              <p class="text-green-700 mb-6">
                Thank you for reaching out. Dr. Gasah's office will contact you shortly to confirm your appointment or answer your inquiry.
              </p>
              <button 
                on:click={() => formSubmitted = false} 
                class="btn btn-primary bg-green-600 hover:bg-green-700"
              >
                Send Another Message
              </button>
            </div>
          {:else}
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h3 class="text-2xl font-semibold text-blue-900 mb-6">Send a Message</h3>
              
              {#if formError}
                <div class="bg-red-50 text-red-800 p-4 rounded-md mb-6">
                  Please fill in all required fields.
                </div>
              {/if}
              
              <form on:submit={handleSubmit} class="space-y-6">
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    bind:value={name} 
                    class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    bind:value={email} 
                    class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    bind:value={phone} 
                    class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    bind:value={message} 
                    rows="4" 
                    class="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" class="btn btn-primary w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          {/if}
        {:else if activeTab === 'booking'}
          <BookingForm />
        {/if}
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
