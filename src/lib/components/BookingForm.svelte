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
  <h3 class="text-2xl font-semibold text-blue-900 mb-6">Book an Appointment</h3>
  
  {#if status.success}
    <div class="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
      <p class="flex items-center font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        Appointment request received successfully!
      </p>
      <p class="mt-2">We will contact you shortly to confirm your appointment.</p>
      <button 
        class="mt-4 text-blue-600 font-medium hover:text-blue-800"
        on:click={() => status.success = false}
      >
        Book another appointment
      </button>
    </div>
  {:else}
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
        <input 
          type="text" 
          id="patientName" 
          bind:value={form.patientName} 
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter patient's full name"
        />
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-1">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            bind:value={form.email} 
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label for="phone" class="block text-gray-700 font-medium mb-1">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            bind:value={form.phone} 
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      
      <div>
        <label for="service" class="block text-gray-700 font-medium mb-1">Service Type *</label>
        <select 
          id="service" 
          bind:value={form.service} 
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled selected>Select a service</option>
          {#each services as service}
            <option value={service}>{service}</option>
          {/each}
        </select>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="date" class="block text-gray-700 font-medium mb-1">Preferred Date *</label>
          <input 
            type="date" 
            id="date" 
            bind:value={form.date} 
            required
            min={today}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label for="time" class="block text-gray-700 font-medium mb-1">Preferred Time *</label>
          <select 
            id="time" 
            bind:value={form.time} 
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        </div>
      </div>
      
      <div>
        <label for="message" class="block text-gray-700 font-medium mb-1">Additional Information (Optional)</label>
        <textarea 
          id="message" 
          bind:value={form.message} 
          rows="4"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Please share any specific concerns or questions you may have"
        ></textarea>
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
          Request Appointment
        {/if}
      </button>
      
      <p class="text-sm text-gray-500 mt-4">
        * Required fields. Your information will be kept confidential and only used to schedule your appointment.
      </p>
    </form>
  {/if}
</div>