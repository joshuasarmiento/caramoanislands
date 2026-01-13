<template>
  <footer class="mt-auto pt-12 md:pt-20 pb-8 border-t border-ocean/10 bg-white/80 backdrop-blur-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        <div class="space-y-5 text-center sm:text-left">
          <h2 class="font-island text-4xl md:text-5xl text-green leading-none">
            CaramoanIslands.ph
          </h2>
          <p class="text-sm text-ocean/70 leading-relaxed max-w-xs mx-auto sm:mx-0">
            A personal, local project dedicated to promoting responsible tourism in the Caramoan Peninsula.
          </p>
          <div class="pt-2">
            <span class="inline-block px-3 py-1 rounded-full bg-green/10 text-green text-[10px] font-black uppercase tracking-widest">
              Est. 2026 Season
            </span>
          </div>
        </div>

        <div class="text-center sm:text-left">
          <h4 class="font-black text-ocean uppercase tracking-[0.2em] text-[10px] mb-6 opacity-50">Navigation</h4>
          <ul class="space-y-4 text-sm font-bold">
            <li><router-link to="/" class="text-ocean/70 hover:text-green transition-colors block py-1">Home</router-link></li>
            <li><router-link to="/explore" class="text-ocean/70 hover:text-green transition-colors block py-1">Explore Islands</router-link></li>
            <li><router-link to="/how-to-get-there" class="text-ocean/70 hover:text-green transition-colors block py-1">Travel Guide</router-link></li>
            <li><router-link to="/contact" class="text-ocean/70 hover:text-green transition-colors block py-1">Contact Us</router-link></li>
          </ul>
        </div>

        <div class="text-center sm:text-left">
          <h4 class="font-black text-ocean uppercase tracking-[0.2em] text-[10px] mb-6 opacity-50">Community</h4>
          <ul class="space-y-4 text-sm font-bold">
            <li>
              <button @click="togglePartner" class="text-green hover:text-ocean transition-all block w-full sm:w-auto py-1 flex items-center justify-center sm:justify-start gap-2">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                </span>
                Join the Directory
              </button>
            </li>
            <li>
              <button @click="toggleAbout" class="text-ocean/70 hover:text-green transition-colors block w-full sm:w-auto py-1">
                About this Project
              </button>
            </li>
            <li>
              <button @click="toggleDisclaimer" class="text-ocean/70 hover:text-green transition-colors block w-full sm:w-auto py-1">
                Legal & Copyright
              </button>
            </li>
          </ul>
        </div>

        <div class="space-y-6 text-center sm:text-left">
          <h4 class="font-black text-ocean uppercase tracking-[0.2em] text-[10px] mb-2 opacity-50">Official Links</h4>
          <div class="flex flex-col items-center sm:items-start gap-4">
            <a href="mailto:caramoanislands@duck.com" class="flex items-center gap-3 text-sm font-bold text-ocean/80 hover:text-green transition-all group">
              <div class="p-2 rounded-lg bg-ocean/5 group-hover:bg-green/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span>Email Admin</span>
            </a>
            <a href="https://www.facebook.com/lgucaramoancamsur" target="_blank" class="flex items-center gap-3 text-sm font-bold text-ocean/80 hover:text-green transition-all group">
              <div class="p-2 rounded-lg bg-ocean/5 group-hover:bg-green/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <span>LGU Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-ocean/5 text-center space-y-2">
        <p class="text-[10px] md:text-xs text-ocean/40 font-bold uppercase tracking-widest">
          Handcrafted by locals in the Bicol Peninsula
        </p>
        <p class="text-[10px] text-ocean/30 uppercase tracking-tighter">
          © {{ new Date().getFullYear() }} CaramoanIslands.ph
        </p>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isAboutOpen || isDisclaimerOpen || isPartnerOpen" class="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ocean/90 backdrop-blur-sm" @click.self="closeAllModals">
          
          <div class="bg-white w-full max-w-2xl rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-slide-up">
            
            <div class="px-8 py-6 flex justify-between items-center border-b border-ocean/5">
              <h2 class="text-xl md:text-2xl font-black text-ocean">
                {{ isAboutOpen ? 'Our Mission' : isPartnerOpen ? 'Community & Contributions' : 'Legal & Disclaimer' }}
              </h2>
              <button @click="closeAllModals" class="p-2 rounded-full hover:bg-ocean/5 transition-colors text-ocean">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div class="p-8 overflow-y-auto text-ocean/70 space-y-6 leading-relaxed">
              
              <template v-if="isPartnerOpen">
                <div class="space-y-6">
                  <div>
                    <p class="text-lg text-ocean font-bold mb-4">Want to be included?</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="p-5 rounded-2xl bg-green/5 border border-green/10">
                        <p class="font-bold text-ocean flex items-center gap-2"><span>🏪</span> Businesses</p>
                        <p class="text-xs mt-2">Get your resort or tour agency listed in our 2026 directory.</p>
                      </div>
                      <div class="p-5 rounded-2xl bg-ocean/5 border border-ocean/10">
                        <p class="font-bold text-ocean flex items-center gap-2"><span>📸</span> Creators</p>
                        <p class="text-xs mt-2">Share your photography or blogs to be featured with credit.</p>
                      </div>
                    </div>
                  </div>

                  <div class="pt-6 border-t border-ocean/5">
                    <p class="text-lg text-ocean font-bold mb-2">Spot an error?</p>
                    <p class="text-sm mb-4">Transit schedules change, and prices fluctuate. If you see outdated info or a broken link, please let us know so we can keep the community informed.</p>
                    
                    <div class="p-5 rounded-2xl bg-orange-50 border border-orange-100 flex items-start gap-4">
                      <span class="text-xl">🛠️</span>
                      <div>
                        <p class="font-bold text-orange-900">Request a Correction</p>
                        <p class="text-xs text-orange-800">Please include the page URL and the correct information in your email.</p>
                      </div>
                    </div>
                  </div>

                  <div class="bg-ocean p-6 rounded-2xl text-center">
                    <p class="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Send details to</p>
                    <a href="mailto:caramoanislands@duck.com" class="text-green font-black text-lg hover:text-white transition-colors underline underline-offset-4">caramoanislands@duck.com</a>
                  </div>
                </div>
              </template>

              <template v-if="isAboutOpen">
                <p class="text-lg text-ocean font-bold">Salamat for visiting!</p>
                <p>I’m a local developer who grew up with the limestone cliffs of Caramoan as my backyard. This site is my contribution to ensuring our tourism stays sustainable.</p>
                <p class="text-sm italic">This is a non-profit, independent guide designed to support the local economy of the peninsula.</p>
              </template>

              <template v-if="isDisclaimerOpen">
                <div class="space-y-6">
                  <div class="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                    <h4 class="text-orange-900 font-black text-sm uppercase tracking-widest mb-2">Photo Copyright</h4>
                    <p class="text-sm text-orange-800">Media featured here is curated to promote Caramoan. If you own any image and wish for removal, email us for a <span class="font-bold underline">24-hour takedown</span>.</p>
                  </div>
                  <p class="text-sm"><strong class="text-ocean">Data Accuracy:</strong> Schedules and fees are subject to change by the LGU. Always verify upon arrival.</p>
                </div>
              </template>
            </div>

            <div class="p-6 sm:p-8 bg-gray-50 flex justify-end">
              <button @click="closeAllModals" class="w-full sm:w-auto px-10 py-4 bg-ocean text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green transition-all shadow-xl shadow-ocean/10">
                Got it
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const isDisclaimerOpen = ref(false)
const isAboutOpen = ref(false)
const isPartnerOpen = ref(false) // State for new modal

const handleScrollLock = (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto'
}

const toggleDisclaimer = () => {
  isDisclaimerOpen.value = !isDisclaimerOpen.value
  handleScrollLock(isDisclaimerOpen.value)
}

const toggleAbout = () => {
  isAboutOpen.value = !isAboutOpen.value
  handleScrollLock(isAboutOpen.value)
}

const togglePartner = () => {
  isPartnerOpen.value = !isPartnerOpen.value
  handleScrollLock(isPartnerOpen.value)
}

const closeAllModals = () => {
  isAboutOpen.value = false
  isDisclaimerOpen.value = false
  isPartnerOpen.value = false
  handleScrollLock(false)
}
</script>

<style scoped>
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.4s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@media (max-width: 640px) {
  .animate-slide-up {
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
}
</style>