<script>
  import { onMount } from 'svelte';
  
  let form = {
    patientName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  };
  
  let status = {
    submitting: false,
    success: false,
    error: null
  };
  
  const services = [
    'Initial Consultation',
    'Follow-up Appointment',
    'Chemotherapy Plan Review',
    'Diagnostic Consultation',
    'Second Opinion'
  ];
  
  // Get today's date in YYYY-MM-DD format for min attribute
  let today = '';
  onMount(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    today = `${year}-${month}-${day}`;
  });
  
  async function handleSubmit() {
    status.submitting = true;
    status.success = false;
    status.error = null;
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        status.success = true;
        // Reset form
        form = {
          patientName: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        };
      } else {
        status.error = result.message || 'An error occurred while processing your request.';
      }
    } catch (error) {
      console.error('Booking form error:', error);
      status.error = 'An unexpected error occurred. Please try again later.';
    } finally {
      status.submitting = false;
    }
  }
</script>

<div class="bg-white rounded-xl shadow-md p-8">
  <h3 class="text-2xl font-semibold text-blue-900 mb-6 relative inline-block">
    Book an Appointment with Dr. Gashaw
    <span class="absolute bottom-0 left-0 w-3/4 h-1 bg-blue-600"></span>
  </h3>
  
  {#if status.success}
    <div class="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
      <p class="flex items-center font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Appointment request received successfully!
      </p>
      <p class="mt-2">We will contact you shortly to confirm your appointment with Dr. Gashaw.</p>
      <button 
        class="mt-4 text-blue-600 font-medium hover:text-blue-800 flex items-center"
        on:click={() => status.success = false}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Book another appointment
      </button>
    </div>
  {:else}
    <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-center">
      <div class="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-4 text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div>
        <h4 class="font-semibold text-blue-900">Dr. Gashaw A</h4>
        <p class="text-sm text-blue-700">Pediatric Hematology Oncologist</p>
      </div>
    </div>

    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      {#if status.error}
        <div class="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
          <p class="flex items-center font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Error
          </p>
          <p class="mt-2">{status.error}</p>
        </div>
      {/if}
      
      <div>
        <label for="patientName" class="block text-gray-700 font-medium mb-1">Patient Name *</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input 
            type="text" 
            id="patientName" 
            bind:value={form.patientName} 
            required
            class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter patient's full name"
          />
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-1">Email Address *</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input 
              type="email" 
              id="email" 
              bind:value={form.email} 
              required
              class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
        
        <div>
          <label for="phone" class="block text-gray-700 font-medium mb-1">Phone Number *</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <input 
              type="tel" 
              id="phone" 
              bind:value={form.phone} 
              required
              class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label for="service" class="block text-gray-700 font-medium mb-1">Service Type *</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <select 
            id="service" 
            bind:value={form.service} 
            required
            class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
          >
            <option value="" disabled selected>Select a service</option>
            {#each services as service}
              <option value={service}>{service}</option>
            {/each}
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="date" class="block text-gray-700 font-medium mb-1">Preferred Date *</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <input 
              type="date" 
              id="date" 
              bind:value={form.date} 
              required
              min={today}
              class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div>
          <label for="time" class="block text-gray-700 font-medium mb-1">Preferred Time *</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <select 
              id="time" 
              bind:value={form.time} 
              required
              class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="" disabled selected>Select a time</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <label for="message" class="block text-gray-700 font-medium mb-1">Additional Information (Optional)</label>
        <div class="relative">
          <textarea 
            id="message" 
            bind:value={form.message} 
            rows="4"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please share any specific concerns or questions you may have"
          ></textarea>
        </div>
      </div>
      
      <button 
        type="submit" 
        class="btn btn-primary w-full py-3 flex justify-center items-center"
        disabled={status.submitting}
      >
        {#if status.submitting}
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Request Appointment
        {/if}
      </button>
      
      <p class="text-sm text-gray-500 mt-4">
        * Required fields. Your information will be kept confidential and only used to schedule your appointment.
      </p>
    </form>
  {/if}
</div>