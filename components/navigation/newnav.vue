<template>
  <div class="relative p-2 bg-white">
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <nuxt-link to="/">
            <span class="sr-only">MySMS</span>
            <img src="~assets/img/logo.svg" class="h-20 w-full object-scale-down">
          </nuxt-link>
          <div class="-mr-2 flex items-center md:hidden">
            <button id="main-menu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-haspopup="true" @click="toggleMenu">
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:space-x-10">
          <nuxt-link
            v-for="menu in menus"
            :key="menu.id"
            :to="menu.url"
            class="font-medium text-gray-500 hover:text-gray-900"
          >
            {{ menu.name }}
          </nuxt-link>
        </div>
      </div>
      <div class="hidden md:block text-right">
        <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
          <nuxt-link to="/auth/login" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
            <p v-if="$auth">Dashboard</p>
            <p v-else>Log in</p>
          </nuxt-link>
        </span>
      </div>
    </nav>

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div v-if="menu" :class="menu ? 'transition duration-150 ease-out':'transition duration-100 ease-in'" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="px-4 flex items-center justify-between">
          <div @click="closeMenu(); $router.push('/')">
            <img src="~assets/img/logo.svg" class="h-20 w-full object-scale-down">
          </div>
          <div class="-mr-2">
            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" @click="toggleMenu">
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: x -->
              <svg
                class="h-6 w-6"
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
        </div>
        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div class="px-2 pt-2 pb-3 space-y-1" role="none">
            <!-- <nuxt-link
              v-for="menu in menus"
              :key="menu.id"
              :to="menu.url"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              role="menuitem">
              {{ menu.name }}
            </nuxt-link> -->
            <div
              v-for="menu in menus"
              :key="menu.id"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              @click="closeMenu(); $router.push(menu.url)"
            >
              {{ menu.name }}
            </div>
          </div>
          <div role="none">
            <nuxt-link to="/auth/login" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
              Log in
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: false,
      menus: [
        { id: 1, name: 'Features', url: '/features' },
        { id: 2, name: 'About', url: '/about' },
        { id: 3, name: 'Blog', url: '/blog' },
        { id: 4, name: 'FAQ\'s', url: '/faq' },
        { id: 5, name: 'Contact', url: '/contact_us' },
        { id: 6, name: 'Privacy', url: '/privacy_policy' },
        { id: 7, name: 'Terms', url: '/terms_and_conditions' }
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.menu = !this.menu
    },
    closeMenu () {
      setTimeout(() => this.toggleMenu('close'), 1000)
    }
  }
}
</script>
