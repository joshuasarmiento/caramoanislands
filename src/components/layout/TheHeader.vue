<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const dropdownOpen = ref(false)

const mainLinks = [
  { name: 'About', path: '/about' },
  { name: 'Attractions', path: '/attractions' },
  { name: 'How to Get There', path: '/how-to-get-there' },
  { name: 'Contact', path: '/contact' },
]

const moreLinks = [
  { name: 'Accommodations', path: '/accommodations' },
  { name: 'Tour Packages', path: '/tour-packages' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQs', path: '/faqs' }
]
</script>

<template>
  <header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
    <nav class="shadow-lg rounded-full bg-white/90 backdrop-blur-md border border-white/20 px-6 py-2 md:py-3 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center gap-2 shrink-0">
        <img src="@/assets/caramoanLogo.png" alt="Caramoan Logo" class="h-6 w-auto">
      </router-link>

      <div class="hidden md:flex items-center">
        <router-link
          v-for="link in mainLinks"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-full text-[--ocean] hover:text-[--turquoise] hover:bg-[--turquoise]/5 transition-all text-sm font-semibold"
          :class="{ 'text-[--turquoise] bg-[--turquoise]/5': route.path === link.path }"
        >
          {{ link.name }}
        </router-link>

        <div 
          class="relative group"
          @mouseenter="dropdownOpen = true"
          @mouseleave="dropdownOpen = false"
        >
          <button 
            class="px-4 py-2 rounded-full text-[--ocean] group-hover:text-[--turquoise] transition-all text-sm font-semibold flex items-center gap-1"
            :class="{ 'text-[--turquoise]': moreLinks.some(l => l.path === route.path) }"
          >
            More
            <svg 
              class="w-4 h-4 transition-transform duration-200" 
              :class="{ 'rotate-180': dropdownOpen }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition name="fade">
            <div 
              v-show="dropdownOpen"
              class="absolute right-0 mt-1 w-48 glass rounded-2xl shadow-xl py-2 z-50 border border-white/40"
            >
              <router-link
                v-for="link in moreLinks"
                :key="link.path"
                :to="link.path"
                class="block px-5 py-2.5 text-sm text-[--ocean] hover:bg-[--turquoise]/10 hover:text-[--turquoise] transition-colors"
                :class="{ 'text-[--turquoise] font-bold': route.path === link.path }"
                @click="dropdownOpen = false"
              >
                {{ link.name }}
              </router-link>
            </div>
          </Transition>
        </div>
      </div>

      <button 
        class="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors text-[--ocean]" 
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle Menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            :d="mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </nav>

    <Transition name="slide">
      <div v-if="mobileOpen" class="bg-white md:hidden mt-3 rounded-3xl overflow-hidden shadow-2xl border border-white/40">
        <div class="p-4 space-y-1">
          <router-link
            v-for="link in mainLinks"
            :key="link.path"
            :to="link.path"
            class="block px-4 py-3 rounded-xl text-[--ocean] hover:bg-[--turquoise]/5 hover:text-[--turquoise] font-medium"
            @click="mobileOpen = false"
            :class="{ 'bg-[--turquoise]/10 text-[--turquoise]': route.path === link.path }"
          >
            {{ link.name }}
          </router-link>

          <div class="my-2 border-t border-[--ocean]/10"></div>
          
          <p class="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[--ocean]/40">Discover More</p>
          
          <router-link
            v-for="link in moreLinks"
            :key="link.path"
            :to="link.path"
            class="block px-4 py-3 rounded-xl text-[--ocean] hover:bg-[--turquoise]/5 hover:text-[--turquoise]"
            @click="mobileOpen = false"
            :class="{ 'bg-[--turquoise]/10 text-[--turquoise]': route.path === link.path }"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>