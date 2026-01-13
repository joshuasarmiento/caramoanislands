<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import Glide from '@glidejs/glide'
import accommodations from '@/data/accommodations.json'

const route = useRoute()
const router = useRouter()

const accommodation = accommodations.find(a => a.id === route.params.id)

const goBack = () => router.push('/accommodations') // Adjust route name if needed

onMounted(() => {
  if (accommodation && (accommodation.images?.length || 0) > 1) {
    new Glide('.hero-carousel', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      gap: 0,
      autoplay: 5000,
      hoverpause: true,
      animationDuration: 800,
      animationTimingFunc: 'ease-in-out',
      rewind: true
    }).mount()
  }
})
</script>

<template>
  <div class="container py-12 mt-20">
    <div v-if="accommodation" class="max-w-5xl mx-auto px-4">
      <button 
        @click="goBack"
        class="mb-8 flex items-center gap-2 text-ocean font-medium hover:opacity-70 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Accommodations
      </button>

      <!-- Hero Carousel -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
        <div class="hero-carousel glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li 
                v-for="(imgSrc, index) in (accommodation.images || [accommodation.image])" 
                :key="index" 
                class="glide__slide relative"
              >
                <img 
                  :src="imgSrc" 
                  :alt="`${accommodation.name} - ${index + 1}`"
                  class="w-full h-125 md:h-150 object-cover transition-transform duration-700 hover:scale-105"
                />
              </li>
            </ul>
          </div>

          <div 
            v-if="(accommodation.images || []).length > 1"
            class="glide__arrows absolute inset-0 flex items-center justify-between px-6 pointer-events-none z-10"
            data-glide-el="controls"
          >
            <button class="glide__arrow glide__arrow--left pointer-events-auto w-14 h-14 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center text-ocean hover:bg-white/50 transition-all duration-300 shadow-lg" data-glide-dir="<">←</button>
            <button class="glide__arrow glide__arrow--right pointer-events-auto w-14 h-14 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center text-ocean hover:bg-white/50 transition-all duration-300 shadow-lg" data-glide-dir=">">→</button>
          </div>

          <div 
            v-if="(accommodation.images || []).length > 1"
            class="glide__bullets absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10"
            data-glide-el="controls[nav]"
          >
            <button 
              v-for="(_, index) in accommodation.images" 
              :key="index"
              class="glide__bullet w-3 h-3 rounded-full bg-white/60 hover:bg-white focus:bg-white transition"
              :data-glide-dir="`=${index}`"
            ></button>
          </div>
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none flex flex-col justify-end p-8 md:p-12">
          <div class="flex flex-wrap gap-3 mb-4">
            <span class="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">{{ accommodation.category }}</span>
            <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Accommodation</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white drop-shadow-lg">{{ accommodation.name }}</h1>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-12">
          <section class="prose prose-lg max-w-none text-ocean">
            <h2 class="text-3xl font-bold mb-6">About the Property</h2>
            <p class="leading-relaxed mb-8 text-lg opacity-90">{{ accommodation.longDescription || accommodation.description }}</p>
          </section>

          <div>
            <h3 class="text-2xl font-bold mb-6 text-ocean">Key Highlights</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="hl in accommodation.highlights" :key="hl" class="flex items-center gap-3 bg-ocean/5 p-4 rounded-xl border border-ocean/10 hover:bg-ocean/10 transition-colors">
                <div class="bg-ocean text-white p-1.5 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span class="font-medium text-ocean">{{ hl }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8 lg:sticky lg:top-24 h-fit">
          <div class="p-8 rounded-3xl bg-ocean text-ocean/40 shadow-xl">
            <h4 class="text-lg font-bold mb-4">Price Range</h4>
            <p class="text-2xl font-semibold">{{ accommodation.priceRange }}</p>
            <p class="text-sm mt-2 opacity-90">Per night (approximate, may vary by season)</p>
          </div>

          <div class="p-8 rounded-3xl bg-ocean text-ocean/40 shadow-xl">
            <h4 class="font-bold mb-2 text-ocean">Visitor Tip</h4>
            <p class="text-sm opacity-80 leading-relaxed">
              Book in advance during peak season (December–May). Many places offer boat transfer coordination—ask when reserving.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-40">
      <h2 class="text-3xl font-bold text-ocean mb-4">Accommodation Not Found</h2>
      <button @click="goBack" class="mt-8 px-8 py-4 bg-ocean text-white rounded-full font-bold hover:bg-opacity-90 transition">
        Back to List
      </button>
    </div>
  </div>
</template>

<style scoped>
.hero-carousel .glide__slide img { filter: brightness(0.92) contrast(1.05); }
.hero-carousel .glide__bullet--active { background: white !important; transform: scale(1.3); }
.hero-carousel .glide__arrow:hover { transform: scale(1.1); }
</style>