<template>
  <div class="flex w-full h-screen bg-smoke fixed justify-center items-center mx-auto z-20">
    <div class="w-1/4 bg-white text-black1 rounded-lg p-4 -ml-64">
      <div class="flex w-full mx-auto justify-center mb-4">
        <svg class="svgo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle
            class="path circle"
            fill="none"
            stroke="#003c4e"
            stroke-width="6"
            stroke-miterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            class="path check"
            fill="none"
            stroke="#003c4e"
            stroke-width="6"
            stroke-linecap="round"
            stroke-miterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
      </div>
      <div class="flex w-full mx-auto justify-center mb-4">
        <div class="flex max-w-sm">
          <div class="flex flex-wrap w-full items-center text-center justify-center p-4">
            <span class="text-lg font-bold pb-4">
              We Acknowledge Your Payment.
            </span>
            <div class="flex flex-col">
              <p class="leading-tight">
                Here is the code.
              </p>
              <div v-for="item in payment" :key="item.id" class="leading-tight">
                <div v-if="item.image_url" class="w-full">
                  <img :src="item.image_url" class="w-24 h-16 object-cover">
                </div>
                <div v-if="item.ref_code" class="w-full">
                  {{ item.ref_code }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('payment', {
      payment: 'payment'
    })
  }
}
</script>

<style scoped>
.bg-smoke {
  background: linear-gradient(0deg, rgba(0,0,0,0.5) 16%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.5) 100%);
}
.svgo {
  width: 100px;
  display: block;
  margin: 40px auto 0;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  }
  .circle {
    -webkit-animation: dash .9s ease-in-out;
    animation: dash .9s ease-in-out;
  }
  .line {
    stroke-dashoffset: 1000;
    -webkit-animation: dash .9s .35s ease-in-out forwards;
    animation: dash .9s .35s ease-in-out forwards;
  }
  .check {
    stroke-dashoffset: -100;
    -webkit-animation: dash-check .9s .35s ease-in-out forwards;
    animation: dash-check .9s .35s ease-in-out forwards;
  }

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
}

@-webkit-keyframes dash{
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes dash-check {
  50% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

@keyframes dash-check {
  50% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>
