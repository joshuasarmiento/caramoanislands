<template>
  <div class="min-h-[100svh] w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 relative overflow-hidden bg-white">
    
    <div class="absolute top-[-10%] right-[-10%] w-64 h-64 bg-green/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-ocean/5 rounded-full blur-3xl"></div>

    <div class="max-w-3xl w-full mx-auto text-center relative z-10">
      
      <div class="mb-8 md:mb-12">
        <div class="relative inline-block p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-green/20 to-ocean/10 backdrop-blur-xl border border-white/50 shadow-2xl animate-float">
          <svg 
            class="w-16 h-16 md:w-24 md:h-24 text-green"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              class="animate-checkmark"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M5 13l4 4L19 7" 
            />
          </svg>
          <div class="absolute top-4 right-4 w-2 h-2 bg-green rounded-full animate-ping"></div>
        </div>
      </div>

      <div class="space-y-4 md:space-y-6 px-2">
        <h1 class="font-island text-[3.5rem] sm:text-[5rem] md:text-[7rem] text-green leading-none drop-shadow-sm">
          Salamat!
        </h1>
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-black text-ocean tracking-tight">
          Message Sent Successfully
        </h2>
        <p class="text-ocean/70 text-base md:text-xl leading-relaxed max-w-xl mx-auto font-medium">
          Naghang salamat! We've received your inquiry. Our team (or the LGU) will review your message and get back to you within <span class="text-green font-bold">24–48 hours</span>.
        </p>
      </div>

      <div class="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
        <router-link
          to="/"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ocean text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green hover:-translate-y-1 transition-all shadow-xl shadow-ocean/20"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </router-link>

        <router-link
          to="/gallery"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border-2 border-ocean/10 text-ocean px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-ocean/5 transition-all"
        >
          Browse Gallery
        </router-link>
      </div>

      <div class="mt-16 md:mt-24 pt-8 border-t border-ocean/5">
        <p class="text-ocean/40 text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <span>🌴</span> Safe Travels & See You Soon <span>🐟</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Floating animation for the success card */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Checkmark draw animation */
.animate-checkmark {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: draw 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards 0.3s;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}

/* Fluid Typography */
h1, h2 {
  text-wrap: balance;
}

/* Height fix for mobile browsers with toolbars */
.min-h-\[100svh\] {
  min-height: 100svh;
}
</style>