<script setup>
import { ref } from 'vue'
import faqsData from '@/data/faqs.json' 

const faqs = ref(faqsData)
</script>

<template>
  <div class="container py-12 mt-20">
    <h1 class="font-island text-[4.5rem] md:text-[6rem] text-green text-center mb-4 drop-shadow-md">
      Caramoan FAQs
    </h1>
    <p class="text-center text-ocean/70 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
      Quick answers to the most common questions about visiting Caramoan Peninsula. 
      Information is updated for 2026 based on current transit schedules and local ordinances.
    </p>

    <div class="max-w-4xl mx-auto px-4 space-y-6 mb-20">
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        class="glass rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl group"
      >
        <summary
          class="p-6 bg-linear-to-r from-ocean/5 to-transparent text-ocean font-bold text-lg md:text-xl cursor-pointer flex justify-between items-center hover:bg-ocean/10 transition-colors"
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
        <div class="p-6 md:p-8 text-ocean/85 leading-relaxed bg-white/80">
          <div v-html="faq.answer"></div>
        </div>
      </details>
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
</style>