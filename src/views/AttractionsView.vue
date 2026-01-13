<script setup>
import { ref, computed } from 'vue'
import attractionsData from '@/data/attractions.json'

const attractions = ref(attractionsData)
const sortBy = ref('default')
const filterGroup = ref('all')

// Computed property logic
const filteredAndSortedAttractions = computed(() => {
  let list = [...attractions.value]

  // 1. Filter by Group first
  if (filterGroup.ref !== 'all' && filterGroup.value !== 'all') {
    list = list.filter(attr => attr.group === filterGroup.value)
  }

  // 2. Then Sort
  if (sortBy.value === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'group') {
    // Sorts by Group name (Adventure, Long Trip, Short Trip, etc.)
    list.sort((a, b) => a.group.localeCompare(b.group))
  }

  return list
})

// Helper to get unique groups for the filter dropdown
const uniqueGroups = computed(() => {
  const groups = attractions.value.map(a => a.group)
  return ['all', ...new Set(groups)]
})
</script>

<template>
  <div class="container py-12 mt-20">
    <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
      <div>
        <h1 class="font-island text-[4.5rem] text-[#737B4C]">Explore Caramoan</h1>
        <p class="text-[--ocean]/70">Discover islands, inland gems, and local flavors.</p>
      </div>
      
      <div class="flex flex-wrap gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-bold uppercase text-[--ocean]/60 ml-1">Itinerary / Group</label>
          <select 
            v-model="filterGroup" 
            class="bg-white border border-[--ocean]/20 text-[--ocean] rounded-lg px-4 py-2 outline-none focus:border-[--ocean] transition-all cursor-pointer shadow-sm"
          >
            <option value="all">All Locations</option>
            <option v-for="group in uniqueGroups.filter(g => g !== 'all')" :key="group" :value="group">
              {{ group }}
            </option>
          </select>
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs font-bold uppercase text-[--ocean]/60 ml-1">Sort By</label>
          <select 
            v-model="sortBy" 
            class="bg-white border border-[--ocean]/20 text-[--ocean] rounded-lg px-4 py-2 outline-none focus:border-[--ocean] transition-all cursor-pointer shadow-sm"
          >
            <option value="default">Featured</option>
            <option value="name">Alphabetical (A-Z)</option>
            <option value="group">Grouping</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="filteredAndSortedAttractions.length === 0" class="text-center py-20">
      <p class="text-[--ocean]/50">No attractions found in this category.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link 
        v-for="attr in filteredAndSortedAttractions" 
        :key="attr.id"
        :to="{ name: 'attraction-detail', params: { id: attr.id } }" 
        class="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div class="relative overflow-hidden">
          <img :src="attr.image" :alt="attr.name" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110">
          <div class="absolute top-4 right-4">
            <span class="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[--ocean] uppercase shadow-sm">
              {{ attr.group }}
            </span>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{{ attr.category }}</span>
          </div>
          <h3 class="text-xl font-bold mb-3 text-[--ocean] group-hover:text-blue-700 transition-colors">{{ attr.name }}</h3>
          <p class="text-[--ocean]/70 text-sm line-clamp-2 mb-4 italic">
            "{{ attr.description }}"
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span v-for="highlight in attr.highlights.slice(0, 2)" :key="highlight" class="text-[10px] bg-[--ocean]/5 text-[--ocean]/80 px-2 py-1 rounded">
              {{ highlight }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>