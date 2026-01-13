<script setup>
import { ref, onMounted } from 'vue'
import caramoanStay from '@/data/caramoanStays.json' // Adjust path if needed (e.g. '../data/tourOperators.json')

const caramoanStays = ref(caramoanStay)
</script>

<template>
  <section v-if="caramoanStays" class="container mx-auto px-6 py-16 mt-20 max-w-7xl">
    <header class="text-center mb-14">
      <h1 class="font-island text-6xl md:text-7xl text-[#737B4C] mb-4">
        {{ caramoanStays.title }}
      </h1>
      <p class="text-lg md:text-xl text-[--ocean]/75 max-w-3xl mx-auto leading-relaxed">
        {{ caramoanStays.description }}
      </p>
    </header>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="platform in caramoanStays.platforms"
        :key="platform.name"
        :href="platform.url"
        target="_blank"
        rel="noopener noreferrer"
        class="glass-card group block rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 h-full"
      >
        <div class="relative">
          <img
            :src="platform.image.url"
            :alt="platform.image.alt"
            class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <h3 class="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-md">
            {{ platform.name }}
          </h3>
        </div>

        <div class="p-6 bg-white/70 backdrop-blur-sm">
          <p class="text-[--ocean]/80 mb-5 leading-relaxed min-h-[3.5rem]">
            {{ platform.description }}
          </p>
          <span class="inline-flex items-center bg-[--ocean] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[--ocean-dark] transition-colors">
            {{ platform.button_text }}
          </span>
        </div>
      </a>
    </div>

    <aside class="mt-16 max-w-4xl mx-auto backdrop-blur-xl rounded-3xl p-8 border-white/30">
      <h2 class="text-2xl font-bold text-[--ocean] mb-6 text-center">
        {{ caramoanStays.tips.title }}
      </h2>
      <ul class="space-y-4 text-[--ocean]/90 text-lg list-disc pl-6 marker:text-[--ocean]">
        <li v-for="(tip, index) in caramoanStays.tips.items" :key="index">
          {{ tip }}
        </li>
      </ul>
    </aside>
  </section>

  <div v-else class="text-center py-20 text-gray-500">
    Loading Caramoan accommodation data...
  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-6px);
}

@layer base {
  :root {
    --ocean: #1e40af;
    --ocean-dark: #1e3a8a;
  }
}
</style>