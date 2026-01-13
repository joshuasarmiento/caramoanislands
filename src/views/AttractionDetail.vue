<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, computed, ref } from 'vue'
import Glide from '@glidejs/glide'
import attractions from '@/data/attractions.json'

const route = useRoute()
const router = useRouter()
const glideRef = ref(null)

const attraction = attractions.find(a => a.id === route.params.id)

const goBack = () => router.push('/explore')

// Ensure we always have an array for images
const displayImages = computed(() => {
  if (!attraction) return []
  return attraction.images?.length ? attraction.images : [attraction.image]
})

onMounted(() => {
  if (attraction && displayImages.value.length > 1) {
    glideRef.value = new Glide('.hero-carousel', {
      type: 'carousel',
      autoplay: 5000,
      hoverpause: true,
      animationDuration: 800,
      gap: 0,
    }).mount()
  }
})

const hasSocial = computed(() => {
  return attraction?.socialMedia && (attraction.socialMedia.facebook || attraction.socialMedia.instagram)
})
</script>

<template>
  <div class="container py-6 md:py-12 mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
    <div v-if="attraction" class="max-w-6xl mx-auto">
      
      <button @click="goBack"
        class="mb-6 md:mb-8 flex items-center gap-2 text-ocean font-bold hover:opacity-70 transition-opacity p-2 -ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span class="text-sm md:text-base">Back to Explore</span>
      </button>

      <div class="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl mb-8 md:mb-12 group">
        <div class="hero-carousel glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li v-for="(imgSrc, index) in displayImages" :key="index" class="glide__slide">
                <img :src="imgSrc" :alt="attraction.name"
                  class="w-full h-[50vh] sm:h-[60vh] md:h-150 object-cover transition-transform duration-1000 group-hover:scale-105" />
              </li>
            </ul>
          </div>

          <div v-if="displayImages.length > 1"
            class="hidden sm:flex glide__arrows absolute inset-0 items-center justify-between px-4 md:px-8 pointer-events-none z-10"
            data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-xl flex items-center justify-center text-ocean hover:bg-white/80 transition-all shadow-xl" data-glide-dir="<">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"/></svg>
            </button>
            <button class="glide__arrow glide__arrow--right pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-xl flex items-center justify-center text-ocean hover:bg-white/80 transition-all shadow-xl" data-glide-dir=">">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>

          <div v-if="displayImages.length > 1"
            class="glide__bullets absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10"
            data-glide-el="controls[nav]">
            <button v-for="(_, index) in displayImages" :key="index"
              class="glide__bullet w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/40 border border-white/20 transition-all"
              :data-glide-dir="`=${index}`"></button>
          </div>
        </div>

        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-6 md:p-12">
          <div class="flex flex-wrap gap-2 mb-3">
            <span class="bg-green text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              {{ attraction.group }}
            </span>
            <span class="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              {{ attraction.category }}
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
            {{ attraction.name }}
          </h1>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        <div class="lg:col-span-2 space-y-10 md:space-y-16">
          <section class="prose prose-ocean max-w-none">
            <h2 class="text-2xl md:text-3xl font-black text-ocean mb-4 md:mb-6">About the Destination</h2>
            <p class="text-base md:text-lg leading-relaxed text-ocean/80">
              {{ attraction.longDescription }}
            </p>
          </section>

          <section>
            <h3 class="text-xl md:text-2xl font-black mb-6 text-ocean">Key Highlights</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="hl in attraction.highlights" :key="hl"
                class="flex items-center gap-4 bg-green/5 p-4 md:p-5 rounded-2xl border border-green/10">
                <div class="bg-green text-white p-2 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span class="font-bold text-ocean text-sm md:text-base">{{ hl }}</span>
              </div>
            </div>
          </section>

          <section v-if="hasSocial" class="pt-10 border-t border-ocean/10">
            <h3 class="text-xl font-black mb-6 text-ocean uppercase tracking-tighter">Stay Connected</h3>
            <div class="flex flex-col sm:flex-row gap-4">
              <a v-if="attraction.socialMedia.facebook" :href="attraction.socialMedia.facebook" target="_blank"
                class="flex items-center justify-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.49 0-1.955.925-1.955 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/></svg>
                <span>Facebook</span>
              </a>
              <a v-if="attraction.socialMedia.instagram" :href="attraction.socialMedia.instagram" target="_blank"
                class="flex items-center justify-center gap-3 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 256 256"><!-- Icon from Skill Icons by tandpfun - https://github.com/tandpfun/skill-icons/blob/main/LICENSE --><g fill="none"><rect width="256" height="256" fill="url(#SVGWRUqebek)" rx="60"/><rect width="256" height="256" fill="url(#SVGfkNpldMH)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="SVGWRUqebek" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="SVGfkNpldMH" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>
                <span>Instagram</span>
              </a>
            </div>
          </section>
        </div>

        <div class="space-y-6 md:space-y-8 lg:sticky lg:top-28 h-fit">
          <div class="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-ocean/5">
            <h4 class="text-xs font-black uppercase tracking-widest text-ocean/40 mb-6">Verified Sources</h4>
            <ul class="space-y-5">
              <li v-for="cite in attraction.citations" :key="cite.source">
                <a :href="cite.link" target="_blank" class="block group">
                  <div class="text-ocean font-bold text-sm group-hover:text-green transition-colors underline-offset-4 group-hover:underline">{{ cite.source }}</div>
                  <div class="text-[10px] text-ocean/40 truncate mt-1">{{ cite.link }}</div>
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-ocean p-6 md:p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">💡</div>
                <h4 class="font-black uppercase tracking-tighter text-sm">Visitor Tip</h4>
              </div>
              <p class="text-sm leading-relaxed opacity-90 font-medium">
                Caramoan is a protected area. Please practice "Leave No Trace" principles. Avoid touching the limestone karst and never take shells or sand as souvenirs.
              </p>
            </div>
            <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div class="text-8xl mb-6">🏝️</div>
      <h2 class="text-2xl md:text-4xl font-black text-ocean mb-4">Island Not Found</h2>
      <p class="text-ocean/60 max-w-md mb-8">This destination might be hidden by the tide. Try exploring our other islands.</p>
      <button @click="goBack" class="px-10 py-4 bg-green text-white rounded-full font-black shadow-lg hover:scale-105 transition-transform">
        Back to Maps
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Glide Custom Styles */
.glide__bullet--active {
  background-color: var(--color-white) /* #fff = #ffffff */;
  width: calc(var(--spacing) * 8) /* 2rem = 32px */;
}

.glide__slide {
  overflow: hidden;
}

/* Fluid Typography for prose */
.prose-ocean {
  --tw-prose-body: var(--color-ocean);
  --tw-prose-headings: var(--color-ocean);
}

/* Custom easing for the carousel */
.glide__track {
  cursor: grab;
}
.glide__track:active {
  cursor: grabbing;
}
</style>