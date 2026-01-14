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
      headers: { 'Accept': 'application/json' }
    })

    if (response.ok) {
      isSuccess.value = true
      form.reset()
      setTimeout(() => { router.push('/thank-you') }, 2000)
    } else {
      const data = await response.json()
      errorMessage.value = data.error || 'Failed to send message. Please try again.'
    }
  } catch (err) {
    errorMessage.value = 'Network error. Please check your connection and try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24">
    
    <div class="text-center mb-10 md:mb-16">
      <h1 class="font-island text-[3rem] sm:text-[4.5rem] md:text-[6rem] text-green leading-none mb-4">
        Get in Touch
      </h1>
      <p class="text-ocean/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
        Reach out to the Municipality of Caramoan for official permits, or contact our tour partners to book your next island adventure.
      </p>
    </div>

    <div class="max-w-5xl mx-auto space-y-8 md:space-y-12">
      
      <div class="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl border border-ocean/5 relative overflow-hidden">
        <h2 class="text-2xl md:text-3xl font-black text-ocean mb-8 flex items-center gap-3">
          <span class="w-2 h-8 bg-green rounded-full"></span>
          Send a Message
        </h2>

        <div v-if="isSuccess" class="text-center py-12 md:py-20 animate-pulse">
          <div class="text-6xl mb-6">📩</div>
          <h3 class="text-2xl font-black text-ocean mb-2">Message Received!</h3>
          <p class="text-ocean/60">Preparing your confirmation...</p>
        </div>

        <div v-if="errorMessage && !isSuccess" 
          class="bg-red-50 border-2 border-red-100 text-red-600 p-4 rounded-2xl mb-8 text-sm font-bold flex items-center gap-3">
          <span>⚠️</span> {{ errorMessage }}
        </div>

        <form v-if="!isSuccess" @submit="handleSubmit" class="space-y-6 md:space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-xs font-black uppercase tracking-widest text-ocean/40 ml-1">Full Name</label>
              <input id="name" type="text" name="name" required placeholder="e.g. Juan Dela Cruz"
                class="bg-ocean/5 border-2 border-transparent p-4 md:p-5 rounded-2xl focus:bg-white focus:border-green transition-all outline-none text-ocean font-medium"
                :disabled="isSubmitting">
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-xs font-black uppercase tracking-widest text-ocean/40 ml-1">Email Address</label>
              <input id="email" type="email" name="email" required placeholder="juan@example.com"
                class="bg-ocean/5 border-2 border-transparent p-4 md:p-5 rounded-2xl focus:bg-white focus:border-green transition-all outline-none text-ocean font-medium"
                :disabled="isSubmitting">
            </div>

            <div class="flex flex-col gap-2">
              <label for="phone" class="text-xs font-black uppercase tracking-widest text-ocean/40 ml-1">Phone Number</label>
              <input id="phone" type="tel" name="phone" required placeholder="0912 345 6789"
                class="bg-ocean/5 border-2 border-transparent p-4 md:p-5 rounded-2xl focus:bg-white focus:border-green transition-all outline-none text-ocean font-medium"
                :disabled="isSubmitting">
            </div>

            <div class="flex flex-col gap-2">
              <label for="recipient" class="text-xs font-black uppercase tracking-widest text-ocean/40 ml-1">Inquiry Category</label>
              <div class="relative">
                <select id="recipient" name="recipient_category" required
                  class="w-full bg-ocean/5 border-2 border-transparent p-4 md:p-5 rounded-2xl focus:bg-white focus:border-green transition-all outline-none text-ocean font-medium appearance-none"
                  :disabled="isSubmitting">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="LGU Official">LGU - Official Business</option>
                  <option value="Tour Booking">Tour & Travel Services</option>
                </select>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="address" class="text-xs font-black uppercase tracking-widest text-ocean/40 ml-1">Home Address</label>
            <input id="address" type="text" name="address" required placeholder="City, Province"
              class="bg-ocean/5 border-2 border-transparent p-4 md:p-5 rounded-2xl focus:bg-white focus:border-green transition-all outline-none text-ocean font-medium"
              :disabled="isSubmitting">
          </div>

          <div class="flex flex-col gap-2">
            <label for="message" class="text-xs font-black uppercase tracking-widest text-ocean/40 ml-1">Your Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell us more about your inquiry..."
              class="bg-ocean/5 border-2 border-transparent p-4 md:p-5 rounded-2xl focus:bg-white focus:border-green transition-all outline-none text-ocean font-medium resize-none"
              :disabled="isSubmitting"></textarea>
          </div>

          <input type="hidden" name="_subject" value="New Inquiry from Caramoan Islands Website">

          <div class="pt-4">
            <button type="submit" :disabled="isSubmitting"
              class="w-full md:w-auto min-w-[200px] bg-green text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-green/20 hover:-translate-y-1 transition-all disabled:opacity-50">
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Sending...
              </span>
            </button>
          </div>
        </form>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-red-50 border-2 border-red-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
          <h2 class="text-2xl font-black text-red-600 mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-red-600 rounded-full"></span>
            Emergency Hotlines
          </h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center border-b border-red-200/50 pb-3">
              <span class="font-bold text-ocean">PNP Caramoan</span>
              <a href="tel:09985985990" class="font-black text-red-600 hover:underline">0998-598-5990</a>
            </div>
            <div class="flex justify-between items-center border-b border-red-200/50 pb-3">
              <span class="font-bold text-ocean">MDRRMO</span>
              <a href="tel:09094641168" class="font-black text-red-600 hover:underline">0909-464-1168</a>
            </div>
            <div class="flex justify-between items-center border-b border-red-200/50 pb-3">
              <span class="font-bold text-ocean">Rural Health Unit</span>
              <a href="tel:09171168353" class="font-black text-red-600 hover:underline">0917-116-8353</a>
            </div>
            <div class="flex justify-between items-center border-b border-red-200/50 pb-3">
              <span class="font-bold text-ocean">BFP Caramoan</span>
              <a href="tel:09106779916" class="font-black text-red-600 hover:underline">0910-677-9916</a>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-bold text-ocean">Municipal Hospital</span>
              <a href="tel:09175230466" class="font-black text-red-600 hover:underline">0917-523-0466</a>
            </div>
          </div>
        </div>

        <div class="bg-ocean/5 border-2 border-ocean/5 rounded-[2.5rem] p-8 md:p-10">
          <h2 class="text-2xl font-black text-ocean mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-green rounded-full"></span>
            Tourism Hotlines
          </h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center border-b border-ocean/10 pb-3">
              <span class="font-bold text-ocean/70">Bikal Tourism Booth</span>
              <a href="tel:09853784038" class="font-black text-ocean hover:text-green transition-colors">09853784038</a>
            </div>
            <div class="flex justify-between items-center border-b border-ocean/10 pb-3">
              <span class="font-bold text-ocean/70">Paniman Tourism Booth</span>
              <a href="tel:09853784037" class="font-black text-ocean hover:text-green transition-colors">09853784037</a>
            </div>
            <div class="flex justify-between items-center border-b border-ocean/10 pb-3">
              <span class="font-bold text-ocean/70">Guijalo Tourism Booth</span>
              <a href="tel:09853784036" class="font-black text-ocean hover:text-green transition-colors">09853784036</a>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-bold text-ocean/70">Office Hotline</span>
              <a href="tel:09074665593" class="font-black text-ocean hover:text-green transition-colors">09074665593</a>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-5 gap-8">
        <div class="lg:col-span-3 bg-ocean rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-2xl md:text-3xl font-black mb-6">LGU Official Contacts</h2>
            <p class="text-white/70 mb-8 leading-relaxed">
              Handles tourism information, visitor environmental fees, and official coordination.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-8">
              <div class="space-y-1">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-green">Facebook</h4>
                <a href="https://www.facebook.com/lgucaramoancamsur" target="_blank" class="text-lg font-bold hover:text-green transition-colors">LGU CARAMOAN</a>
              </div>
              <div class="space-y-1">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-green">Hotlines</h4>
                <p class="text-lg font-bold">0963-701-6888<br>0912-858-0600</p>
              </div>
              <div class="space-y-1">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-green">Email Address</h4>
                <a href="mailto:lgucaramoan.mo@gmail.com" class="text-lg font-bold hover:text-green transition-colors break-all">lgucaramoan.mo@gmail.com</a>
              </div>
              <div class="space-y-1">
                <h4 class="text-[10px] font-black uppercase tracking-widest text-green">Municipal Hall</h4>
                <p class="text-sm opacity-80 font-medium">Caramoan, Camarines Sur, Philippines</p>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full"></div>
        </div>

        <div class="lg:col-span-2 flex flex-col gap-6">
          <div class="bg-green/10 border-2 border-green/10 p-8 rounded-[2.5rem] flex-grow">
            <h3 class="font-black text-ocean mb-4">Tour Services</h3>
            <p class="text-sm text-ocean/70 leading-relaxed mb-4">
              For boat rentals and local guides, we recommend contacting the LGU-accredited operators directly for the safest experience.
            </p>
            <ul class="text-xs font-bold text-ocean flex flex-col gap-2">
              <li>• Accredited Island Hopping</li>
              <li>• Environmental User's Fee Support</li>
              <li>• Standardized Boat Rates</li>
            </ul>
          </div>
          
          <div class="text-center md:text-left px-4">
            <h4 class="text-xs font-black uppercase tracking-widest text-ocean/30 mb-2">Sources</h4>
            <a href="https://www.facebook.com/lgucaramoancamsur" target="_blank"
              class="text-xs font-bold text-green underline underline-offset-4">Official LGU Facebook Page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom Scrollbar for Textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

/* Custom Select Dropdown Arrow */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235f663f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.25rem center;
  background-size: 1.25em;
}

/* Fluid Typography */
h1 { text-wrap: balance; }
</style>