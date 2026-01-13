<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const dropdownOpen = ref(false)

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileOpen.value = false
})

const mainLinks = [
  { name: 'About', path: '/about' },
  { name: 'Explore', path: '/explore' },
  { name: 'Transit', path: '/how-to-get-there' }, // Shortened for mobile width
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
  <header class="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-6xl">
    
    <nav class="shadow-2xl rounded-full bg-white/80 backdrop-blur-xl border border-white/40 px-4 md:px-8 py-2 md:py-3 flex items-center justify-between transition-all duration-300">
      
      <router-link to="/" class="flex items-center hover:opacity-80 transition-opacity shrink-0">
        <img src="@/assets/caramoanLogo.png" alt="Caramoan" class="h-6 sm:h-8 w-auto">
      </router-link>

      <div class="hidden lg:flex items-center gap-1">
        <router-link
          v-for="link in mainLinks"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-full text-ocean/70 hover:text-green hover:bg-green/5 transition-all text-xs font-black uppercase tracking-widest"
          :class="{ 'text-green bg-green/5': route.path === link.path }"
        >
          {{ link.name }}
        </router-link>

        <div 
          class="relative"
          @mouseenter="dropdownOpen = true"
          @mouseleave="dropdownOpen = false"
        >
          <button 
            class="px-4 py-2 rounded-full text-ocean/70 group-hover:text-green transition-all text-xs font-black uppercase tracking-widest flex items-center gap-1.5 outline-none"
            :class="{ 'text-green': moreLinks.some(l => l.path === route.path) }"
          >
            More
            <svg 
              class="w-3.5 h-3.5 transition-transform duration-300" 
              :class="{ 'rotate-180': dropdownOpen }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition name="fade-down">
            <div 
              v-show="dropdownOpen"
              class="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-2xl rounded-[1.5rem] shadow-2xl py-3 z-50 border border-ocean/5 overflow-hidden"
            >
              <router-link
                v-for="link in moreLinks"
                :key="link.path"
                :to="link.path"
                class="block px-6 py-3 text-xs font-bold text-ocean/60 hover:bg-green/10 hover:text-green transition-all"
                :class="{ 'text-green bg-green/5': route.path === link.path }"
              >
                {{ link.name }}
              </router-link>
            </div>
          </Transition>
        </div>
      </div>

      <button 
        class="lg:hidden p-2.5 rounded-full hover:bg-ocean/5 transition-colors text-ocean" 
        @click="mobileOpen = !mobileOpen"
        aria-label="Menu"
      >
        <div class="w-6 h-5 flex flex-col justify-between items-end relative">
          <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300" :class="{'rotate-45 translate-y-2': mobileOpen}"></span>
          <span class="w-2/3 h-0.5 bg-current rounded-full transition-all duration-300" :class="{'opacity-0': mobileOpen}"></span>
          <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300" :class="{'-rotate-45 -translate-y-2.5': mobileOpen}"></span>
        </div>
      </button>
    </nav>

    <Transition name="slide-fade">
      <div v-if="mobileOpen" class="lg:hidden mt-3 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-ocean/5">
        <div class="p-4 space-y-1 max-h-[75vh] overflow-y-auto">
          <router-link
            v-for="link in mainLinks"
            :key="link.path"
            :to="link.path"
            class="block px-6 py-4 rounded-2xl text-ocean font-black text-xs uppercase tracking-[0.2em] transition-all"
            @click="mobileOpen = false"
            :class="route.path === link.path ? 'bg-green text-white shadow-lg' : 'hover:bg-ocean/5'"
          >
            {{ link.name }}
          </router-link>

          <div class="flex items-center gap-4 py-4 px-4">
            <div class="h-px bg-ocean/5 flex-grow"></div>
            <span class="text-[10px] font-black uppercase tracking-widest text-ocean/20">Extra</span>
            <div class="h-px bg-ocean/5 flex-grow"></div>
          </div>
          
          <div class="grid grid-cols-2 gap-2">
            <router-link
              v-for="link in moreLinks"
              :key="link.path"
              :to="link.path"
              class="px-4 py-4 rounded-2xl text-center text-ocean/60 hover:text-green hover:bg-green/5 transition-all text-[10px] font-bold uppercase tracking-widest border border-ocean/5"
              @click="mobileOpen = false"
              :class="{ 'border-green text-green bg-green/5': route.path === link.path }"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
        
        <div class="bg-ocean p-6 flex justify-between items-center">
          <p class="text-[10px] text-white/40 font-bold tracking-widest uppercase italic">Sanctuarium Naturae</p>
          <div class="flex gap-4">
             <div class="w-2 h-2 rounded-full bg-green animate-pulse"></div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Desktop Dropdown Transition */
.fade-down-enter-active, .fade-down-leave-active {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
.fade-down-enter-from, .fade-down-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

/* Mobile Menu Transition */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Hide scrollbar for cleaner mobile menu */
.overflow-y-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
</style>