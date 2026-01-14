<template>
  <div class="relative w-full overflow-hidden h-screen bg-black">
    <video ref="heroVideo" width="100%" height="100%"
      class="absolute w-full h-full object-cover left-0 top-0 scale-105 high-quality-video" autoplay muted loop
      playsinline preload="auto" poster="/caramoan-poster.jpg">
      <source src="/video/caramoan4k.webm" type="video/webm" />
    </video>

    <div
      class="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
    </div>

    <div class="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-6">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        <div class="flex flex-col items-center">
          <h1
            class="font-island font-bold text-green text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none drop-shadow-2xl animate-fade-in-up">
            CARAMOAN
          </h1>
          <h2
            class="z-10 -mt-2 sm:-mt-6 md:-mt-10 text-white text-[1.2rem] sm:text-[2rem] md:text-[3rem] font-light tracking-[0.2em] md:tracking-[0.4em] uppercase drop-shadow-md">
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
          <router-link to="/explore"
            class="bg-green text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-ocean transition-all duration-300 shadow-xl">
            Explore Islands
          </router-link>
          <router-link to="/contact"
            class="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-300">
            Book a Tour
          </router-link>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-20"></div>

    <div class="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-50 hidden sm:block">
      <div class="w-px h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
    </div>

    <footer class="absolute bottom-0 w-full z-40 py-6 md:py-8 flex justify-center items-center">
      <div class="text-center px-4">
        <p class="text-[10px] md:text-xs text-white/60 tracking-widest uppercase">
          © {{ new Date().getFullYear() }} CaramoanIslands.ph • Sanctuarium Naturae
        </p>
      </div>

      <div class="absolute right-6 md:right-6 bottom-12 md:bottom-6 z-50">
        <div class="relative group flex flex-col items-end">
          <div
            class="opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out pb-4">
            <div class="w-64 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <p class="text-[10px] uppercase tracking-tighter text-white/50 mb-1">Cinematography by</p>
              <p class="text-white font-bold text-sm mb-2">Jeffrey Michael Fernandez</p>
              <a href="https://www.youtube.com/watch?v=zUbgSjkyaC4" target="_blank"
                class="text-green text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Watch Original 4K
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
          <button
            class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
            <span class="font-serif italic text-sm leading-none">?</span>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.high-quality-video {
  pointer-events: none;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  video-rendering: optimizeQuality;
  filter: brightness(0.85) contrast(1.15) saturate(1.1);
  will-change: transform;
}

h1,
h2,
p {
  text-wrap: balance;
}

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
</style>