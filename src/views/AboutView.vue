<template>
  <div class="container px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-16 md:mt-24">
    
    <h1 class="text-center mb-10 md:mb-20">
      <span class="block font-island text-[3rem] sm:text-[4.5rem] md:text-[6rem] text-green leading-none drop-shadow-sm">
        About Caramoan
      </span>
      <span class="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-ocean/40 block mt-2">
        A Peninsula of Legends & Limestone
      </span>
    </h1>

    <div class="max-w-5xl mx-auto space-y-16 md:space-y-24">
      
      <section class="grid lg:grid-cols-5 gap-8 items-start">
        <div class="lg:col-span-2">
          <h2 class="text-2xl md:text-3xl font-black text-ocean leading-tight mb-4">
            History: From Legends to the Global Stage
          </h2>
          <div class="w-20 h-1.5 bg-green rounded-full"></div>
        </div>
        <div class="lg:col-span-3 text-ocean space-y-6 leading-relaxed text-base md:text-lg opacity-90">
          <p>
            Caramoan’s story begins with a legend. The town was originally called <em class="text-green font-bold">"Carahan,"</em> named after the
            sea turtles that once nested in abundance along its shores. Over centuries, as Spanish missionaries arrived
            in the early 1600s, the name evolved, but the deep connection to nature remained.
          </p>
          <div class="bg-green/5 border-l-4 border-green p-6 rounded-r-2xl italic shadow-sm">
            "You can still see this colonial footprint today in the St. Michael the Archangel Parish (founded 1619), a red-brick testament to the town's resilience."
          </div>
          <p>
            For generations, Caramoan remained a "secret paradise." That changed in the late 2000s when the global <strong>Survivor</strong> franchise discovered its rugged, untouched beauty. Despite the fame, Caramoan has miraculously kept its soul—remaining a sanctuary where nature, not commercialism, rules.
          </p>
        </div>
      </section>

      <section class="grid lg:grid-cols-5 gap-8 items-start">
        <div class="lg:col-span-3 order-2 lg:order-1 text-ocean space-y-6 leading-relaxed text-base md:text-lg opacity-90">
          <p>
            Located at the lower tip of Camarines Sur, Caramoan is a jagged peninsula jutting out into the Pacific Ocean. The landscape is dramatic—think towering karst cliffs that rival El Nido, but without the crowds.
          </p>
          <p>
            The geography here plays tricks on the eye. At <strong>Matukad Island</strong>, you’ll find a hidden lagoon guarded by a mythical milkfish. At <strong>Lahos Island</strong>, the beach completely disappears at high tide, sandwiching you between massive rocks.
          </p>
          
        </div>
        <div class="lg:col-span-2 order-1 lg:order-2">
          <h2 class="text-2xl md:text-3xl font-black text-ocean leading-tight mb-4">
            Geography: The Edge of the Peninsula
          </h2>
          <div class="w-20 h-1.5 bg-green rounded-full"></div>
        </div>
      </section>

      <section class="bg-ocean rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
        <div class="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-black mb-6">Culture: The Warmth of the "Oragon"</h2>
            <p class="text-lg opacity-90 leading-relaxed mb-6">
              To visit Caramoan is to experience the heart of Bicolandia. The locals, described as <em>Oragon</em> (strong-willed and brave), are deeply hospitable. Life here revolves around the rhythm of the tides.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">🌶️ Spicy Cuisine</span>
              <span class="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">🥥 Coconut Milk</span>
            </div>
          </div>
          <div class="space-y-4">
            <div class="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
              <h4 class="font-bold text-green mb-2 uppercase text-xs tracking-widest">Must Try Dish</h4>
              <p class="text-sm opacity-80">Authentic <strong>Laing</strong> (dried taro leaves) and the fiery <strong>Bicol Express</strong>. A meal here is a warm welcome offered with a smile.</p>
            </div>
          </div>
        </div>
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-green/20 rounded-full blur-3xl"></div>
      </section>

      <section class="pt-8">
        <h3 class="text-xl md:text-2xl font-black mb-8 text-ocean text-center lg:text-left">References & Notable Sources</h3>
        <div class="grid sm:grid-cols-2 gap-6 md:gap-10">
          <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-ocean/5">
            <h4 class="font-black text-xs uppercase tracking-[0.2em] text-ocean/40 mb-6">Historical & Cultural</h4>
            <ul class="space-y-6">
              <li v-for="link in historyLinks" :key="link.title" class="group">
                <p class="text-sm font-bold text-ocean mb-1">{{ link.title }}</p>
                <a :href="link.url" target="_blank" class="text-xs text-green hover:underline break-all block">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-ocean/5">
            <h4 class="font-black text-xs uppercase tracking-[0.2em] text-ocean/40 mb-6">Media & Pop Culture</h4>
            <ul class="space-y-6">
              <li class="group">
                <p class="text-sm font-bold text-ocean mb-1">Survivor US (Seasons 25 & 26)</p>
                <div class="flex gap-4 text-xs">
                  <a href="https://en.wikipedia.org/wiki/Survivor:_Philippines" target="_blank" class="text-green hover:underline">Philippines</a>
                  <a href="https://en.wikipedia.org/wiki/Survivor:_Caramoan" target="_blank" class="text-green hover:underline">Caramoan</a>
                </div>
              </li>
              <li class="group">
                <p class="text-sm font-bold text-ocean mb-1">The "Enchanted Milkfish" Myth</p>
                <a href="http://pinoywanderingboy.blogspot.com" target="_blank" class="text-green hover:underline text-xs block">Documented Folklore</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mt-16 pt-16 border-t border-ocean/10 text-center">
        <h2 class="text-3xl md:text-5xl font-black text-ocean mb-6 leading-tight">
          Experience the Adventure
        </h2>
        <p class="text-ocean/70 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
          Follow along as explorers discover hidden lagoons and feel the thrill of the islands — perfect for getting excited about your own trip!
        </p>

        <div class="relative group max-w-4xl mx-auto">
          <div class="absolute -inset-1 bg-gradient-to-r from-green to-ocean rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative aspect-video rounded-[1.8rem] overflow-hidden shadow-2xl bg-black">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/njDmBKibUeo?si=0nRpi4SgINnTi2vd"
              title="Caramoan Islands Adventure Tour" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <p class="mt-8 text-xs md:text-sm text-ocean/40 italic font-medium">
          Episode: Alamat ng Bangus & Bicol Exploration
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
// Organized data for the references
const historyLinks = [
  { title: "Etymology ('Carahan')", label: "View Local History Record", url: "https://istaran.wordpress.com/caramoan/history/" },
  { title: "St. Michael Parish (1619)", label: "View Historical Marker", url: "https://commons.wikimedia.org/wiki/File:St._Michael_Parish_Church_of_Caramoan.jpg" },
  { title: "National Park Status", label: "Official Gazette Proclamation", url: "https://www.officialgazette.gov.ph/" }
]
</script>

<style scoped>
/* Smooth Scroll Behavior */
.container {
  scroll-behavior: smooth;
}

/* Fluid Typography / Text Balancing */
h1, h2, h3 {
  text-wrap: balance;
}

/* Custom shadow for cards */
.shadow-sm {
  box-shadow: 0 10px 40px -10px rgba(26, 54, 93, 0.05);
}
</style>