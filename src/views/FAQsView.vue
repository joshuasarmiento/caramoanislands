<script setup>
import { ref } from 'vue'
import faqsData from '@/data/faqs.json' 

const faqs = ref(faqsData)
</script>

<template>
  <div class="container py-12 mt-20">
    <h1 class="font-island text-[4.5rem] md:text-[6rem] text-[#737B4C] text-center mb-4 drop-shadow-md">
      Caramoan FAQs
    </h1>
    <p class="text-center text-[--ocean]/70 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
      Quick answers to the most common questions about visiting Caramoan Peninsula. 
      Information is updated for 2026 based on current transit schedules and local ordinances.
    </p>

    <div class="max-w-4xl mx-auto px-4 space-y-6">
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        class="glass rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl group"
      >
        <summary
          class="p-6 bg-gradient-to-r from-[--ocean]/5 to-transparent text-[--ocean] font-bold text-lg md:text-xl cursor-pointer flex justify-between items-center hover:bg-[--ocean]/10 transition-colors"
        >
          {{ faq.question }}
          <svg
            class="w-6 h-6 transition-transform duration-300 group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div class="p-6 md:p-8 text-[--ocean]/85 leading-relaxed bg-white/80">
          <div v-html="faq.answer"></div>
        </div>
      </details>
    </div>

    <div class="mt-16 p-8 rounded-3xl text-center max-w-3xl mx-auto border border-[--ocean]/20 bg-white/30 backdrop-blur-sm">
      <h3 class="text-2xl font-bold text-[--ocean] mb-6">2026 Travel Cheat Sheet</h3>
      <ul class="space-y-4 text-left text-[--ocean]/80 text-lg">
        <li>✔ Cash is King: ATMs are unreliable; withdraw everything in Naga or Manila.</li>
        <li>✔ Early Start: Boat tours are best started at 6:30 AM to beat the noon heat.</li>
        <li>✔ Connectivity: Download offline maps for the peninsula.</li>
        <li>✔ Survivor Alert: Check with your hotel if any islands are closed for filming.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}

details[open] summary svg {
  transform: rotate(180deg);
}

.glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>