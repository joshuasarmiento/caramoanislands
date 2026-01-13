<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form states
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleSubmit = async (event) => {
  event.preventDefault()
  
  isSubmitting.value = true
  errorMessage.value = ''
  
  const form = event.target
  const formData = new FormData(form)

  try {
    const response = await fetch('https://formspree.io/f/xjggvagr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      // Success
      isSuccess.value = true
      form.reset() // clear form fields
      
      // Brief success message → then redirect
      setTimeout(() => {
        router.push('/thank-you')
      }, 1800) // 1.8 seconds - enough to read the thank you message
    } else {
      // Formspree error
      const data = await response.json()
      errorMessage.value = data.error || 'Failed to send message. Please try again.'
    }
  } catch (err) {
    // Network / other error
    errorMessage.value = 'Network error. Please check your internet connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="container py-12 mt-20">
    <h1 class="font-island text-[4.5rem] text-[#737B4C] text-center mb-2">
      Get in Touch
    </h1>
    <p class="text-center text-[--ocean]/70 text-lg mb-12 max-w-3xl mx-auto">
      Contact the Municipality of Caramoan (LGU) for official inquiries, or reach out to our trusted tour operators for package bookings.
    </p>

    <div class="max-w-5xl mx-auto px-4 space-y-12">
      <!-- === Contact Form Section === -->
      <div class="border p-8 rounded-3xl bg-white shadow-sm">
        <h2 class="text-2xl font-bold text-[--ocean] mb-6">Send us a Message</h2>

        <!-- Success state (shown briefly before redirect) -->
        <div 
          v-if="isSuccess" 
          class="text-center py-16 text-[--ocean]"
        >
        <div class="text-6xl mb-6">🎉</div>
          <h3 class="text-2xl font-bold mb-4">Thank You!</h3>
          <p class="text-[--ocean]/70">
            Redirecting you to the thank-you page...
          </p>
        </div>

        <!-- Error message -->
        <div 
          v-if="errorMessage && !isSuccess" 
          class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-center"
        >
          {{ errorMessage }}
        </div>

        <!-- Form (hidden after success) -->
        <form 
          v-if="!isSuccess" 
          @submit="handleSubmit" 
          class="space-y-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label for="name" class="text-sm font-bold text-[--ocean] mb-2">Full Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                required 
                placeholder="Juan Dela Cruz"
                class="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#737B4C] transition"
                :disabled="isSubmitting"
              >
            </div>

            <div class="flex flex-col">
              <label for="email" class="text-sm font-bold text-[--ocean] mb-2">Email Address</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                required 
                placeholder="email@example.com"
                class="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#737B4C] transition"
                :disabled="isSubmitting"
              >
            </div>

            <div class="flex flex-col">
              <label for="phone" class="text-sm font-bold text-[--ocean] mb-2">Phone Number</label>
              <input 
                id="phone"
                type="tel" 
                name="phone" 
                required 
                placeholder="0912 345 6789"
                class="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#737B4C] transition"
                :disabled="isSubmitting"
              >
            </div>

            <div class="flex flex-col">
              <label for="recipient" class="text-sm font-bold text-[--ocean] mb-2">Inquiry Type / Recipient</label>
              <select 
                id="recipient"
                name="recipient_category" 
                required
                class="border border-gray-200 p-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#737B4C] transition appearance-none"
                :disabled="isSubmitting"
              >
                <option value="General Inquiry (caramoanislands@duck.com)">General Inquiry</option>
                <option value="LGU Official (lgucaramoan.mo@gmail.com)">LGU - Official Inquiries</option>
                <option value="CARAMOAN TRAVEL AND TOURS SERVICES (caramoan@gmail.com)">Tour: Caramoan Travel & Tours</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col">
            <label for="address" class="text-sm font-bold text-[--ocean] mb-2">Address</label>
            <input 
              id="address"
              type="text" 
              name="address" 
              required 
              placeholder="City, Province, or Full Address"
              class="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#737B4C] transition"
              :disabled="isSubmitting"
            >
          </div>

          <div class="flex flex-col">
            <label for="message" class="text-sm font-bold text-[--ocean] mb-2">Your Message</label>
            <textarea 
              id="message"
              name="message" 
              rows="5" 
              required 
              placeholder="How can we help you?"
              class="border border-gray-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#737B4C] transition"
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <input type="hidden" name="_subject" value="New Inquiry from Caramoan Islands Website">

          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="w-full md:w-auto bg-[#737B4C] text-white px-10 py-4 rounded-full font-bold 
                   hover:bg-[#5f663f] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>

      <!-- LGU Contacts Section -->
      <div class="border p-8 rounded-3xl">
        <h2 class="text-2xl font-bold text-[--ocean] mb-6">Municipality of Caramoan (LGU) Official Contacts</h2>
        <p class="text-[--ocean]/80 mb-6 leading-relaxed">
          The Local Government Unit handles tourism information, visitor permits, island-hopping coordination, and municipal services.
        </p>
        <ul class="space-y-4 text-[--ocean] text-lg">
          <li>
            <strong>Official Facebook Page (LGU Caramoan):</strong><br>
            <a href="https://www.facebook.com/lgucaramoancamsur" target="_blank"
              class="underline hover:text-[--ocean] font-medium">LGU CARAMOAN</a>
          </li>
          <li>
            <strong>LGU Hotline Numbers:</strong><br>
            📱 0963-701-6888 | 📱 0912-858-0600
          </li>
          <li>
            <strong>Email:</strong><br>
            <a href="mailto:lgucaramoan.mo@gmail.com"
              class="underline hover:text-[--ocean]">lgucaramoan.mo@gmail.com</a>
          </li>
          <li>
            <strong>Location:</strong> Caramoan Municipal Hall, Caramoan, Camarines Sur
          </li>
        </ul>
      </div>

      <!-- References -->
      <div class="mt-12 text-center text-sm text-[--ocean]/70">
        <h3 class="text-xl font-bold text-[--ocean] mb-4">References & Sources</h3>
        <ul class="flex flex-wrap justify-center gap-6">
          <li>
            <a href="https://www.facebook.com/lgucaramoancamsur" target="_blank"
              class="underline hover:text-[--ocean]">Official LGU Caramoan Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus, select:focus, textarea:focus {
  border-color: transparent;
}

/* Custom Dropdown Arrow */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23737B4C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
}
</style>