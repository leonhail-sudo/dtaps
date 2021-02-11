<template>
  <div>
    <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow lg:hidden md:hidden">
      <button class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="closeThis">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: menu-alt-2 -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <div class="flex-1 px-4 flex justify-between">
        <div class="flex-1 flex">
          <form class="w-full flex md:ml-0" action="#" method="GET" />
        </div>
        <div class="ml-4 flex items-center md:ml-6">
          <!-- Profile dropdown -->
          <div class="ml-3">
            <div class="flex w-full">
              <div
                v-if="showNotif && appointments.data && appointments.data.length > 0"
                class="rounded-full bg-white text-red-700 font-bold cursor-pointer -ml-4"
              >
                {{ appointments.data.length }}
              </div>
              <div>
                <button id="user-menu" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4" aria-haspopup="true" @click="isActive = !isActive, showNotif = false">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>
            </div>
            <div v-show="isActive" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <div
                v-for="item in appointments.data"
                :key="item.id"
              >
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                  Appointment {{ item.id }} {{item.status}}
                </a>
              </div>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" @click="logout">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="md:hidden">
      <div v-if="closed" class="fixed inset-0 flex z-40">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-600 opacity-75" />
        </div>
        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
        <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-800">
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="closeThis">
              <span class="sr-only">Close sidebar</span>
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center px-4">
            <img class="h-8 w-auto" src="~assets/img/denr-logo.png" alt="MySms.PH">
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <nuxt-link
                v-for="menu in menus"
                :key="menu.name"
                :class="[currentPage.includes(menu.value) ? activeClass : 'text-gray1', 'nav-item']"
                :to="menu.url"
                class="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md transition ease-in-out duration-300 transform hover:bg-bluegreen100"
              >
                <!-- Heroicon name: home -->
                <svg
                  class="mr-3 h-6 w-6 text-indigo-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="menu.d" />
                </svg>
                {{ menu.name }}
              </nuxt-link>
            </nav>
          </div>
        </div>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isActive: false,
      showNotif: true,
      logShow: false,
      closed: false,
      activeClass: 'active',
      menus: [
        { name: 'Dashboard', value: 'dashboard', url: '/auth/dashboard', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' }
      ],
      accmenu: [
        { name: 'Settings', value: 'settings', url: '/auth/settings', d: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
        { name: 'Billing', value: 'billing', url: '/auth/billing', d: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
        { name: 'Add Credits', value: 'credits', url: '/auth/credits', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' }
      ]
    }
  },
  computed: {
    currentPage () {
      return this.$route.path
    },
    ...mapGetters('appointment', {
      appointments: 'appointments'
    })
  },
  methods: {
    async logout () {
      try {
        await this.$auth.logout()
      } catch (err) {
      }
    },
    closeThis () {
      this.closed = !this.closed
    },
    showLogs () {
      this.logShow = !this.logShow
      this.showNotif = false
    }
  }
}
</script>

<style scoped>
.yay.rotate-90 {
  transform: rotate(90deg);
}
.active, .this {
    background: #037ea3;
    transition:  all 1s;
}
h1 {
  font-size: 14pt;
}
::-webkit-scrollbar {
    width: 0px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
}
::-webkit-scrollbar-thumb {
    background: white;
    -webkit-box-shadow: none;
}
::-webkit-scrollbar-thumb:window-inactive {
    background: none;
}
</style>
