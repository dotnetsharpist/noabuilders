<template>
    <div class="totop fixed bottom-[10px] right-[10px]">
      <button class="button">
        <a href="tel:+998990001212" class="button">
  <PhoneCall />
</a>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { PhoneCall } from "lucide-vue-next";
  
  const scrolledPast = ref(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const handleScroll = () => {
    scrolledPast.value = window.scrollY > 50;
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style>
  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #DFBA7F;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
    cursor: pointer;
    transition: box-shadow 1s;
    animation: boxshadower 2s infinite;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }
  
  @keyframes boxshadower {
  0% {
    box-shadow: 0px 0px 0px 4px rgba(223, 186, 127, 0.5);
  }
  100% {
    box-shadow: 0px 0px 0px 8px rgba(223, 186, 127, 0.5);
  }
}

  
  /* .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #06d6a0;
    align-items: center;
  }
  
  
  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  } */
  
  .totop {
    z-index: 999;
  }
  </style>
  