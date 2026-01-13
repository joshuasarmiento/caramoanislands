<template>
  <div class="">
    <footer class="mt-auto pt-16 pb-8 border-t border-ocean/10 bg-white/80 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          
          <!-- Column 1: Brand & Description -->
          <div class="space-y-4">
            <h2 class="font-island text-4xl text-green">CaramoanIslands.ph</h2>
            <p class="text-sm text-ocean/70 leading-relaxed">
              A personal, local project dedicated to promoting responsible tourism in the Caramoan Peninsula.
            </p>
            <p class="text-xs text-ocean/60 italic mt-4">
              Handcrafted with love by a Caramoanon developer.
            </p>
          </div>

          <!-- Column 2: Navigation -->
          <div class="space-y-3">
            <h4 class="font-bold text-ocean uppercase tracking-widest text-xs mb-4">Navigation</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/" class="hover:text-[--turquoise] transition-colors">Home</router-link></li>
              <li><router-link to="/explore" class="hover:text-[--turquoise] transition-colors">Explore</router-link></li>
              <li><router-link to="/how-to-get-there" class="hover:text-[--turquoise] transition-colors">Travel Guide</router-link></li>
              <li><router-link to="/contact" class="hover:text-[--turquoise] transition-colors">Contact</router-link></li>
            </ul>
          </div>

          <!-- Column 3: About & Legal -->
          <div class="space-y-3">
            <h4 class="font-bold text-ocean uppercase tracking-widest text-xs mb-4">About & Legal</h4>
            <ul class="space-y-2 text-sm">
              <li><button @click="toggleAbout" class="hover:text-[--turquoise] transition-colors">About this Project</button></li>
              <li><button @click="toggleDisclaimer" class="hover:text-[--turquoise] transition-colors">Legal & Copyright</button></li>
            </ul>
          </div>

          <!-- Column 4: Community & Contact -->
          <div class="space-y-4">
            <h4 class="font-bold text-ocean uppercase tracking-widest text-xs mb-4">Community</h4>
            <div class="flex items-center gap-3 text-sm text-ocean">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>caramoanislands@duck.com</span>
            </div>
            <div class="flex items-center gap-3 text-sm text-ocean">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <a href="https://www.facebook.com/lgucaramoancamsur" target="_blank" class="hover:text-[--turquoise] transition-colors">LGU Caramoan</a>
            </div>
            <p class="text-[10px] text-ocean/50 font-bold uppercase tracking-tighter mt-4">
              Updated for 2026 Season
            </p>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 border-t border-ocean/10 text-center">
          <p class="text-xs text-ocean/60">
            © {{ new Date().getFullYear() }} CaramoanIslands.ph. All rights reserved. Handcrafted in Caramoan.
          </p>
        </div>
      </div>

      <!-- === About Modal === -->
      <Teleport to="body">
        <Transition name="fade">
          <div v-if="isAboutOpen" class="fixed inset-0 z-201 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" @click.self="toggleAbout">
            <div class="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div class="p-6 bg-green text-white flex justify-between items-center">
                <h2 class="text-xl font-bold">Welcome to CaramoanIslands.ph</h2>
                <button @click="toggleAbout" class="text-2xl hover:opacity-70">×</button>
              </div>
              <div class="p-8 overflow-y-auto text-ocean space-y-4 leading-relaxed">
                <p>Welcome! This is an independent guide created by a <strong>Caramoanon developer</strong> who grew up in this beautiful peninsula.</p>
                <p>I’ve seen Caramoan evolve from a quiet secret to a world-class destination. This site isn't run by an agency; it’s one local’s effort to help you experience our home respectfully and responsibly.</p>
                <div class="bg-gray-50 p-6 rounded-2xl border border-ocean/10 mt-4">
                  <p class="font-bold mb-3">Inside this guide:</p>
                  <ul class="list-disc pl-5 space-y-2 text-sm">
                    <li>Up-to-date 2026 travel costs and itineraries</li>
                    <li>Insider tips on local food and family homestays</li>
                    <li>Eco-tourism reminders to protect our reefs</li>
                  </ul>
                </div>
              </div>
              <div class="p-6 border-t text-right">
                <button @click="toggleAbout" class="px-8 py-2 bg-green text-white rounded-xl font-bold transition hover:opacity-90">Close</button>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>

      <!-- === Disclaimer Modal === -->
      <Teleport to="body">
        <Transition name="fade">
          <div v-if="isDisclaimerOpen" class="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" @click.self="toggleDisclaimer">
            <div class="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div class="p-6 bg-green text-white flex justify-between items-center">
                <h2 class="text-xl font-bold">Legal Notice</h2>
                <button @click="toggleDisclaimer" class="text-2xl hover:opacity-70">×</button>
              </div>
              <div class="p-8 overflow-y-auto text-ocean leading-relaxed">
                <section class="mb-6">
                  <h3 class="font-bold text-lg mb-2">1. Information Accuracy</h3>
                  <p class="text-sm text-ocean/80">Travel times, prices, and availability for 2026 are estimates based on local data. Please verify with official providers.</p>
                </section>
                <section class="mb-6 bg-red-50 p-4 rounded-xl border border-red-100 text-red-900">
                  <h3 class="font-bold text-lg mb-2 text-red-800">2. Copyright Claims</h3>
                  <p class="text-sm mb-4">We respect intellectual property. If you own media featured here and want it removed, contact us for a 24-48 hour takedown.</p>
                  <span class="text-sm font-bold">caramoanislands@duck.com</span>
                </section>
                <section>
                  <h3 class="font-bold text-lg mb-2">3. Affiliates</h3>
                  <p class="text-sm text-ocean/80 italic">We are not responsible for transactions handled by third-party booking sites.</p>
                </section>
              </div>
              <div class="p-6 border-t text-right bg-gray-50">
                <button @click="toggleDisclaimer" class="px-8 py-2 bg-green text-white rounded-xl font-bold transition hover:opacity-90">I Understand</button>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDisclaimerOpen = ref(false)
const isAboutOpen = ref(false)

// Shared function to handle body scroll locking
const handleScrollLock = (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else if (!isDisclaimerOpen.value && !isAboutOpen.value) {
    document.body.style.overflow = 'auto'
  }
}

const toggleDisclaimer = () => {
  isDisclaimerOpen.value = !isDisclaimerOpen.value
  handleScrollLock(isDisclaimerOpen.value)
}

const toggleAbout = () => {
  isAboutOpen.value = !isAboutOpen.value
  handleScrollLock(isAboutOpen.value)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>