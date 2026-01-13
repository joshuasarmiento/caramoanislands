<template>
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24">
    
    <div class="text-center mb-12 md:mb-20">
      <h1 class="font-island text-[3rem] sm:text-[4.5rem] md:text-[6rem] text-green leading-none mb-4">
        Getting to Paradise
      </h1>
      <p class="text-ocean/70 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
        Caramoan is more accessible than ever in 2026. Whether you prefer a scenic land journey or a quick flight, here is your complete transit blueprint.
      </p>
    </div>

    <div class="max-w-6xl mx-auto space-y-12 md:space-y-20">
      
      <div class="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-ocean/5">
        <div class="p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 class="text-2xl md:text-3xl font-black text-ocean">Route Overview</h2>
            <p class="text-ocean/50 text-sm">Mainland travel from Manila to Caramoan Town Proper</p>
          </div>
          <span class="bg-green/10 text-green px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            ~480 KM Distance
          </span>
        </div>
        <div class="relative w-full h-72 md:h-125 bg-ocean/5">
          <iframe class="w-full h-full grayscale-[20%] contrast-[1.1]" loading="lazy" allowfullscreen 
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3936287.686482!2d120.984222!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3397d40000000001%3A0x0!2sManila%2C%20Metro%20Manila%2C%20Philippines!3m2!1d14.5995124!2d120.9842195!4m5!1s0x33a0b0b0b0b0b0b1%3A0x0!2sCaramoan%2C%20Camarines%20Sur%2C%20Philippines!3m2!1d13.7667!2d123.85!5e0!3m2!1sen!2sph!4v173xxxxxxx"
            title="Manila to Caramoan Route"></iframe>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        
        <div class="group bg-white p-6 md:p-10 rounded-[2.5rem] shadow-lg border border-ocean/5 hover:border-green/30 transition-all">
          <div class="w-14 h-14 bg-ocean text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6v6M16 6v6M4 18h16M7 21h10M4 8v10h16V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z"/></svg>
          </div>
          <h2 class="text-2xl font-black text-ocean mb-4 leading-tight">1. Direct Bus from Manila</h2>
          <p class="text-ocean/60 mb-6 text-sm md:text-base leading-relaxed">Most convenient land route. Direct access to town proper with no boat transfers required.</p>
          
          <ul class="space-y-4">
            <li v-for="(item, key) in busDetails" :key="key" class="flex gap-4 items-start">
              <span class="text-[10px] font-black uppercase tracking-widest text-green mt-1.5 w-20 shrink-0">{{ key }}</span>
              <span class="text-sm md:text-base text-ocean/80 font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="group bg-white p-6 md:p-10 rounded-[2.5rem] shadow-lg border border-ocean/5 hover:border-green/30 transition-all">
          <div class="w-14 h-14 bg-green text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
          </div>
          <h2 class="text-2xl font-black text-ocean mb-4 leading-tight">2. Fly to Naga + Transfer</h2>
          <p class="text-ocean/60 mb-6 text-sm md:text-base leading-relaxed">Fastest overall travel time. Best for those with limited vacation days.</p>
          
          <ul class="space-y-4">
            <li v-for="(item, key) in flyDetails" :key="key" class="flex gap-4 items-start">
              <span class="text-[10px] font-black uppercase tracking-widest text-green mt-1.5 w-20 shrink-0">{{ key }}</span>
              <span class="text-sm md:text-base text-ocean/80 font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2 bg-ocean text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div class="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12">
            <div v-for="alt in alternatives" :key="alt.title">
              <h3 class="text-green font-black uppercase tracking-widest text-xs mb-3">{{ alt.tag }}</h3>
              <h4 class="text-xl font-bold mb-3">{{ alt.title }}</h4>
              <p class="text-sm text-white/70 leading-relaxed">{{ alt.desc }}</p>
            </div>
          </div>
          <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full"></div>
        </div>
      </div>

      <section class="bg-green/5 rounded-[2.5rem] p-8 md:p-12 border border-green/10">
        <h2 class="text-2xl md:text-3xl font-black text-ocean mb-8 text-center md:text-left">Insider Travel Tips (2026)</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tip in travelTips" :key="tip" class="flex items-start gap-4">
            <div class="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <p class="text-sm md:text-base text-ocean/80 font-medium leading-tight">{{ tip }}</p>
          </div>
        </div>
      </section>

      <section class="text-center pt-12">
        <h2 class="font-island text-[3rem] md:text-[5rem] text-green leading-none mb-6">Ultimate Guide</h2>
        <p class="text-ocean/70 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          Everything you need to plan your dream trip: budget breakdowns, sample itineraries, and real expenses.
        </p>

        <div class="relative max-w-5xl mx-auto group">
          <div class="absolute -inset-2 bg-gradient-to-r from-green to-ocean rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div class="relative glass rounded-[2rem] overflow-hidden shadow-2xl bg-black">
            <div class="aspect-video">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s6HJlStRc8I?si=dkLUQQ89VLgniir6"
                title="Ultimate Caramoan Travel Guide" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap justify-center gap-4 text-xs font-bold text-ocean/40 tracking-widest uppercase">
            <span>📅 2026 Updated</span>
            <span>💰 Budget Breakdown</span>
            <span>🏝️ 9 Islands Tour</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const busDetails = {
  fleet: "Raymond, Peñafrancia, DLTB, Bicol Isarog",
  terminals: "Cubao, Pasay, Sampaloc (Manila)",
  time: "10–14 Hours (Overnight is best)",
  fare: "₱1,000 – ₱1,500 (Executive/AC)"
}

const flyDetails = {
  routes: "Cebu Pacific / PAL to Naga (WNP)",
  transit: "Van/Taxi to Naga Central Bus Terminal",
  final: "Bus to Caramoan (Florencia, MRR)",
  total: "6–9 Hours (Door-to-door)"
}

const alternatives = [
  { tag: "Legacy Route", title: "Van + Boat via Sabang", desc: "Note: Regular boat trips from Sabang are now infrequent. Land travel is currently the primary and safest option." },
  { tag: "From Legazpi", title: "Albay Route", desc: "Coming from Mayon? Take a bus to Naga (3-4 hrs) then transfer to the direct Caramoan bus line." },
  { tag: "From Catanduanes", title: "Virac Route", desc: "Fly to Virac, take a van to Codon Port, and charter a private boat. Great for island hopping combos." }
]

const travelTips = [
  "Carry cash (small bills) — Limited ATMs in town.",
  "Book bus/flight tickets 2-4 weeks in advance.",
  "Pack light for easy transfers between van and boat.",
  "Check weather — seas can get rough in typhoon season.",
  "Aim to arrive in Naga before noon for same-day buses."
]
</script>

<style scoped>
/* Smooth typography scaling */
h1 { text-wrap: balance; }

/* Custom Scrollbar for better UX on mobile */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #5f663f;
  border-radius: 10px;
}
</style>