<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const route = useRoute()

// Returns true if the current path is NOT the homepage
const showFooter = computed(() => route.path !== '/')
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <TheHeader />
    
    <main class="grow">
      <transition name="fade" appear mode="out-in">
        <RouterView />
      </transition>
    </main>

    <TheFooter v-if="showFooter"/>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>