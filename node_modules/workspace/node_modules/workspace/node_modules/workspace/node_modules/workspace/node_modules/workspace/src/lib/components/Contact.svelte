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
      <h2 class="section-title relative inline-block" id="contactTitle">
        Contact Dr. Gasah
        <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span>
      </h2>
      <p class="section-subtitle mx-auto">
        Get in touch to schedule an appointment or inquire about consultations
      </p>
      <div class="mt-4 bg-blue-50 p-4 rounded-lg inline-block">
        <p class="text-blue-800">
          <span class="font-semibold">📞 Quick Contact:</span> Call +251 91 234 5678 for immediate assistance
        </p>
      </div>
    </div>
    
    <!-- Tabs -->
    <div class="flex justify-center mb-8">
      <div class="inline-flex flex-col sm:flex-row bg-gray-100 rounded-2xl p-1.5 shadow-sm">
        <button 
          class="px-4 sm:px-6 py-3 rounded-xl sm:rounded-full mb-2 sm:mb-0 sm:mr-2 transition-all duration-300 flex items-center justify-center {activeTab === 'contact' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'}"
          on:click={() => setActiveTab('contact')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Contact Info</span>
        </button>
        <button 
          class="px-4 sm:px-6 py-3 rounded-xl sm:rounded-full transition-all duration-300 flex items-center justify-center {activeTab === 'booking' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'}"
          on:click={() => setActiveTab('booking')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-8 md:gap-12">
      <!-- Contact Information Card -->
      <div 
        class="w-full lg:w-1/2 transition-all duration-700" 
        class:opacity-0={!visible}
        class:opacity-100={visible}
      >
        <div class="bg-gradient-to-br from-blue-50 to-blue-50/70 p-6 md:p-8 rounded-2xl shadow-sm border border-blue-100/50 backdrop-blur-sm">
          <div class="flex items-center mb-6">
            <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-semibold text-blue-900 relative">
              Contact Information
              <span class="absolute bottom-0 left-0 w-3/4 h-0.5 bg-blue-600"></span>
            </h3>
          </div>
          
          <div class="space-y-6 md:space-y-8">
            <!-- Phone -->
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-blue-900 mb-1">Phone</h4>
                <a href="tel:+251912345678" class="text-gray-700 font-medium text-lg hover:text-blue-700 transition-colors duration-300">+251 91 234 5678</a>
                <p class="text-gray-500 text-sm mt-1">Monday to Friday, 9AM-5PM</p>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-blue-900 mb-1">Email</h4>
                <a href="mailto:dr.gasah@example.com" class="text-gray-700 font-medium hover:text-blue-700 transition-colors duration-300">dr.gasah@example.com</a>
                <p class="text-gray-500 text-sm mt-1">For appointments and inquiries</p>
              </div>
            </div>
            
            <!-- Working Hours -->
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm transform hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-blue-900 mb-1">Working Hours</h4>
                <div class="bg-white/50 p-3 rounded-lg border border-blue-100/50 mt-2">
                  <p class="text-gray-700 flex items-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Black Lion Hospital: <span class="font-medium">Mon, Wed, Fri (8AM-4PM)</span>
                  </p>
                  <p class="text-gray-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Betzata Clinic: <span class="font-medium">Tue, Thu (9AM-6PM), Sat (9AM-1PM)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Emergency Contact Section -->
          <div class="mt-8 pt-6 border-t border-blue-100">
            <div class="bg-red-50 border border-red-100 rounded-xl p-4 flex items-start">
              <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-medium text-red-800 mb-1">Emergency Contact</h4>
                <p class="text-red-700 text-sm">
                  For urgent medical matters, please contact the emergency department at Black Lion Hospital:
                </p>
                <a href="tel:+251115513456" class="text-red-800 font-medium text-lg block mt-1 hover:text-red-600 transition-colors">
                  +251 11 551 3456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Form Section -->
      <div 
        class="w-full lg:w-1/2 transition-all duration-700 delay-300" 
        class:opacity-0={!visible}
        class:opacity-100={visible}
      >
        {#if activeTab === 'contact'}
          {#if formSubmitted}
            <!-- Success Message -->
            <div class="bg-gradient-to-br from-green-50 to-green-50/70 p-8 rounded-2xl border border-green-200 text-center shadow-sm">
              <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
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
                class="btn btn-primary bg-green-600 hover:bg-green-700 flex items-center justify-center mx-auto shadow-md hover:shadow-lg transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Send Another Message
              </button>
            </div>
          {:else}
            <!-- Contact Form -->
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-xl md:text-2xl font-semibold text-blue-900">Send a Message</h3>
              </div>
              
              {#if formError}
                <div class="bg-red-50 text-red-800 p-4 rounded-md mb-6 border border-red-100">
                  <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Please fill in all required fields.</p>
                  </div>
                </div>
              {/if}
              
              <form on:submit={handleSubmit} class="space-y-5">
                <!-- Name Input -->
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      bind:value={name} 
                      class="input w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <!-- Email Input -->
                <div>
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      bind:value={email} 
                      class="input w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <!-- Phone Input -->
                <div>
                  <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input 
                      type="tel" 
                      id="phone" 
                      bind:value={phone} 
                      class="input w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your phone number (optional)"
                    />
                  </div>
                </div>
                
                <!-- Message Input -->
                <div>
                  <label for="message" class="block text-gray-700 font-medium mb-2">Message *</label>
                  <div class="relative">
                    <textarea 
                      id="message" 
                      bind:value={message} 
                      rows="4" 
                      class="input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      required
                      placeholder="Your message to Dr. Gasah"
                    ></textarea>
                  </div>
                </div>
                
                <!-- Submit Button -->
                <div>
                  <button type="submit" class="btn btn-primary w-full py-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </button>
                </div>
                
                <!-- Policy Note -->
                <p class="text-sm text-gray-500 mt-4">
                  * Required fields. By submitting this form, you agree to our privacy policy and consent to be contacted regarding your inquiry.
                </p>
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
