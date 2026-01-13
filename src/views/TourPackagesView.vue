<script setup>
import { ref } from 'vue'
import tourOperatorsData from '@/data/tourOperators.json' // Adjust path if needed (e.g. '../data/tourOperators.json')

const tourOperators = ref(tourOperatorsData)
</script>

<template>
  <div class="container py-12 mt-20">
    <h1 class="font-island text-4xl md:text-7xl font-bold text-center text-[#737B4C] mb-4">
      Caramoan Tour Packages
    </h1>
    <p class="text-center text-[--ocean]/70 text-lg mb-12 max-w-3xl mx-auto">
      Discover the most trusted and popular tour operators in Caramoan. Click any card below to visit their official Facebook page for packages, rates, schedules, and direct booking inquiries.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <a
        v-for="op in tourOperators"
        :key="op.name"
        :href="op.link"
        target="_blank"
        rel="noopener noreferrer"
        class="glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group block"
      >
        <div
          v-if="op.featured"
          class="absolute top-0 right-0 z-10 overflow-hidden w-32 h-32 pointer-events-none"
        >
          <div class="bg-gradient-to-br from-yellow-400 to-amber-600 text-white text-center font-bold py-1 rotate-45 absolute top-8 right-[-28px] w-48 shadow-lg">
            Featured
          </div>
        </div>

        <div class="p-8 text-center">
          <img
            v-if="op.logo"
            :src="op.logo"
            :alt="`${op.name} logo`"
            class="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-[--ocean]/30 shadow-md"
            loading="lazy"
          />
          <h3 class="text-2xl font-bold text-[--ocean] mb-3 group-hover:text-[--turquoise] transition-colors">
            {{ op.name }}
          </h3>
          <!-- <p class="text-[--ocean]/80 mb-4 leading-relaxed">
            {{ op.description }}
          </p> -->
          <div class="inline-block bg-[--ocean]/10 text-[--ocean] px-4 py-1.5 rounded-full text-sm font-medium">
            {{ op.followers }} followers • Message for bookings
          </div>
        </div>
      </a>
    </div>

    <div class="p-8 rounded-3xl mt-12 max-w-4xl mx-auto text-center">
      <h3 class="text-2xl font-bold text-[--ocean] mb-4">Quick Tips</h3>
      <p class="text-[--ocean]/80 mb-4">
        Message operators early (especially for weekends, holidays, or peak season Dec–May). Ask for current rates, inclusions, and availability — most reply quickly on Messenger.
      </p>
      <p class="text-sm text-[--ocean]/60 italic">
        Prices and schedules change seasonally; always confirm directly with the operator.
      </p>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>