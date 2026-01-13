<template>
  <div class="relative w-full overflow-hidden h-screen bg-black">
    <video 
      width="100%" 
      height="100%" 
      class="absolute w-full h-full object-cover left-0 top-0 scale-105" 
      autoplay 
      muted 
      loop 
      playsinline
    >
      <source src="/video/caramoan4k.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        
        <div class="flex flex-col items-center">
          <h1 class="font-island font-bold text-green text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none drop-shadow-2xl animate-fade-in-up">
            CARAMOAN
          </h1>
          <h2 class="z-10 -mt-2 sm:-mt-6 md:-mt-10 text-white text-[1.2rem] sm:text-[2rem] md:text-[3rem] font-light tracking-[0.2em] md:tracking-[0.4em] uppercase drop-shadow-md">
            Islands <span class="hidden sm:inline">in the</span> Philippines
          </h2>
        </div>

        <div class="w-full max-w-2xl mt-8 md:mt-12 text-white/90">
          <p class="text-sm sm:text-lg md:text-xl leading-relaxed font-medium text-balance">
            From the <span class="text-green font-bold">hidden lagoons</span> of Matukad to the 
            <span class="text-green font-bold">floating cottages</span> of Manlawi, 
            this is a sanctuary where the tide dictates the day.
          </p>
        </div>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <router-link to="/explore" class="bg-green text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-ocean transition-all duration-300 shadow-xl">
            Explore Islands
          </router-link>
          <router-link to="/contact" class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-300">
            Book a Tour
          </router-link>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10"></div>

    <div class="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-50 hidden sm:block">
      <div class="w-px h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
    </div>

    <footer class="absolute bottom-0 w-full z-30 py-6 md:py-8">
      <div class="text-center px-4">
        <p class="text-[10px] md:text-xs text-white/60 tracking-widest uppercase">
          © {{ new Date().getFullYear() }} CaramoanIslands.ph • Sanctuarium Naturae
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Smooth typography balancing */
h1, h2, p {
  text-wrap: balance;
}

/* Custom Animation for Landing */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

/* Ensure video is not interactable but fills container */
video {
  pointer-events: none;
  filter: brightness(0.9) contrast(1.1);
}
</style>