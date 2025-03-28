<template>
  <div class="font-sans">
    <CallButton />
    <!-- Header -->
    <header class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <img class="w-[120px]" src="/noa.jpg" alt="">
        <!-- <a href="#" class="text-2xl font-bold text-amber-500">NOA<span class="text-black text-sm block">BUILDERS</span></a> -->
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <a href="#" class="text-sm font-medium">{{ $t('navbar_home_text') }}</a>
        <a href="#" class="text-sm font-medium">{{ $t('services') }}</a>
        <a href="#" class="text-sm font-medium">{{ $t('contact') }}</a>
        <a href="#" class="text-sm font-medium">{{ $t('product_catalog') }}</a>
      </nav>

      <div class="flex items-center gap-3">
        <h3 class="font-medium">+998 90 000 12 12</h3>
        <div class="dropdown sm:shadow-lg">
      <!-- Default selected -->
      <div class="dropdown-select  transition duration-300 ease-in-out hover:bg-[#DFBA7F]" @click="toggleDropdown">
        <img class="w-12" :src="selectedFlag.src" :alt="selectedFlag.label" />
        <p>
          {{ selectedFlag.label }}
        </p>
      </div>
      <!-- Options -->
      <div v-if="isOpen" class="dropdown-options">
        <div
          v-for="(option, index) in optionsR"
          :key="index"
          @click="selectOption(option)"
        >
          <img class="w-12" :src="option.src" :alt="option.label" />

          <p>
            {{ option.label }}
          </p>
        </div>
      </div>
  
    </div>

    <!-- <button class="hidden md:block rounded-[4px] bg-black text-[#DFBA7F] px-4 py-2 text-sm">{{ $t('login') }}</button> -->
    <button class="md:hidden cursor-pointer" @click="mobileMenuOpen = !mobileMenuOpen">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
      </div>
      
  
      <!-- <Transition>
          <div v-if="isMenuOpen" class="bg-black/40 for-bg w-full max-w-full h-screen fixed top-0 left-0">
          <div
            class="mobile-menu bg-white bg-opacity-10 backdrop-blur-lg shadow-lg w-[100%] fixed left-0 top-0 flex flex-col items-start h-screen justify-start">
            <div class="logo flex py-11 px-2 justify-between items-center w-full">
        <img class="sm:w-34 h-[40px]" src="@/assets/images/logo-bizcom.png" alt="Error">
              <i @click="isMenuOpen = false;" class="fa-solid fa-xmark text-2xl text-grey-500 dark:text-white cursor-pointer text-white hover:text-blue-500"></i>

            </div>

            
 
           
 
            <ul class="menu-mini p-2 flex flex-col justify-start items-start gap-6 pt-14">
              

          <li class="text-[15px] font-medium hover:bg-white/10 p-2 rounded-sm text-white transition-all duration-300 ease-in-out  " v-for="item in data">
            <RouterLink :to="item.routerlink">{{  $t(item.text) }}</RouterLink>
          </li>


            </ul>

            <div class='socials flex gap-4 mt-10 p-4'> 
              <n-button @click="handleClick" type="info">
      {{ $t('with_us_link') }}
      </n-button>
            </div>
          </div>
        </div>
      </Transition> -->

      <Transition>
          <div v-if="mobileMenuOpen" class="bg-black/40 for-bg w-full max-w-full h-screen fixed z-50 top-0 left-0">
          <div
            class="mobile-menu bg-black/40 bg-opacity-10 backdrop-blur-lg shadow-lg w-[100%] fixed z-50 left-0 top-0 flex flex-col items-start h-screen justify-start">
            <div class="logo flex py-11 px-2 justify-between items-center w-full">
              <!-- <h1 class="">test</h1> -->
        <img class="sm:w-34 h-[40px]" src="/noa.jpg" alt="Error">
              <!-- <i @click="mobileMenuOpen = false;" class="fa-solid fa-xmark text-2xl text-grey-500 dark:text-white cursor-pointer text-white hover:text-blue-500"></i> -->
              <X class="text-white cursor-pointer" @click="mobileMenuOpen = false;"  />
            </div>

            
 
           
 
            <ul class="menu-mini p-2 flex flex-col justify-start items-start gap-6 pt-14">
              

          <li class="cursor-pointer text-[15px] font-medium hover:bg-white/10 p-2 rounded-sm text-white transition-all duration-300 ease-in-out">
            <RouterLink to="">{{ $t('navbar_home_text') }}</RouterLink>
          </li>

          <li class="cursor-pointer text-[15px] font-medium hover:bg-white/10 p-2 rounded-sm text-white transition-all duration-300 ease-in-out">
            <RouterLink to="">{{ $t('services') }}</RouterLink>
          </li>

          <li class="cursor-pointer text-[15px] font-medium hover:bg-white/10 p-2 rounded-sm text-white transition-all duration-300 ease-in-out">
            <RouterLink to="">{{ $t('contact') }}</RouterLink>
          </li>

          <li class="cursor-pointer text-[15px] font-medium hover:bg-white/10 p-2 rounded-sm text-white transition-all duration-300 ease-in-out">
            <RouterLink to="">{{ $t('product_catalog') }}</RouterLink>
          </li>

            </ul>


      <!-- <button class="mx-4 my-8 rounded-[4px] bg-black text-[#DFBA7F] px-4 py-2 text-sm">{{ $t('login') }}</button> -->

            <!-- <div class='socials flex gap-4 mt-10 p-4'> 
              <n-button @click="handleClick" type="info">
      {{ $t('with_us_link') }}
      </n-button>
            </div> -->
            <!-- <div class="number flex flex-col items-start mt-5 pt-8 gap-3">
               <i class="fa-solid fa-phone text-brand-blue"></i>
              <h3 class="font-medium text-blue-800 hover:font-bold text-[16px]">+998 91 463 33 22</h3>
              <h3 class="font-medium  text-blue-800 hover:font-bold text-[16px]">+998 93 363 33 22</h3>
            </div> -->
          </div>
        </div>
        
      </Transition>
    </header>

    <div class="w-full max-w-full border border-gray-200">

    </div>
    
    
    
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="flex items-center justify-between gap-8 flex-wrap md:flex-nowrap">
        <div>
          <h1 class="text-3xl md:text-[55px] xl:text-[71px] w-full max-w-[903px] font-medium mb-6">{{ $t('hero_title') }}</h1>
          <p class="text-gray-700 text-sm md:text-xl xl:text-2xl w-full max-w-[809px] mb-6">
            {{ $t('hero_subtitle') }}
          </p>
          <!-- <button class="bg-black text-[#DFBA7F] px-3 py-1 md:px-6 md:py-3 mb-10">Start Project</button> -->
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="sm:text-center">
              <div class="text-[40px] md:text-[70px] text-[#545454] font-bold">100+</div>
              <div class="text-xl text-gray-600">{{ $t('successful_projects') }}</div>
            </div>
            <div class="sm:text-center">
              <div class="text-[40px] md:text-[70px] text-[#545454] font-bold">250+</div>
              <div class="text-xl text-gray-600">{{ $t('successful_clients') }}</div>
            </div>
            <div class="sm:text-center">
              <div class="text-[40px] md:text-[70px] text-[#545454] font-bold">50+</div>
              <div class="text-xl text-gray-600">{{ $t('modern_equipment') }}</div>
            </div>
          </div>
        </div>
        <div class="relative z-0">
          <img class="w-full max-w-[500px]" src="/hero.png" alt="Error">
          <!-- <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bnCmc6BKpj5XzlP270h6rnEBwaWYgr.png" alt="Construction site" class="w-full h-auto rounded-lg object-cover"> -->
          <!-- <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iah8E094tN6pAAvFeJWrlSqfgMg7PE.png" alt="Construction worker" class="absolute -bottom-10 -left-10 w-2/3 h-auto rounded-lg object-cover border-4 border-white shadow-lg hidden md:block"> -->
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="flex items-center mb-10">
        <div class="w-12 h-0.5 bg-black mr-4"></div>
        <h2 class="text-4xl md:text-[58px] text-[#1f1f1f] font-bold">{{ $t('xizmatlar') }}</h2>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6">
    <div class="mb-4">
      <img src="/xizmatlar-1-icon.png" alt="Qurilish materiallari icon">
    </div>
    <h3 class="text-lg font-bold mb-2">{{ $t('delivery_construction_materials') }}</h3>
    <p class="text-gray-600 mb-4">
      {{ $t('building_materials') }}
    </p>
  </div>

  <div class="p-6">
    <div class="mb-4">
      <img src="/xizmatlar-2-icon.png" alt="Texnik uskunalar bilan ta'minlash icon">
    </div>
    <h3 class="text-lg font-bold mb-2">{{ $t('technical_equipment') }}</h3>
    <p class="text-gray-600 mb-4">
      {{ $t('construction_machinery') }}
    </p>
  </div>

  <div class="p-6">
    <div class="mb-4">
      <img src="/xizmatlar-3-icon.png" alt="">
    </div>
    <h3 class="text-lg font-bold mb-2">{{ $t('logistics') }}</h3>
    <p class="text-gray-600 mb-4">
      {{ $t('complex_delivery') }}
    </p>
  </div>
      </div>
    </section>
    
    <!-- Materials Delivery Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="order-2 md:order-1">
          <img src="/mask-gr.png" alt="Construction site" class="w-full max-w-[711px] h-auto rounded-lg object-cover">
        </div>
        <div class="order-1 md:order-2">
  <h2 class="text-3xl md:text-[48px] lg:text-[58px] font-semibold w-full max-w-[704px] text-[#1f1f1f] mb-4">
    {{ $t('construction_materials') }}
  </h2>
  <p class="text-[#545454] text-sm md:text-2xl w-full max-w-[722px] mb-6">
    {{ $t('construction_materials_desc') }}
  </p>
