<template>
  <div class="relative w-full overflow-hidden h-screen">
    <video 
      width="100%" 
      height="100%" 
      class="absolute w-full h-full object-cover left-0 top-0" 
      autoplay 
      muted 
      loop
    >
      <source src="/video/caramoan4k.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 z-20 flex flex-col justify-center items-center text-center">
      <Container>
        <div class="flex flex-col gap-0">
          <h1 class="font-island text-[#737B4C] text-[3rem] md:text-[6rem] lg:text-[7rem] drop-shadow-lg">
            CARAMOAN
          </h1>
          <h1 class="z-10 sm:-mt-12 text-white text-[2rem] sm:text-[3.5rem] font-extralight drop-shadow-md">
            Islands in the Philippines
          </h1>
        </div>
        <div class="mx-auto w-full max-w-4xl mt-12 sm:mt-4 text-white px-4">
          <p class="text-lg sm:text-xl leading-relaxed">
            From the <strong>hidden lagoons of Matukad</strong> to the <strong>floating cottages of Manlawi</strong>, 
            this is a sanctuary where the tide dictates the day.
          </p>
        </div>
      </Container>
    </div>

    <div class="absolute inset-0 bg-black/50 z-10"></div>

    <footer class="absolute bottom-0 w-full z-30 py-8">
      <div class="container mx-auto text-center text-white/80">
        <p>© {{ new Date().getFullYear() }} Caramoan Island Tourism</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Ensure font-island is defined or imported for the main heading */
.font-island {
  font-family: 'Island Moments', cursive; /* Example fallback */
}
</style>