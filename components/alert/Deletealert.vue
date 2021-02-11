<template>
  <div class="flex w-full h-screen bg-smoke fixed justify-center items-center mx-auto z-20">
    <div class="w-1/4 bg-white text-black1 rounded-lg p-4 -ml-64">
      <div class="flex w-full mx-auto justify-center mb-4">
        <div class="flex max-w-sm">
          <div class="flex flex-wrap w-full items-center text-center justify-center p-4">
            <svg
              class="h-16 w-16 text-red-600 inline-flex svgo"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span class="text-2xl font-bold">
              The File has been Deleted.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-smoke {
  background: linear-gradient(0deg, rgba(0,0,0,0.5) 16%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.5) 100%);
}
.svgo {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
  animation-name: bounce-4;
  animation-timing-function: ease;
}
@keyframes bounce-4 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-10px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
