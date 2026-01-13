<script setup>
import { ref, computed } from 'vue'
import attractionsData from '@/data/attractions.json'

const attractions = ref(attractionsData)
const sortBy = ref('default')
const filterGroup = ref('all')

// Computed property logic
const filteredAndSortedAttractions = computed(() => {
  let list = [...attractions.value]

  // Fixed the logic error (filterGroup.ref was undefined)
  if (filterGroup.value !== 'all') {
    list = list.filter(attr => attr.group === filterGroup.value)
  }

  if (sortBy.value === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'group') {
    list.sort((a, b) => a.group.localeCompare(b.group))
  }

  return list
})

const uniqueGroups = computed(() => {
  const groups = attractions.value.map(a => a.group)
  return ['all', ...new Set(groups)]
})
</script>

<template>
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24">
    
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-8">
      <div class="max-w-2xl">
        <h1 class="font-island text-[2.8rem] sm:text-[4rem] md:text-[5rem] text-green leading-[1.1] mb-2">
          Explore Caramoan
        </h1>
        <p class="text-ocean/70 text-base md:text-lg">
          Discover hidden islands, limestone gems, and authentic local flavors.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
        <div class="flex flex-col gap-1.5">
          <label class="text-[10px] md:text-xs font-black uppercase text-ocean/40 tracking-widest ml-1">
            Trip Type
          </label>
          <select v-model="filterGroup"
            class="bg-white border-2 border-ocean/5 text-ocean rounded-xl px-4 py-3 md:py-2 outline-none focus:border-green transition-all cursor-pointer shadow-sm text-sm md:text-base appearance-none">
            <option value="all">All Locations</option>
            <option v-for="group in uniqueGroups.filter(g => g !== 'all')" :key="group" :value="group">
              {{ group }}
            </option>
          </select>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-[10px] md:text-xs font-black uppercase text-ocean/40 tracking-widest ml-1">
            Sort By
          </label>
          <select v-model="sortBy"
            class="bg-white border-2 border-ocean/5 text-ocean rounded-xl px-4 py-3 md:py-2 outline-none focus:border-green transition-all cursor-pointer shadow-sm text-sm md:text-base appearance-none">
            <option value="default">Featured</option>
            <option value="name">Alphabetical (A-Z)</option>
            <option value="group">Grouping</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="filteredAndSortedAttractions.length === 0" class="text-center py-32 bg-ocean/5 rounded-[2rem]">
      <div class="text-5xl mb-4">🔍</div>
      <p class="text-ocean/50 font-bold">No attractions found in this category.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      <router-link v-for="attr in filteredAndSortedAttractions" :key="attr.id"
        :to="{ name: 'attraction-detail', params: { id: attr.id } }"
        class="group flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl border border-ocean/5">
        
        <div class="relative aspect-video sm:aspect-square lg:aspect-[4/3] overflow-hidden">
          <img :src="attr.image" :alt="attr.name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          
          <div class="absolute top-4 right-4">
            <span
              class="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-ocean uppercase shadow-md tracking-tighter">
              {{ attr.group }}
            </span>
          </div>
        </div>

        <div class="p-6 md:p-8 flex flex-col flex-grow">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">{{ attr.category }}</span>
          </div>
          
          <h3 class="text-xl md:text-2xl font-black mb-3 text-ocean group-hover:text-green transition-colors leading-tight">
            {{ attr.name }}
          </h3>
          
          <p class="text-ocean/70 text-sm md:text-base line-clamp-2 mb-6 italic leading-relaxed">
            "{{ attr.description }}"
          </p>

          <div class="mt-auto flex flex-wrap gap-2">
            <span v-for="highlight in attr.highlights.slice(0, 2)" :key="highlight"
              class="text-[9px] md:text-[10px] font-bold bg-green/5 text-green px-3 py-1.5 rounded-lg border border-green/10">
              {{ highlight }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Modern shadow for the 'glass' look on hover */
.container {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* Custom Select Dropdown Reset for mobile Safari */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A365D'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.25em;
  padding-right: 2.5rem;
}

/* Ensure images don't stretch weirdly while loading */
img {
  content-visibility: auto;
}
</style>