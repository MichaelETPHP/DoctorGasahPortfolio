<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  let name = '';
  let email = '';
  let phone = '';
  let message = '';
  let formSubmitted = false;
  let formError = false;
  
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
</script>

<section id="contact" class="section bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="section-title">Contact Dr. Gasah</h2>
      <p class="section-subtitle mx-auto">
        Get in touch to schedule an appointment or inquire about consultations
      </p>
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
        </div>
      </div>
      
      <div 
        class="lg:w-1/2 transition-all duration-700 delay-300" 
        class:opacity-0={!visible}
        class:opacity-100={visible}
      >
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
                  class="input"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={email} 
                  class="input"
                  required
                />
              </div>
              
              <div>
                <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  bind:value={phone} 
                  class="input"
                />
              </div>
              
              <div>
                <label for="message" class="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea 
                  id="message" 
                  bind:value={message} 
                  rows="4" 
                  class="input resize-none"
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
