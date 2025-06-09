<template>
    <div class="font-sans">
        <div class="hero-sectioon min-h-screen bg-[#1c1c1c] text-white">
    <!-- Navigation -->
   <Navbar />
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-12 sm:py-16">
  <div class="grid grid-cols-1 gap-8">
    <div>
      <!-- Title -->
      <h1
        class="uppercase text-2xl sm:text-4xl md:text-[40px] lg:text-[60px] xl:text-[89px] font-semibold leading-tight mb-4 sm:mb-6"
      >
        {{ $t('qurilishMaterialTitle') }}
      </h1>

      <!-- Description -->
      <p
        class="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[24px] mt-6 sm:mt-8 lg:mt-[100px] mb-4 sm:mb-6 lg:mb-8 max-w-full lg:max-w-[809px] font-medium"
      >
        {{ $t('qurilishMaterialSubtitle') }}
      </p>

      <!-- Qo‘shimcha content (agar kerak bo‘lsa) shu yerga yoziladi -->
    </div>
  </div>
</div>


  </div>

    <div class="bg-gray-100 min-h-screen p-6">
    <div class="container">
      <!-- Header Section -->
     <div class="mb-8">
    <div class="flex gap-4 mb-2">
      <div class="w-[16px] h-[16px] bg-black mt-[7px] flex-shrink-0"></div>
      <div>
        <h1 class="text-[24px] font-semibold text-gray-900 leading-tight">
          <template v-if="locale === 'uz'">
            Bizning mahsulot assortimentimiz juda ko'p turli xil materiallarni o'z ichiga oladi.
          </template>
          <template v-else-if="locale === 'rus'">
            Наш ассортимент продукции включает множество различных материалов.
          </template>
          <template v-else-if="locale === 'eng'">
            Our product range includes a wide variety of materials.
          </template>
          <template v-else-if="locale === 'lotin'">
            Бизинг махсулот ассортиментимиз жуда кўп турли хил материалларни ўз ичига олади.
          </template>
          <template v-else>
            Bizning mahsulot assortimentimiz juda ko'p turli xil materiallarni o'z ichiga oladi.
          </template>
        </h1>
      </div>
    </div>
    <p class="text-gray-600 text-base max-w-[999px]">
      <template v-if="locale === 'uz'">
        Xizmatimiz loyihangiz ehtiyojidan kelib chiqib, beton quyishdan tortib, pardozlashgacha bo‘lgan barcha bosqichlarni qamrab oladi.
      </template>
      <template v-else-if="locale === 'rus'">
        Наш сервис охватывает все этапы, от заливки бетона до отделочных работ, в зависимости от потребностей вашего проекта.
      </template>
      <template v-else-if="locale === 'eng'">
        Our service covers all stages from concrete pouring to finishing, based on your project's needs.
      </template>
      <template v-else-if="locale === 'lotin'">
        Хизматимиз лойиҳангиз эҳтиёжидан келиб чиққан ҳолда, бетон қуйишдан тортиб, пардозлашгача бўлган барча босқичларни қамраб олади.
      </template>
      <template v-else>
        Xizmatimiz loyihangiz ehtiyojidan kelib chiqib, beton quyishdan tortib, pardozlashgacha bo‘lgan barcha bosqichlarni qamrab oladi.
      </template>
    </p>
  </div>



      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Service Card 1 -->
        <div
  v-for="i in cards"
  :key="i.id"
  class="card pl-[35px] py-[12px] relative overflow-hidden"
  :style="{
    backgroundImage: `url(${i.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }"
>
  <!-- Overlay qatlam -->
  <div class="absolute inset-0 bg-[#222222] opacity-70"></div>

  <!-- Kontent -->
  <div class="relative z-10">
    <img src="/qurilish-favorite.png" alt="Icon" />

     <h3 class="text-white font-medium text-[28px] mt-[74px] mb-[15px]">
      <template v-if="locale === 'uz'">Sendvich panellar</template>
      <template v-else-if="locale === 'rus'">Сэндвич панели</template>
      <template v-else-if="locale === 'eng'">Sandwich panels</template>
      <template v-else-if="locale === 'lotin'">Сендвич панеллар</template>
      <template v-else>Sendvich panellar</template>
    </h3>

    <p class="text-white font-medium text-[20px] mb-[20px]">
      <template v-if="locale === 'uz'">Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.</template>
      <template v-else-if="locale === 'rus'">Строительные панели с тепло- и звукоизоляцией, легкие в установке.</template>
      <template v-else-if="locale === 'eng'">Construction panels with thermal and sound insulation, easy to install.</template>
      <template v-else-if="locale === 'lotin'">Иссиқлик ва овоз изоляциясига эга, осон ўрнатиладиган қурилиш панеллари.</template>
      <template v-else>Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.</template>
    </p>

    <div class="w-full flex justify-end">
      <img src="/Arrow.png" alt="Arrow right" />
    </div>
  </div>
</div>



      </div>
    </div>
  </div>

 <footer class="bg-[#1a1a1a] text-gray-300 py-16 mt-20">
    <!-- Newsletter Subscription -->
      <div
  class="max-w-6xl relative bg-[#B3BECD] footer-email-sender h-auto sm:h-[288px] rounded-lg flex flex-col sm:flex-row gap-6 sm:gap-5 px-6 py-8 sm:px-8 sm:py-0 bottom-24 mx-auto mb-16"
>
  <!-- Rasmi -->
  <img
    class="object-cover w-full sm:w-auto max-h-full sm:max-h-none rounded-lg sm:rounded-none"
    src="/consalting.png"
    alt="Error"
  />

  <!-- Kontent -->
  <div class="flex flex-col justify-center w-full">
      <h3
      v-if="locale === 'uz'"
      class="text-[#263640] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold mb-6 sm:mb-8"
    >
      Biz bilan bog’laning!
    </h3>

    <h3
      v-else-if="locale === 'lotin'"
      class="text-[#263640] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold mb-6 sm:mb-8"
    >
      Биз билан боғланинг!
    </h3>

    <h3
      v-else-if="locale === 'eng'"
      class="text-[#263640] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold mb-6 sm:mb-8"
    >
      Contact us!
    </h3>

    <h3
      v-else-if="locale === 'rus'"
      class="text-[#263640] text-[28px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold mb-6 sm:mb-8"
    >
      Свяжитесь с нами!
    </h3>

    <div class="flex flex-col sm:flex-row w-full">
      <input
        type="email"
        :placeholder="t('email')"
        class="bg-[#F4F5F7] text-[#263640] placeholder:text-[#263640] py-[14px] px-[16px] rounded-t-lg sm:rounded-t-none sm:rounded-l-lg"
      />
      <button
        class="bg-[#263640] py-[14px] px-[24px] text-center sm:text-left rounded-b-lg sm:rounded-b-none sm:rounded-r-lg text-white font-semibold cursor-pointer hover:bg-[#B89346] transition-colors mt-2 sm:mt-0"
      >
        {{ $t('yuborish') }}
      </button>
    </div>
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
import { NNumberAnimation, NButton } from 'naive-ui'
import Navbar from '@/components/Navbar.vue';
import { ref , computed , onMounted } from 'vue';
import { X } from 'lucide-vue-next';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation , Autoplay , Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useI18n } from "vue-i18n";
import AccorDion from '@/components/AccorDion.vue';
import CallButton from '@/components/CallButton.vue';

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
    avatar: 'https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg'
  },
  {
    quote: t('feedback_1'),
    name: 'HighTown City loyiha menejeri',
    location: 'Samarkand, Uzbekistan',
    avatar: 'https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg'
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

const cards = [
  {
    img: '/card1.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card2.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card3.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card4.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card5.png',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card6.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card7.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card8.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card9.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card10.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card11.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
    {
    img: '/card1.jpg',
    title: 'Sendvich panellar',
    subtitle: 'Issiqlik va ovoz izolyatsiyasiga ega, oson o‘rnatiladigan qurilish panellari.'
  },
]
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
  background-color: #DFBA7F;
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

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

html {
    scroll-behavior: smooth;
  }


.hero-sectioon {
  background: url('/qurilish-bg.png') no-repeat center center/cover;
  color: white;
}


</style>