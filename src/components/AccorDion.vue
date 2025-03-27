<template>
    <div class="max-w-3xl mx-auto">
      <!-- First accordion item -->
      <div class="border-t border-gray-200">
        <button 
          @click="toggleItem('texnik')" 
          class="cursor-pointer w-full py-6 flex justify-between items-center text-left focus:outline-none"
        >
          <h2 class="text-xl font-medium text-gray-900">{{ $t('technical_equipment') }}</h2>
          <span class="text-4xl">{{ isOpen.texnik ? '−' : '+' }}</span>
        </button>
        <Transition>
            <div 
              v-if="isOpen.texnik" 
              class="pb-6 px-1"
            >
              <p class="text-gray-700">
                {{ $t('construction_materials_desc') }}
            </p>
            </div>
        </Transition>
      </div>
      
      <!-- Second accordion item -->
      <div class="border-t border-gray-200">
        <button 
          @click="toggleItem('komplektatsiya')" 
          class="cursor-pointer w-full py-6 flex justify-between items-center text-left focus:outline-none"
        >
          <h2 class="text-xl font-medium text-gray-900">{{ $t('logistics') }}  </h2>
          <span class="text-4xl">{{ isOpen.komplektatsiya ? '−' : '+' }}</span>
        </button>
        <Transition>
            <div 
              v-if="isOpen.komplektatsiya" 
              class="pb-6 px-1"
            >
              <p class="text-gray-700">
                {{ $t('construction_materials_desc') }}
              </p>
            </div>
        </Transition>
      </div>
      
      <!-- Bottom border -->
      <div class="border-t border-gray-200"></div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State to track which accordion items are open
  const isOpen = ref({
    texnik: false,
    komplektatsiya: false
  });
  
  // Function to toggle accordion items
  const toggleItem = (item) => {
    isOpen.value[item] = !isOpen.value[item];
  };
  </script>

  <style scoped>
    .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>