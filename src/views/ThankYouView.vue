<template>
  <div class="container py-16 mt-20 min-h-screen flex items-center justify-center">
    <div class="max-w-3xl mx-auto text-center px-6">
      <!-- Success Icon / Animation -->
      <div class="mb-10">
        <div class="inline-block p-8 rounded-full bg-[--ocean]/10 backdrop-blur-lg border border-[--ocean]/20 animate-pulse-slow">
          <svg 
            class="w-20 h-20 md:w-24 md:h-24 text-[#737B4C] animate-checkmark"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
      </div>

      <!-- Heading -->
      <h1 class="font-island text-5xl md:text-7xl text-[#737B4C] mb-6 drop-shadow-md">
        Salamat!
      </h1>
      <h2 class="text-3xl md:text-4xl font-bold text-[--ocean] mb-8">
        Your Message Has Been Sent
      </h2>

      <!-- Message -->
      <p class="text-[--ocean]/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
        Daghang salamat sa pag-ugnay sa amin! Natanggap na namin ang iyong mensahe tungkol sa Caramoan Islands. 
        Susubukan naming sagutin ka sa lalong madaling panahon (karaniwang loob ng 24–48 oras).
      </p>

      <!-- Quick Links / Actions -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
        <router-link
          to="/"
          class="inline-flex items-center gap-3 bg-[#737B4C] text-white px-8 py-4 rounded-full font-bold hover:bg-[--ocean-dark] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </router-link>
      </div>

      <!-- Extra reassurance -->
      <p class="text-[--ocean]/70 text-base italic">
        Meanwhile, explore more of Caramoan — safe travels and see you soon! 🌴🐟
      </p>
    </div>
  </div>
</template>

<script setup>
// Optional: small animation class (add to <style> below)
</script>

<style scoped>
/* Gentle pulse for the checkmark circle */
.animate-pulse-slow {
  animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.05); }
}

/* Checkmark draw animation (optional - uncomment if you want it) */
.animate-checkmark {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw 1.2s ease-out forwards 0.5s;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
</style>