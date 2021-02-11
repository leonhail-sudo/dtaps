<template>
  <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
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
        <div class="ml-3 relative">
          <div>
            <button id="user-menu" class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-haspopup="true" @click="isActive = !isActive">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <span
                v-if="appointments.length > 0"
                class="bg-blue-600 text-white cart-icon cursor-pointer"
              >{{ appointments.length }}</span>
            </button>
          </div>
          <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
          <div v-show="isActive" class="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" @click="$router.push('/auth/settings')">Your Profile</a>

            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="$router.push('/auth/settings')">Settings</a>

            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" @click="logout">Sign out</a>
          </div>
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
      isActive: false
    }
  },
  computed: {
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
    }
  }
}
</script>
