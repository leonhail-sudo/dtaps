<template>
  <nav>
    <h1 class="mt-4 ml-6" @click="closeThat">
      <nuxt-link to="/" class="flex items-center flex-shrink-0 mr-6 focus:outline-none ">
        <img src="~assets/img/logo.svg" class="w-full object-scale-down">
      </nuxt-link>
    </h1>
    <h1 class="mt-4 ml-6">
      Login
    </h1>
    <input id="burger" v-model="kani" type="checkbox">
    <label for="burger" class="mt-8">
      <span />
      <span />
      <span />
    </label>
    <nav>
      <ul>
        <li @click="closeThat">
          <nuxt-link to="/features" class="block mt-4 lg:inline-block lg:mt-0 mr-4 focus:outline-none ">
            Features
          </nuxt-link>
        </li>
        <li @click="closeThat">
          <nuxt-link to="/about" class="bg-white hover:text-yellow-600 py-2 px-4 block ">
            About
          </nuxt-link>
        </li>
        <li @click="closeThat">
          <nuxt-link to="/blog" class="bg-white hover:text-yellow-600 py-2 px-4 block ">
            Blog
          </nuxt-link>
        </li>
        <li @click="closeThat">
          <nuxt-link to="/faq" class="bg-white hover:text-yellow-600 py-2 px-4 block ">
            FAQ's
          </nuxt-link>
        </li>
        <li @click="closeThat">
          <nuxt-link to="/contact_us" class="bg-white hover:text-yellow-600 py-2 px-4 block ">
            Contact
          </nuxt-link>
        </li>
        <li @click="closeThat">
          <nuxt-link to="/privacy_policy" class="bg-white hover:text-yellow-600 py-2 px-4 block whitespace-no-wrap">
            Privacy Policy
          </nuxt-link>
        </li>
        <li @click="closeThat">
          <nuxt-link to="/terms_and_conditions" class="rounded-b bg-white hover:text-yellow-600 py-2 px-4 block whitespace-no-wrap">
            Terms and Conditions
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      kani: false,
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false
      } else {
        this.view.atTopOfPage = true
      }
    },
    toggleThat () {
      this.kani = !this.kani
    },
    closeThat () {
      if (this.kani !== false) {
        this.toggleThat()
      }
    }
  }
}
</script>

<style scoped>
body h1 {
  position: fixed;
  z-index: 6;
}

body input + label {
  position: fixed;
  right: 40px;
  height: 20px;
  width: 15px;
  z-index: 5;
}

body input + label span {
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  margin-top: -1px;
  left: 0;
  display: block;
  background: #020304;
  transition: 0.5s;
}

body input + label span:first-child {
  top: 3px;
}

body input + label span:last-child {
  top: 16px;
}

body label:hover {
  cursor: pointer;
}

body input:checked + label span {
  opacity: 0;
  top: 50%;
}

body input:checked + label span:first-child {
  opacity: 1;
  transform: rotate(405deg);
}

body input:checked + label span:last-child {
  opacity: 1;
  transform: rotate(-405deg);
}

body input ~ nav {
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  z-index: 3;
  transition: 0.5s;
  transition-delay: 0.5s;
  overflow: hidden;
}

body input ~ nav > ul {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 20%;
  right: 20%;
}

body input ~ nav > ul > li {
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0s;
}

body input ~ nav > ul > li > a {
  text-decoration: none;
  text-transform: uppercase;
  color: #020304;
  font-weight: 700;
  font-family: sans-serif;
  display: block;
  padding: 30px;
}

body input:checked ~ nav {
  height: 100%;
  transition-delay: 0s;
}

body input:checked ~ nav > ul > li {
  opacity: 1;
  transition-delay: 0.5s;
}
</style>
