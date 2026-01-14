<script setup>
import { ref } from 'vue'
import tourOperatorsData from '@/data/tourOperators.json'

const tourOperators = ref(tourOperatorsData)
</script>

<template>
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24 max-w-7xl mx-auto">
    
    <header class="text-center mb-12 md:mb-20">
      <h1 class="font-island text-[3rem] sm:text-[4.5rem] md:text-[6rem] text-green leading-none mb-4">
        Tour Packages
      </h1>
      <p class="text-base md:text-xl text-ocean/70 max-w-2xl mx-auto leading-relaxed px-2">
        Book directly with the peninsula's most trusted operators. Tap a card to view current island hopping rates and seasonal promos on Facebook.
      </p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
      <a
        v-for="op in tourOperators"
        :key="op.name"
        :href="op.link"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-ocean/5 hover:border-green/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
      >
        <div
          v-if="op.featured"
          class="absolute top-0 right-0 z-10 w-24 h-24 md:w-32 md:h-32 pointer-events-none"
        >
          <div class="bg-orange-400 text-white text-[10px] md:text-xs font-black py-1.5 rotate-45 absolute top-6 right-[-28px] md:top-8 md:right-[-32px] w-40 md:w-48 shadow-lg uppercase tracking-widest">
            Featured
          </div>
        </div>

        <div class="relative mb-6">
          <div class="absolute inset-0 bg-green/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
          <img
            v-if="op.logo"
            :src="op.logo"
            :alt="`${op.name} logo`"
            class="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:rotate-6 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <h3 class="text-xl md:text-2xl font-black text-ocean mb-3 leading-tight group-hover:text-green transition-colors">
          {{ op.name }}
        </h3>
        
        <div class="mt-auto pt-4">
          <div class="inline-flex items-center gap-2 bg-ocean/5 text-ocean/60 px-5 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <span class="w-2 h-2 bg-green rounded-full animate-pulse"></span>
            {{ op.followers }} Followers
          </div>
          
          <p class="mt-6 text-sm font-black text-green uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
            View Packages →
          </p>
        </div>
      </a>
    </div>

    <div class="mt-20 md:mt-32 max-w-4xl mx-auto relative">
      <div class="bg-ocean rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
        <div class="relative z-10 grid md:grid-cols-5 gap-8 items-center">
          <div class="md:col-span-2">
            <h2 class="text-3xl font-black mb-2 text-green leading-none">Quick Tips</h2>
            <p class="text-xs font-bold uppercase tracking-widest opacity-50">Booking Guide 2026</p>
          </div>
          <div class="md:col-span-3 space-y-4">
            <p class="text-sm md:text-base leading-relaxed opacity-90">
              Message operators early for peak season <strong>(Dec–May)</strong>. Most reply within minutes on Messenger. Always confirm inclusion of <strong>Environmental Fees</strong> and <strong>Life Vests</strong>.
            </p>
            <p class="text-[10px] md:text-xs text-green font-bold italic tracking-wide">
              * Rates are subject to seasonal changes. Direct booking ensures the best price.
            </p>
          </div>
        </div>
        <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for fluid header sizing */
h1 {
  text-wrap: balance;
}

/* Custom shadow for the 'glass' effect */
.shadow-sm {
  box-shadow: 0 10px 40px -10px rgba(26, 54, 93, 0.05);
}
</style>