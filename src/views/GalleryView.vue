<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'

// Import all data sources
import attractionsData from '@/data/attractions.json'
import accommodationsData from '@/data/accommodations.json'
import caramoanStaysData from '@/data/caramoanStays.json'
// import tourOperatorsData from '@/data/tourOperators.json'

const galleryItems = ref([])
const selectedImage = ref(null) // Controls the modal visibility
const activeFilter = ref('All')
const sortBy = ref('default')

onMounted(async () => {
  const allImages = []

  // 1. Fetching Logic (Unified categories)
  attractionsData.forEach(item => {
    if (item.image) allImages.push({ url: item.image, title: item.name, category: 'Island', desc: item.description })
    item.images?.forEach(img => allImages.push({ url: img, title: item.name, category: 'Island', desc: 'Scenic view of ' + item.name }))
  })
  
  accommodationsData.forEach(item => {
    if (item.image) allImages.push({ url: item.image, title: item.name, category: 'Stay', desc: item.description })
  })

  caramoanStaysData.platforms.forEach(p => {
    if (p.image?.url) allImages.push({ url: p.image.url, title: p.name, category: 'Stay', desc: p.description })
  })

  // tourOperatorsData.forEach(op => {
  //   if (op.logo) allImages.push({ url: op.logo, title: op.name, category: 'Operator', desc: op.description })
  // })

  galleryItems.value = allImages.filter(img => img.url && !img.url.includes('googleusercontent'))
  initObserver()
})

// 2. Sorting & Filtering Logic
const filteredItems = computed(() => {
  let items = [...galleryItems.value]
  if (activeFilter.value !== 'All') {
    items = items.filter(item => item.category === activeFilter.value)
  }
  if (sortBy.value === 'alpha') {
    items.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy.value === 'random') {
    items.sort(() => Math.random() - 0.5)
  }
  nextTick(() => initObserver())
  return items
})

// 3. Modal Functions
const openModal = (item) => {
  selectedImage.value = item
  document.body.style.overflow = 'hidden' // Stop background scroll
}

const closeModal = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto' // Restore scroll
}

// 4. Reveal Animation Observer
const initObserver = async () => {
  await nextTick()
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('reveal-visible')
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))
}
</script>

<template>
  <div class="container py-16 mt-20">
    <div class="text-center mb-10 px-4">
      <h1 class="font-island text-7xl text-green mb-4">Discovery Gallery</h1>
      <p class="text-ocean/60">Explore Caramoan through your preferred lens.</p>
      <!-- <div class="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        <div class="flex gap-2 p-1 bg-gray-100 rounded-2xl">
          <button v-for="cat in ['All', 'Island', 'Stay', 'Operator']" :key="cat"
            @click="activeFilter = cat"
            :class="activeFilter === cat ? 'bg-white shadow-sm text-ocean' : 'text-gray-500'"
            class="px-4 py-2 rounded-xl text-sm font-bold transition-all"
          >
            {{ cat }}s
          </button>
        </div>
        <select v-model="sortBy" class="bg-white border border-gray-200 px-4 py-2.5 rounded-2xl text-sm font-bold text-ocean">
          <option value="default">Default Order</option>
          <option value="alpha">A - Z (Name)</option>
          <option value="random">Shuffle</option>
        </select>
      </div> -->
    </div>

    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 px-4">
      <div 
        v-for="(item, index) in filteredItems" 
        :key="item.url + index"
        @click="openModal(item)"
        class="reveal-on-scroll break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-2xl bg-gray-100 transition-all duration-500 shadow-md hover:shadow-xl"
      >
        <img :src="item.url" :alt="item.title" loading="lazy" class="w-full h-auto object-cover" />
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <p class="text-white font-bold">{{ item.title }}</p>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="selectedImage" 
          class="fixed inset-0 z-150 bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <button @click="closeModal" class="absolute top-6 right-6 text-white text-5xl font-light z-50 hover:text-gray-300 transition">&times;</button>
          
          <div class="max-w-6xl w-full bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl h-fit max-h-[90vh]">
            <div class="md:w-2/3 bg-black flex items-center justify-center overflow-hidden">
              <img :src="selectedImage.url" class="max-h-[70vh] md:max-h-[85vh] w-full object-contain" />
            </div>

            <div class="md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <span class="text-[--turquoise] font-black uppercase text-xs tracking-widest mb-2">{{ selectedImage.category }}</span>
              <h2 class="text-3xl font-bold text-ocean mb-4 leading-tight">{{ selectedImage.title }}</h2>
              <p class="text-ocean/70 leading-relaxed text-sm md:text-base">
                {{ selectedImage.desc || 'No description available for this view.' }}
              </p>
              
              <button @click="closeModal" class="mt-8 bg-ocean text-white py-4 rounded-2xl font-bold hover:brightness-110 transition">
                Return to Gallery
              </button>


              <p class="mt-6 text-[10px] text-gray-400 italic">
                Source: External Link (Check Legal Disclaimer for Copyright)
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.break-inside-avoid { break-inside: avoid; }
.reveal-on-scroll { opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; }
.reveal-visible { opacity: 1; transform: translateY(0); }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>