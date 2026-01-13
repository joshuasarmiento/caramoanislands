<template>
  <div class="relative w-full overflow-hidden h-screen">
    <video width="100%" height="100%" class="absolute w-full h-full object-cover left-0 top-0" autoplay muted loop>
      <source src="/video/caramoan4k.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 z-20 flex flex-col justify-center items-center text-center">
      <Container>
        <div class="flex flex-col gap-0">
          <h1 class="font-island font-bold text-green text-[6rem] lg:text-[7rem] drop-shadow-lg">
            CARAMOAN
          </h1>
          <h1 class="z-10 sm:-mt-12 text-white text-[2rem] sm:text-[2.5rem] font-extralight drop-shadow-md">
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
      <div class="pt-8 text-center">
        <p class="text-xs text-white/80">
          © {{ new Date().getFullYear() }} CaramoanIslands.ph. All rights reserved. Handcrafted in Caramoan.
        </p>
      </div>
    </footer>
  </div>
</template>