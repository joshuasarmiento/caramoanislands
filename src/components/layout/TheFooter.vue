<script setup>
import { ref } from 'vue'

const isDisclaimerOpen = ref(false)

const toggleDisclaimer = () => {
  isDisclaimerOpen.value = !isDisclaimerOpen.value
  if (isDisclaimerOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <footer class="mt-auto py-12 border-t border-[--ocean]/10">
    <div class="container text-center text-[--ocean]">
      <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <p class="text-sm">© {{ new Date().getFullYear() }} Caramoan Island Tourism</p>
        <span class="hidden md:inline text-[--ocean]/30">|</span>
        <button @click="toggleDisclaimer"
          class="text-sm font-semibold hover:text-[--turquoise] transition-colors underline underline-offset-4">
          Legal Disclaimer & Copyright
        </button>
      </div>
      <p class="text-xs text-[--ocean]/50 max-w-xl mx-auto">
        This website is a travel guide. While we strive for accuracy, please verify schedules and rates with official
        providers.
      </p>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isDisclaimerOpen"
          class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          @click.self="toggleDisclaimer">
          <div class="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div class="p-6 border-b flex justify-between items-center bg-[--ocean] text-[--ocean]">
              <h2 class="text-xl font-bold tracking-tight">Legal Notice</h2>
              <button @click="toggleDisclaimer" class="text-2xl hover:opacity-70">&times;</button>
            </div>

            <div class="p-8 overflow-y-auto text-[--ocean] leading-relaxed">
              <section class="mb-6">
                <h3 class="font-bold text-lg mb-2">1. Information Accuracy</h3>
                <p class="text-sm text-[--ocean]/80">
                  The content on this website is for informational purposes only. Travel times, prices, and availability
                  for 2026 are estimates based on current trends and local data.
                </p>
              </section>

              <section class="mb-6">
                <h3 class="font-bold text-lg mb-2">2. Copyright & Intellectual Property</h3>
                <p class="text-sm text-[--ocean]/80">
                  This site uses images and data sourced from various platforms (Facebook, Youtube, Gamintraveler, etc.) to
                  promote Caramoan tourism. All images remain the intellectual property of their respective owners.
                </p>
              </section>

              <section class="mb-6 bg-red-50 p-4 rounded-xl border border-red-100">
                <h3 class="font-bold text-red-800 text-lg mb-2">3. Image Takedown Request</h3>
                <p class="text-sm text-red-900/80">
                  If you are the owner of an image/video featured on this site and wish for it to be removed or credited
                  differently, please contact us immediately. We respect all copyright claims and will fulfill valid
                  requests within 24-48 hours.
                </p>
                <div class="mt-4 flex items-center gap-2 font-bold text-red-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span class="text-sm">caramoanislands@duck.com</span>
                </div>
              </section>

              <section>
                <h3 class="font-bold text-lg mb-2">4. Affiliate Disclaimer</h3>
                <p class="text-sm text-[--ocean]/80 italic">
                  Some links may lead to third-party booking sites. We are not responsible for transactions or
                  experiences handled by external operators.
                </p>
              </section>
            </div>

            <div class="p-6 border-t bg-gray-50 text-right">
              <button @click="toggleDisclaimer"
                class="px-8 py-2 bg-[#737B4C] text-white rounded-xl font-bold hover:bg-[--ocean]/90 transition">
                I Understand
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>