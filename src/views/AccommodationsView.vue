<script setup>
import { ref } from 'vue'
import caramoanStay from '@/data/caramoanStays.json'

const caramoanStays = ref(caramoanStay)
</script>

<template>
  <section v-if="caramoanStays" class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24 max-w-7xl">
    
    <header class="text-center mb-10 md:mb-16">
      <h1 class="font-island text-[3rem] sm:text-[4.5rem] md:text-[6rem] text-green leading-none mb-4">
        {{ caramoanStays.title }}
      </h1>
      <p class="text-base md:text-xl text-ocean/70 max-w-2xl mx-auto leading-relaxed px-2">
        {{ caramoanStays.description }}
      </p>
    </header>

    <div class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="platform in caramoanStays.platforms"
        :key="platform.name"
        :href="platform.url"
        target="_blank"
        rel="noopener noreferrer"
        class="glass-card group flex flex-col rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-ocean/5"
      >
        <div class="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/3] overflow-hidden">
          <img
            :src="platform.image.url"
            :alt="platform.image.alt"
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <h3 class="absolute bottom-6 left-6 text-2xl md:text-3xl font-black text-white drop-shadow-lg uppercase tracking-tighter">
            {{ platform.name }}
          </h3>
        </div>

        <div class="p-6 md:p-8 flex flex-col flex-grow bg-white/40 backdrop-blur-md">
          <p class="text-ocean/70 text-sm md:text-base mb-6 leading-relaxed flex-grow italic">
            "{{ platform.description }}"
          </p>
          <div class="mt-auto">
            <span class="inline-flex items-center justify-center w-full bg-ocean text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest group-hover:bg-green transition-colors shadow-lg shadow-ocean/10">
              {{ platform.button_text }}
            </span>
          </div>
        </div>
      </a>
    </div>

    <aside class="mt-16 md:mt-24 max-w-4xl mx-auto bg-ocean rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
      <div class="relative z-10">
        <div class="flex items-center justify-center gap-3 mb-8">
          <div class="h-px w-8 md:w-12 bg-green"></div>
          <h2 class="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-green text-center">
            {{ caramoanStays.tips.title }}
          </h2>
          <div class="h-px w-8 md:w-12 bg-green"></div>
        </div>
        
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <li v-for="(tip, index) in caramoanStays.tips.items" :key="index" 
            class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <span class="text-green text-xl mt-0.5 shrink-0">✔</span>
            <span class="text-sm md:text-base font-medium leading-relaxed opacity-90">{{ tip }}</span>
          </li>
        </ul>
      </div>
      
      <div class="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
    </aside>
  </section>

  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-ocean/40 px-4 text-center">
    <div class="animate-spin rounded-full h-12 w-12 border-4 border-green border-t-transparent"></div>
    <p class="font-bold uppercase tracking-widest text-xs">Finding your stay in Caramoan...</p>
  </div>
</template>

<style scoped>
.glass-card {
  /* Using Tailwind's glass logic, but ensuring Safari compatibility */
  -webkit-backdrop-filter: blur(12px);
}

/* Fluid image reveal on mobile */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.glass-card {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>