<script setup>
import { ref } from 'vue'
import faqsData from '@/data/faqs.json' 

const faqs = ref(faqsData)
</script>

<template>
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24 max-w-5xl mx-auto">
    
    <header class="text-center mb-12 md:mb-20">
      <h1 class="font-island text-[3rem] sm:text-[4.5rem] md:text-[6.5rem] text-green leading-none mb-4 drop-shadow-sm">
        Common Questions
      </h1>
      <p class="text-ocean/70 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
        Everything you need to know about the Peninsula for your 2026 adventure. 
        Can't find an answer? Feel free to reach out to our team.
      </p>
    </header>

    <div class="space-y-4 md:space-y-6 mb-24">
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        class="group bg-white rounded-2xl md:rounded-3xl border border-ocean/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-green/20 overflow-hidden"
      >
        <summary
          class="p-5 md:p-8 text-ocean font-black text-base md:text-xl cursor-pointer flex justify-between items-center gap-4 list-none transition-all hover:bg-green/5 select-none"
        >
          <span class="leading-tight">{{ faq.question }}</span>
          
          <div class="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-ocean/5 flex items-center justify-center group-open:bg-green group-open:text-white transition-all duration-300">
            <svg
              class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>

        <div class="px-5 pb-6 md:px-8 md:pb-10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div class="h-px w-full bg-ocean/5 mb-6 md:mb-8"></div>
          <div 
            class="prose prose-sm md:prose-base max-w-none text-ocean/70 leading-relaxed font-medium faq-answer"
            v-html="faq.answer"
          ></div>
        </div>
      </details>
    </div>

    <div class="text-center bg-green/5 rounded-[2.5rem] p-8 md:p-12 border border-green/10">
      <h2 class="text-2xl font-black text-ocean mb-3">Still have questions?</h2>
      <p class="text-ocean/60 text-sm md:text-base mb-8">We're here to help you plan the perfect Caramoan trip.</p>
      <router-link to="/contact" class="inline-flex items-center gap-2 bg-ocean text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green transition-all shadow-xl shadow-ocean/10">
        Contact Support →
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Remove default arrow in Firefox/Safari */
summary::-webkit-details-marker {
  display: none;
}
summary {
  display: flex;
}

/* Fluid Answer Styles: Ensure links and lists inside v-html look good */
.faq-answer :deep(a) {
  color: #5f663f; /* green brand color */
  text-decoration: underline;
  font-weight: 700;
}

.faq-answer :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.faq-answer :deep(li) {
  margin-bottom: 0.5rem;
}

/* Animation for the open state */
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

details[open] .animate-in {
  animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>