<!-- 
  <div class="border-t border-gray-200 py-4">
    <div class="flex justify-between items-center">
      <h3 class="font-medium text-lg md:text-2xl text-[#1f1f1f]">
        {{ $t('technical_equipment') }}
      </h3>
      <button class="text-2xl">+</button>
    </div>
  </div>

  <div class="border-t border-gray-200 py-4">
    <div class="flex justify-between items-center">
      <h3 class="font-medium text-lg md:text-2xl text-[#1f1f1f]">
        {{ $t('logistics') }}
      </h3>
      <button class="text-2xl">+</button>
    </div>
  </div> -->

  <AccorDion />

  <button class="hidden md:block rounded-[4px] mt-[55px] bg-black text-[#DFBA7F] px-[93px] py-[17px] text-2xl">
    {{ $t('more_details') }}
  </button>
</div>
      </div>
    </section>
    
    <!-- Why Choose Us Section -->
    <section class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
    <h2 class="text-3xl md:text-[58px] text-[#1f1f1f] font-semibold sm:w-[600px] mb-16">
      {{ $t('why_noa_builders') }}
    </h2>

    <div class="mb-10 flex">
      <div class="mr-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
        <img class="w-6 h-6" src="/rocket.png" alt="Rocket icon">
      </div>
      <div>
        <h3 class="font-bold text-lg md:text-[30px] text-[#1f1f1f] mb-2">{{ $t('guaranteed_quality') }}</h3>
        <p class="text-[#545454] text-sm md:text-2xl w-full max-w-[569px]">
          {{ $t('guaranteed_quality_desc') }}
        </p>
      </div>
    </div>

    <div class="mb-10 flex">
      <div class="mr-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
        <img class="w-6 h-6" src="/led.png" alt="Led icon">
      </div>
      <div>
        <h3 class="font-bold text-lg md:text-[30px] text-[#1f1f1f] mb-2">{{ $t('modern_approach') }}</h3>
        <p class="text-[#545454] text-sm md:text-2xl w-full max-w-[569px]">
          {{ $t('modern_approach_desc') }}
        </p>
      </div>
    </div>

    <div class="flex">
      <div class="mr-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
        <img class="w-6 h-6" src="/check.png" alt="">
      </div>
      <div>
        <h3 class="font-bold text-lg md:text-[30px] text-[#1f1f1f] mb-2">{{ $t('fast_delivery') }}</h3>
        <p class="text-[#545454] text-sm md:text-2xl w-full max-w-[569px]">
          {{ $t('fast_delivery_desc') }}
        </p>
      </div>
    </div>
  </div>
        <div>
          <img src="/nega-aynan-img.png" alt="Nega aynan NOA Builders kompaniyasi?">
          <!-- <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iah8E094tN6pAAvFeJWrlSqfgMg7PE.png" alt="Construction materials" class="w-full h-auto rounded-lg object-cover"> -->
        </div>
      </div>
    </section>
    
    <div class="relative w-full max-w-6xl xl:mx-auto my-24">
    <!-- Background Construction Image -->
    <div class="relative ">
      <img 
        src="/fikrlar.png" 
        alt="Construction site with crane" 
        class="hidden lg:block w-[500px] h-auto object-cover"
      />
      
      <!-- Heading -->
      <div class="lg:absolute text-center top-0 right-0 w-full lg:w-1/2 p-8 pt-12">
        <h2 class="text-4xl font-bold text-gray-900">
          {{ $t('customer_feedback') }}
        </h2>
      </div>
      

      <div class="block lg:hidden testimonial-slider-container">
    <swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :space-between="20"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      class="w-full"
    >
      <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
        <div class="testimonial-card bg-[#121212] mx-4 p-6 rounded-lg shadow-lg">
          <div class="quote-icon text-white text-3xl mb-4">
            <span class="font-serif">"</span>
          </div>
          <p class="testimonial-text text-[#e0b96c] sm:text-lg mb-6 font-medium">
            {{ testimonial.quote }}
          </p>
          <div class="flex items-center">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 class="text-white font-bold">{{ testimonial.name }}</h4>
              <p class="text-gray-400 text-sm">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

      <!-- Testimonials Slider -->
      <div class="hidden lg:block absolute bottom-0 left-0 w-full">
        <swiper
          :modules="[SwiperNavigation]"
          :space-between="20"
          :navigation="{ 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev' 
          }"
           :breakpoints="{
    1025: { slidesPerView: 2 }, // 1025px dan keyin 2 ta slayd
    0: { slidesPerView: 1 } // 1025px gacha 1 ta slayd
  }"
          class="testimonial-swiper"
        >
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="flex relative top-28 gap-4 mb-12 pl-4 xl:pl-24">
              <div class="testimonial-card bg-[#1f1f1f] text-white p-8 w-[500px] xl:w-[600px] h-[400px]">
                <div class="text-[50px] text-white mb-4">“</div>
                <p class="text-lg text-[#DFBA7F] mb-6" v-html="testimonial.quote"></p>
                <div class="flex items-center">
                  <img 
                    :src="testimonial.avatar" 
                    :alt="testimonial.name" 
                    class="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 class="font-medium">{{ testimonial.name }}</h4>
                    <p class="text-gray-400 text-sm">{{ testimonial.location }}</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="hidden lg:flex items-center mt-20 gap-4">
    <!-- Left Arrow Button -->
    <button 
      class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      @click="onPrevious"
      aria-label="Previous"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="text-gray-600"
      >
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </button>
    
    <!-- Right Arrow Button -->
    <button 
      class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      @click="onNext"
      aria-label="Next"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class="text-gray-600"
      >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
  </div>
  </div>
    
    <!-- Newsletter Section -->
    <section class="container mx-auto px-4 py-12 text-center">
      <h2 class="text-2xl md:text-[58px] font-semibold w-full max-w-[849px] mx-auto text-[#DFBA7F] mb-[51px]">{{ $t('customer_news') }}</h2>
      <p class="text-[#545454] text-sm md:text-2xl max-w-2xl mx-auto mb-8">
        {{ $t('customer_recommendations') }}
      </p>
    </section>
    
    <!-- Footer -->
    <footer class="bg-[#1a1a1a] text-gray-300 py-16 mt-20">
    <!-- Newsletter Subscription -->
    <div class="max-w-6xl relative bottom-24 mx-auto px-4 mb-16">
      <div class="bg-white email-input rounded-md flex flex-col sm:flex-row overflow-hidden max-w-3xl mx-auto">
        <div class="flex-grow flex items-center px-4 py-3">
          <span class="text-gray-400 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input 
            type="email" 
            :placeholder="t('email')" 
            class="w-full py-2 focus:outline-none text-gray-600"
          />
        </div>
        <button class="bg-[#c9a55c] hover:bg-[#b89346] text-white px-6 py-3 font-medium transition-colors">
          {{ $t('customer_subscribe') }}
        </button>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto flex justify-center px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Company Info -->
        <div>
          <div class="mb-6">
            <img src="/noa-white.jpg" alt="NOA BUILDERS" class="w-[150px]" />
          </div>
          <p class="text-[#545454] text-xl w-full max-w-[322px] mb-8 leading-relaxed">
            {{ $t('construction_support') }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-[#DFBA7F] text-lg font-medium mb-6">{{ $t('xizmatlar') }}</h3>
          <ul class="space-y-4">
            <li>
              <a href="#" class="hover:text-white transition-colors">{{ $t('construction_materials') }}</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">{{ $t('technical_equipment') }}</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">{{ $t('logistics') }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-[#DFBA7F] text-lg font-medium mb-6">{{ $t('contact_info') }}</h3>
          <ul class="space-y-4">
            <li>
              <a href="mailto:info@noabuilders.com" class="hover:text-white transition-colors">info@noabuilders.com</a>
            </li>
            <li class="leading-relaxed">
              {{ $t('tashkent_city') }},<br />
              {{ $t('independence_street') }} <br />
              100 500,
            </li>
            <li>
              <a href="tel:+998900000000" class="hover:text-white transition-colors">+998 90 000 0000</a>
            </li>
            <li>
              <a href="tel:+998900000000" class="hover:text-white transition-colors">+998 90 000 0000</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script setup>
import { ref , computed } from 'vue';
import { X } from 'lucide-vue-next';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation , Autoplay , Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useI18n } from "vue-i18n";
import AccorDion from './components/AccorDion.vue';
import CallButton from './components/CallButton.vue';

const { t } = useI18n();
const { locale } = useI18n();
const isOpen = ref(false);
const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;
const mobileMenuOpen = ref(false);
const testimonials = computed(() => [
  {
    quote: t('feedback_2'),
    name: 'Kimdir Kimdirova',
    location: 'Tashkent, Uzbekistan',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    quote: t('feedback_1'),
    name: 'HighTown City loyiha menejeri',
    location: 'Samarkand, Uzbekistan',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
]);

const selectedFlag = ref({
  label: "Lotin",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAb1BMVEX///8etToAmbXOESbKAAAlk67WABDWACQzrjkAl7QAlbIAk7EAkbDv+PoAja1EqsHB4Ohvu82Qydeo096y2eMbobuOyNbl8/bU6vB7wNHd7/Mto7yk0t5ftMjo9fhQrsTN5Op4vs+c096m09693ueS23ByAAAEuklEQVR4nO2cCXOjOBBGtewx25K4D3PaTuL//xsXAwaRGkCujncC871KpUplROBFV7eUCAcwEL/6AfYN9LGAPhbQx8JaH0mllCT6ih/6NXf5DtjpI0V+Vt+uQZbavbm/VqS0Ooo/G31SN4FocSPf8rVVqWbFoDKLVGTS+gG/N9v6SL+5d3mnRlu+NGlfVHo0TcoTkTfVVd4199RPa+6OTX2qKu/yRKZtOxy9dxXq4XoKu+L10e2rc9eS/eUb7IgtfaroXt6tnuhuym9rVGP7IjoJUUz29U2IwPqX8b3Z0Kf7llQ+NVdSJUphzA7KPQljtFOBcK+/RedVUWfv9FxTkR+FV9SjL2pu2g+M1ps71H4995zflFV96q2zJ55+V+mYfT2VsxukbcuT6ZN3/Kas6Ws7YcflGC3lFazpU/2cm+j/7Wl2x4q+YcWBqHiFFTn63K/fDjJJvoRlfXTpG99BBvnXsKxP3Tp7OUa+FVb0dZGuiI4S3b+EZX3DqsUyybLexS3TXPtjUR8NS2arcI3SZJ6hus2LyWzdTOHbUXQu6pN9vOZazLskdeF6alQidSrSKbtFynMLLcePlZcExtW7ZlGfivtwd1sfpbfcFXkZPjJU72UpyvJ9TFiVuXDz4NGB/TxvJ6T8GKHMsr7EVl9L0DbTZmxuXaIhGiuqpi0G47WUtsHM6SDp+i9ofW1vbeOTk7nAuY+ZU0mfhAiNhNVHGwgeZC2+PPZl1mOfo/IsPU/pYxkFFBgLHv+cZkaCT7nNxeq2O2B55n1EvDa9zJdERvb9ohx1MT4lktOnlFbyMHtty+u+9FXZKhq/7R9EHSyW9cl+6i0R866wknHx+957kFHqNazl+4Zk80EmyZewlm1ukPDbYi0Vr6/9+QCMfous72T0zS/8Sff9nIh5qngcVvXJZmn2oObTejCbFeX8CJXM5pUvzVF8bpwyGE64fGo+JHVSGxkpqZrSmzJSpBxBU0aKpHdqlDTyWXVi5K92zcY25MNfarYmusSR60bxEIhRGte5qONHDpSiOhFJHT2uDuNI5HU8JqySrvLBE1YDathva8z8puykjkkU8u8BSjwZzu9bTGOJ4u5A2qO+7ILp4hjBzOYmODndyVIRk/HCum6juWlCvjvOvelj1V5vTNdeq/My1daREPVBZnOLMwT6kncdOJvGM+W+1+dpPpbBNTSWh/TmNq6xnZGK8Hoz9J0/Ivf30Xc/bBt3Jw6SZphDqkap0Ng+K7SqptmUCkfSpI+aSqliulsaKtXMDjvvF9uT9dppijqJHyfrab7yI2e2ttso0nEWgvYHgEjKr/q7juOA81MsoI8F9LGAPhbib8BA/AMYiD8BA/EXYCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwiV/93wD2Df6TBgvxAzAQ/wIG4g/AAPpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpY/AdQ7BBSIcVm7QAAAABJRU5ErkJggg==",
});

// Variantlar ro'yxati
const optionsR = [
  { label: "Kirill", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAb1BMVEX///8etToAmbXOESbKAAAlk67WABDWACQzrjkAl7QAlbIAk7EAkbDv+PoAja1EqsHB4Ohvu82Qydeo096y2eMbobuOyNbl8/bU6vB7wNHd7/Mto7yk0t5ftMjo9fhQrsTN5Op4vs+c096m09693ueS23ByAAAEuklEQVR4nO2cCXOjOBBGtewx25K4D3PaTuL//xsXAwaRGkCujncC871KpUplROBFV7eUCAcwEL/6AfYN9LGAPhbQx8JaH0mllCT6ih/6NXf5DtjpI0V+Vt+uQZbavbm/VqS0Ooo/G31SN4FocSPf8rVVqWbFoDKLVGTS+gG/N9v6SL+5d3mnRlu+NGlfVHo0TcoTkTfVVd4199RPa+6OTX2qKu/yRKZtOxy9dxXq4XoKu+L10e2rc9eS/eUb7IgtfaroXt6tnuhuym9rVGP7IjoJUUz29U2IwPqX8b3Z0Kf7llQ+NVdSJUphzA7KPQljtFOBcK+/RedVUWfv9FxTkR+FV9SjL2pu2g+M1ps71H4995zflFV96q2zJ55+V+mYfT2VsxukbcuT6ZN3/Kas6Ws7YcflGC3lFazpU/2cm+j/7Wl2x4q+YcWBqHiFFTn63K/fDjJJvoRlfXTpG99BBvnXsKxP3Tp7OUa+FVb0dZGuiI4S3b+EZX3DqsUyybLexS3TXPtjUR8NS2arcI3SZJ6hus2LyWzdTOHbUXQu6pN9vOZazLskdeF6alQidSrSKbtFynMLLcePlZcExtW7ZlGfivtwd1sfpbfcFXkZPjJU72UpyvJ9TFiVuXDz4NGB/TxvJ6T8GKHMsr7EVl9L0DbTZmxuXaIhGiuqpi0G47WUtsHM6SDp+i9ofW1vbeOTk7nAuY+ZU0mfhAiNhNVHGwgeZC2+PPZl1mOfo/IsPU/pYxkFFBgLHv+cZkaCT7nNxeq2O2B55n1EvDa9zJdERvb9ohx1MT4lktOnlFbyMHtty+u+9FXZKhq/7R9EHSyW9cl+6i0R866wknHx+957kFHqNazl+4Zk80EmyZewlm1ukPDbYi0Vr6/9+QCMfous72T0zS/8Sff9nIh5qngcVvXJZmn2oObTejCbFeX8CJXM5pUvzVF8bpwyGE64fGo+JHVSGxkpqZrSmzJSpBxBU0aKpHdqlDTyWXVi5K92zcY25MNfarYmusSR60bxEIhRGte5qONHDpSiOhFJHT2uDuNI5HU8JqySrvLBE1YDathva8z8puykjkkU8u8BSjwZzu9bTGOJ4u5A2qO+7ILp4hjBzOYmODndyVIRk/HCum6juWlCvjvOvelj1V5vTNdeq/My1daREPVBZnOLMwT6kncdOJvGM+W+1+dpPpbBNTSWh/TmNq6xnZGK8Hoz9J0/Ivf30Xc/bBt3Jw6SZphDqkap0Ng+K7SqptmUCkfSpI+aSqliulsaKtXMDjvvF9uT9dppijqJHyfrab7yI2e2ttso0nEWgvYHgEjKr/q7juOA81MsoI8F9LGAPhbib8BA/AMYiD8BA/EXYCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwiV/93wD2Df6TBgvxAzAQ/wIG4g/AAPpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpYQB8L6GMBfSygjwX0sYA+FtDHAvpY/AdQ7BBSIcVm7QAAAABJRU5ErkJggg==", code: "lotin" },
  // { label: "Eng", src: "https://flagpedia.net/data/flags/w320/us.webp", code: "en" },
  { label: "Lotin", src: "https://flagcdn.com/w40/uz.png", code: "uz" },
  { label: "Rus", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////VKx4AOaYAGJ4AOq3fKgABXnTtAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII=", code: "rus" },
  { label: "Eng", src: "data:image/png;base64,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", code: "eng" },

];

const selectOption = (option) => {
  selectedFlag.value = option; // Tanlangan bayroqni yangilash
  locale.value = option.code; // i18n tilini o'zgartirish
  isOpen.value = false; // Dropdownni yopish
};
// Dropdownni ochish/yopish
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Variantni tanlash

// Dropdown tashqarisiga bosilganda yopish
document.addEventListener("click", (event) => {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(event.target)) {
    isOpen.value = false;
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* For smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.testimonial-card {
  position: relative;
  border-radius: 0;
}

.quote-mark {
  font-family: serif;
  position: absolute;
  top: 16px;
  left: 16px;
  opacity: 0.3;
  font-size: 64px;
  line-height: 1;
}

/* Override Swiper default styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  position: static;
  margin: 0;
  width: 48px;
  height: 48px;
  color: #333;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  display: none;
}

.testimonial-swiper {
  overflow: visible;
}

.testimonial-slider-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.testimonial-card {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.quote-icon {
  font-size: 2.5rem;
  line-height: 1;
}

/* Custom pagination styling */
:deep(.swiper-pagination-bullet) {
  background-color: #666;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #e0b96c;
  opacity: 1;
}

@media (min-width: 768px) {
  .testimonial-slider-container {
    max-width: 700px;
  }
}

.v-enter-active,
 .v-leave-active {
   transition: opacity 0.5s ease;
 }
 
 .v-enter-from,
 .v-leave-to {
   opacity: 0;
 }

 
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-select {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  /* background-color: #fff; */
  width: 90px;
  justify-content: space-between;
}

.dropdown-select img {
  width: 20px;
  height: 15px;
  /* margin-right: 10px; */
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  /* background-color: #fff; */
  /* borde  r: 1px solid #ccc; */
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-options div {
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-options div:hover {
  background-color: #DFBA7F;
  border-radius: 4px;
}

.dropdown-options img {
  width: 20px;
  height: 15px;
  margin-right: 10px;
}

.email-input {
  box-shadow: 0px -4px 14px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px -4px 14px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px -4px 14px 0px rgba(0,0,0,0.75);
}
</style>