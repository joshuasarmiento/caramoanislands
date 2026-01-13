<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, computed } from 'vue'
import Glide from '@glidejs/glide'
import attractions from '@/data/attractions.json'

const route = useRoute()
const router = useRouter()

const attraction = attractions.find(a => a.id === route.params.id)

const goBack = () => router.push('/attractions')

onMounted(() => {
  if (attraction && (attraction.images?.length || 0) > 1) {
    new Glide('.hero-carousel', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      gap: 0,
      autoplay: 5000,
      hoverpause: true,
      animationDuration: 800,
      animationTimingFunc: 'ease-in-out',
      rewind: true,
    }).mount()
  }
})

// Helper to check if social media exists
const hasSocial = computed(() => {
  return attraction?.socialMedia &&
    (attraction.socialMedia.facebook || attraction.socialMedia.instagram)
})
</script>

<template>
  <div class="container py-12 mt-20">
    <div v-if="attraction" class="max-w-5xl mx-auto px-4">
      <!-- Back Button -->
      <button @click="goBack"
        class="mb-8 flex items-center gap-2 text-ocean font-medium hover:opacity-70 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to Explore
      </button>

      <!-- Hero Carousel Section -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
        <div class="hero-carousel glide">
          <!-- Slides -->
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li v-for="(imgSrc, index) in (attraction.images || [attraction.image])" :key="index"
                class="glide__slide">
                <img :src="imgSrc" :alt="`${attraction.name} - Image ${index + 1}`"
                  class="w-full h-125 md:h-150 object-cover transition-transform duration-700 hover:scale-105" />
              </li>
            </ul>
          </div>

          <!-- Navigation Arrows - FIXED -->
          <div v-if="(attraction.images || []).length > 1"
            class="glide__arrows absolute inset-0 flex items-center justify-between px-6 pointer-events-none z-10"
            data-glide-el="controls">
            <!-- Left Arrow -->
            <button
              class="glide__arrow glide__arrow--left pointer-events-auto w-14 h-14 rounded-full bg-white/40 backdrop-blur-lg flex items-center justify-center text-ocean hover:bg-white/60 transition-all duration-300 shadow-lg"
              data-glide-dir="<">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="rotate-180"
                viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
                <path fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z" />
              </svg>
            </button>

            <!-- Right Arrow -->
            <button
              class="glide__arrow glide__arrow--right pointer-events-auto w-14 h-14 rounded-full bg-white/40 backdrop-blur-lg flex items-center justify-center text-ocean hover:bg-white/60 transition-all duration-300 shadow-lg"
              data-glide-dir=">">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
                <path fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z" />
              </svg>
            </button>
          </div>

          <!-- Navigation Bullets -->
          <div v-if="(attraction.images || []).length > 1"
            class="glide__bullets absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10"
            data-glide-el="controls[nav]">
            <button v-for="(_, index) in (attraction.images || [attraction.image])" :key="index"
              class="glide__bullet w-3 h-3 rounded-full bg-white/60 hover:bg-white focus:bg-white transition"
              :data-glide-dir="`=${index}`"></button>
          </div>
        </div>

        <!-- Overlay Text (gradient + title) -->
        <div
          class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none flex flex-col justify-end p-8 md:p-12">
          <div class="flex flex-wrap gap-3 mb-4">
            <span
              class="bg-green text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              {{ attraction.group }}
            </span>
            <span
              class="bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              {{ attraction.category }}
            </span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
            {{ attraction.name }}
          </h1>
        </div>

        <!-- Small note about images -->
        <div class="absolute top-6 left-6 z-10">
          <p class="text-[10px] text-gray-200 italic bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
            Images from external sources (see Legal Disclaimer)
          </p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Left Column: Description + Highlights + Social -->
        <div class="lg:col-span-2 space-y-12">
          <section class="prose prose-lg max-w-none text-ocean">
            <h2 class="text-3xl font-bold mb-6">About the Destination</h2>
            <p class="leading-relaxed mb-8 text-lg opacity-90">
              {{ attraction.longDescription }}
            </p>
          </section>

          <div>
            <h3 class="text-2xl font-bold mb-6 text-ocean">Key Highlights</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="hl in attraction.highlights" :key="hl"
                class="flex items-center gap-3 bg-green/5 p-4 rounded-xl border border-green/10 hover:bg-green/10 transition-colors">
                <div class="bg-green text-white p-1.5 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span class="font-medium text-ocean">{{ hl }}</span>
              </div>
            </div>
          </div>

          <!-- SOCIAL MEDIA BUTTONS -->
          <div v-if="hasSocial" class="pt-6 border-t border-ocean/20">
            <h3 class="text-2xl font-bold mb-6 text-ocean">Follow on Social Media</h3>
            <div class="flex flex-wrap gap-4">
              <a v-if="attraction.socialMedia.facebook" :href="attraction.socialMedia.facebook" target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-xl hover:brightness-110 transition-all shadow-md hover:shadow-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a v-if="attraction.socialMedia.instagram" :href="attraction.socialMedia.instagram" target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 bg-linear-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white px-6 py-3 rounded-xl hover:brightness-110 transition-all shadow-md hover:shadow-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.239 2.242 1.301 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.239-3.608 1.301-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.239-2.242-1.301-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.069-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.239 3.608-1.301 1.266-.058 1.646-.069 4.85-.069zM12 0C8.741 0 8.332.012 7.052.07 5.775.13 4.905.398 4.14 1.163c-.765.765-.993 1.635-1.053 2.912C3.012 5.332 3 5.741 3 9v6c0 3.259.012 3.668.07 4.948.06 1.277.288 2.147 1.053 2.912.765.765 1.635.993 2.912 1.053 1.28.058 1.689.07 4.948.07h6c3.259 0 3.668-.012 4.948-.07 1.277-.06 2.147-.288 2.912-1.053.765-.765.993-1.635 1.053-2.912.058-1.28.07-1.689.07-4.948v-6c0-3.259-.012-3.668-.07-4.948-.06-1.277-.288-2.147-1.053-2.912C19.147.398 18.277.13 17 .07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm7.846-11.404a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column: Sidebar -->
        <div class="space-y-8 lg:sticky lg:top-24 h-fit">
          <div class="p-8 rounded-3xl bg-white text-ocean/40 shadow-lg relative overflow-hidden">
            <h4 class="text-xs font-black uppercase tracking-widest text-ocean/90 mb-6">Verified Sources</h4>
            <ul class="space-y-4">
              <li v-for="cite in attraction.citations" :key="cite.source">
                <a :href="cite.link" target="_blank" rel="noopener noreferrer"
                  class="group flex flex-col gap-1 hover:text-green transition-colors">
                  <span class="text-ocean font-bold group-hover:underline">{{ cite.source }}</span>
                  <span class="text-[10px] text-ocean/60 truncate">{{ cite.link }}</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="p-8 rounded-3xl bg-white text-ocean/90 shadow-xl relative overflow-hidden">
            <div class="relative z-10">
              <h4 class="font-bold mb-2 text-ocean">Visitor Tip</h4>
              <p class="text-sm opacity-80 leading-relaxed">
                Caramoan is a protected area. Please practice "Leave No Trace" principles. Avoid touching the limestone
                karst and never take shells or sand as souvenirs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else class="text-center py-40">
      <h2 class="text-2xl md:text-3xl font-bold text-ocean mb-4">
        Destination Hidden in the Clouds...
      </h2>
      <p class="text-ocean/60 text-lg mb-8">
        We couldn't find the attraction you're looking for.
      </p>
      <button @click="goBack"
        class="px-8 py-4 bg-green text-white rounded-full font-bold hover:bg-[#5f663f] transition">
        Return to Attractions
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Carousel enhancements */
.hero-carousel .glide__slide img {
  filter: brightness(0.92) contrast(1.05);
}

.hero-carousel .glide__bullet--active {
  background: white !important;
  transform: scale(1.3);
}

.hero-carousel .glide__arrow:hover {
  transform: scale(1.1);
  background: white/70 !important;
}

/* Arrow icons (optional better look) */
.glide__arrow {
  font-size: 2rem;
  font-weight: bold;
}
</style>