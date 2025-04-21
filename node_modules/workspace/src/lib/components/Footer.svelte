
<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8 overflow-hidden">
  <!-- Medical Background Pattern -->
  <div class="absolute inset-0 opacity-5">
    <div class="grid grid-cols-6 gap-4">
      {#each Array(24) as _}
        <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L8 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H8L12 22L16 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H16L12 2Z"/>
        </svg>
      {/each}
    </div>
  </div>

  <div class="container-custom relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Brand & Social -->
      <div class="space-y-6">
        <div>
          <h3 class="text-2xl font-bold mb-6">Dr. Gasah A</h3>
          <p class="text-blue-200 mb-6 max-w-sm">
            Dedicated to advancing pediatric hematology and oncology care in Ethiopia through clinical excellence and innovative research.
          </p>
        </div>
        <div class="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
             class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#contact" 
             class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-xl font-semibold mb-6">Quick Links</h4>
        <ul class="space-y-3">
          {#each ['About', 'Services', 'Research', 'Locations', 'Contact'] as link}
            <li>
              <a href="#{link.toLowerCase()}" 
                 class="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white transition-colors"></span>
                {link}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Office Hours -->
      <div>
        <h4 class="text-xl font-semibold mb-6">Office Hours</h4>
        <div class="space-y-4">
          <div class="bg-white/5 rounded-lg p-4">
            <h5 class="text-blue-300 font-medium mb-2">Black Lion Hospital</h5>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>Monday, Wednesday, Friday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-lg p-4">
            <h5 class="text-blue-300 font-medium mb-2">Betzata Private Clinic</h5>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>Tuesday, Thursday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div class="flex justify-between text-blue-200">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="mt-12 pt-8 border-t border-white/10">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
        <p>&copy; {currentYear} Dr. Gasah A. All rights reserved.</p>
        <p class="flex items-center gap-2">
          Made with 
          <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          by <a href="#" class="text-white hover:text-blue-300 transition-colors">Z Michael</a>
        </p>
      </div>
    </div>
  </div>
</footer>
