
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
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/gashaw-arega-4083011b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" 
             class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          
          <!-- Facebook -->
          <a href="https://www.facebook.com/share/177MrEtGj1/" target="_blank" rel="noopener noreferrer" 
             class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <!-- TikTok (open exact page) -->
          <a 
            href="https://www.tiktok.com/@dr.gashaw.arega?_t=ZM-90LxPyDQo4u&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
            aria-label="Open TikTok profile"
          >
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          
          <!-- Telegram -->
          <a href="https://t.me/DrGashawArega" target="_blank" rel="noopener noreferrer" 
             class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-blue-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
