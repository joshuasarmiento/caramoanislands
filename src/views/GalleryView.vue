<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'

// Import all data sources
import attractionsData from '@/data/attractions.json'
import accommodationsData from '@/data/accommodations.json'
import caramoanStaysData from '@/data/caramoanStays.json'

const galleryItems = ref([])
const selectedImage = ref(null) 
const activeFilter = ref('All')
const sortBy = ref('default')

onMounted(async () => {
  const allImages = []

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

  galleryItems.value = allImages.filter(img => img.url && !img.url.includes('googleusercontent'))
  initObserver()
})

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

const openModal = (item) => {
  selectedImage.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}

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
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24">
    
    <div class="text-center mb-10 md:mb-16">
      <h1 class="font-island text-[3.5rem] sm:text-[5rem] md:text-[7rem] text-green leading-none mb-4">
        Discovery Gallery
      </h1>
      <p class="text-ocean/60 text-sm md:text-lg max-w-xl mx-auto">
        A visual journey through the hidden gems and turquoise horizons of Caramoan.
      </p>

      <!-- <div class="flex flex-wrap justify-center gap-2 mt-8">
        <button v-for="cat in ['All', 'Island']" :key="cat"
          @click="activeFilter = cat"
          :class="activeFilter === cat ? 'bg-green text-white shadow-lg' : 'bg-ocean/5 text-ocean hover:bg-ocean/10'"
          class="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all">
          {{ cat }}s
        </button>
      </div> -->
    </div>

    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
      <div 
        v-for="(item, index) in filteredItems" 
        :key="item.url + index"
        @click="openModal(item)"
        class="reveal-on-scroll break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-3xl bg-ocean/5 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1"
      >
        <img :src="item.url" :alt="item.title" loading="lazy" 
             class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div>
            <span class="text-[10px] font-black uppercase text-green tracking-[0.2em] mb-1 block">{{ item.category }}</span>
            <p class="text-white font-bold text-lg leading-tight">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="selectedImage" 
          class="fixed inset-0 z-[200] bg-ocean/95 flex items-center justify-center p-4 sm:p-6 md:p-12 backdrop-blur-md"
          @click.self="closeModal"
        >
          <button @click="closeModal" class="absolute top-6 right-6 text-white text-4xl font-light z-[210] hover:rotate-90 transition-transform duration-300">
            &times;
          </button>
          
          <div class="max-w-6xl w-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl h-fit max-h-[90vh]">
            
            <div class="lg:w-2/3 bg-black/5 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-ocean/5">
              <img :src="selectedImage.url" class="max-h-[50vh] lg:max-h-[85vh] w-full object-contain" />
            </div>

            <div class="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <span class="text-green font-black uppercase text-[10px] tracking-[0.3em] mb-3">{{ selectedImage.category }}</span>
              <h2 class="text-2xl md:text-4xl font-black text-ocean mb-4 leading-tight">{{ selectedImage.title }}</h2>
              <p class="text-ocean/70 leading-relaxed text-sm md:text-base italic mb-8">
                "{{ selectedImage.desc || 'A breathtaking moment captured in the heart of the peninsula.' }}"
              </p>
              
              <button @click="closeModal" class="bg-ocean text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green transition-colors shadow-lg shadow-ocean/20">
                Back to Discovery
              </button>

              <p class="mt-8 text-[10px] text-ocean/30 font-bold uppercase tracking-widest">
                Protected Archive Item
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
.reveal-on-scroll { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
.reveal-visible { opacity: 1; transform: translateY(0); }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Custom Masonry Spacing for very small devices */
@media (max-width: 640px) {
  .columns-1 {
    column-gap: 1rem;
  }
}
</style>