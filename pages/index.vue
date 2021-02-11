<template>
  <div class="relative bg-img overflow-x-hidden h-screen">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-0 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
      </svg>
    </div>
    <div class="relative pt-6 lg:pb-16">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 class="text-4xl tracking-tight font-bold text-white sm:mt-5 sm:leading-none lg:text-5xl xl:text-6xl">
                  <span class="md:block">DTAPS</span>
                </h1>
              </div>
            </div>
            <div class="lg:col-span-6">
              <div v-if="login" class="mt-8 mt-24 lg:mt-10 bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div class="px-4 py-8 sm:px-10">
                  <p class="text-2xl font-medium text-gray-700">
                    Welcome Back!
                  </p>
                  <div class="mt-4">
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <form class="space-y-4" @submit.prevent="handleSubmit(doLogin)">
                        <div>
                          <ValidationProvider
                            v-slot="{ errors }"
                            name="User Name"
                            rules="required"
                          >
                            <input
                              v-model="email"
                              type="text"
                              placeholder="Username or Email"
                              class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                            >
                            <p class="text-red-500 text-xs italic">
                              {{ errors[0] }}
                            </p>
                          </ValidationProvider>
                        </div>
                        <div>
                          <label for="password" class="sr-only">Password</label>
                          <ValidationProvider
                            v-slot="{ errors }"
                            name="Password"
                            rules="required"
                          >
                            <input
                              v-model="password"
                              type="password"
                              placeholder="Password"
                              class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                            >
                            <p class="text-red-500 text-xs italic">
                              {{ errors[0] }}
                            </p>
                          </ValidationProvider>
                        </div>
                        <div class="text-center">
                          <button
                            type="submit"
                            :class="submitting ? 'opacity-25 cursor-not-allowed' : 'bg-blue-900'"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <span v-if="submitting">
                              <pulse-loader class="inline-flex" :btn-loading="submitting" :color="color" :size="size" />
                            </span>
                            <p v-else>
                              Login
                            </p>
                          </button>
                          <a class="block underline text-blue-400  cursor-pointer mt-4" @click="showRegister">Create Account</a>
                        </div>
                      </form>
                    </ValidationObserver>
                  </div>
                </div>
                <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10 mt-10">
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.
                  </p>
                </div>
              </div>
              <div v-if="register" class="mt-8 sm:mt-24 lg:-mt-24 bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div class="px-4 py-8 sm:px-10">
                  <p class="text-xl font-medium text-gray-700">
                    Create your Account
                  </p>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form class="space-y-4 mt-4" @submit.prevent="handleSubmit(doRegister)">
                      <div>
                        <label for="name" class="sr-only">First Name</label>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Name"
                          rules="required"
                        >
                          <input
                            v-model="form.name"
                            type="text"
                            placeholder="Name"
                            class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                          >
                          <p class="text-red-500 text-xs italic">
                            {{ errors[0] }}
                          </p>
                        </ValidationProvider>
                      </div>
                      <div>
                        <label for="name" class="sr-only">Middle Name</label>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="User Name"
                          rules="required"
                        >
                          <input
                            v-model="form.username"
                            type="text"
                            placeholder="User Name"
                            class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                          >
                          <p class="text-red-500 text-xs italic">
                            {{ errors[0] }}
                          </p>
                        </ValidationProvider>
                      </div>
                      <div>
                        <label for="mobile-or-email" class="sr-only">Email</label>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Email"
                          rules="required"
                        >
                          <input
                            v-model="form.email"
                            type="text"
                            placeholder="Email"
                            class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                          >
                          <p class="text-red-500 text-xs italic">
                            {{ errors[0] }}
                          </p>
                        </ValidationProvider>
                      </div>
                      <div>
                        <label for="password" class="sr-only">Password</label>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Password"
                          rules="required"
                        >
                          <input
                            v-model="form.password"
                            type="password"
                            placeholder="Password"
                            class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                          >
                          <p class="text-red-500 text-xs italic">
                            {{ errors[0] }}
                          </p>
                        </ValidationProvider>
                      </div>
                      <div>
                        <label for="password" class="sr-only">Confirm Password</label>
                        <ValidationProvider
                          v-slot="{ errors }"
                          name="Confirm Password"
                          rules="required"
                        >
                          <input
                            v-model="form.confirm_password"
                            type="password"
                            placeholder="Confirm Password"
                            class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                          >
                          <p class="text-red-500 text-xs italic">
                            {{ errors[0] }}
                          </p>
                        </ValidationProvider>
                      </div>
                      <div class="text-center">
                        <button
                          type="submit"
                          :class="submitting ? 'opacity-25 cursor-not-allowed' : 'bg-indigo-600'"
                          class="w-full flex justify-center py-2 mb-4 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span v-if="submitting">
                            <pulse-loader class="inline-flex" :btn-loading="submitting" :color="color" :size="size" />
                          </span>
                          <p v-else>
                            Register
                          </p>
                        </button>
                        <a class="underline text-blue-400  cursor-pointer" @click="showLogin">Already have an account?</a>
                      </div>
                    </form>
                  </ValidationObserver>
                </div>
                <div class="px-4 py-4 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.
                  </p>
                </div>
              </div>
              <div v-if="forgot" class="mt-8 sm:mt-24 lg:mt-10 bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div class="px-4 py-8 sm:px-10">
                  <p class="text-2xl font-medium text-gray-700">
                    Forgot Password
                  </p>
                  <div class="mt-4">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="email" class=" text-gray-500">Enter your Email Address to recover your password</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          autocomplete="current-email"
                          required
                          class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                        >
                      </div>
                      <div class="text-center">
                        <button type="submit" class="w-full flex justify-center py-2 mb-4 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Reset Password
                        </button>
                        <a class="underline text-blue-400  cursor-pointer" @click="showLogin">Click here to Login</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div v-if="register" class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10 mt-10">
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.
                  </p>
                </div>
              </div>
              <!-- <div v-if="forgot" class="mt-8 sm:mt-24 lg:mt-24 bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div class="px-4 py-8 sm:px-10">
                  <p class="text-xl font-medium text-gray-700">
                    Forgot Password
                  </p>
                  <div class="mt-4">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="email" class=" text-gray-500">Enter your Email Address to recover your password</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          autocomplete="current-email"
                          required
                          class="block w-full border border-gray-300 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none  border-gray-300 rounded-md"
                        >
                      </div>
                      <div class="text-center">
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Reset Password
                        </button>
                        <a class="underline text-blue-400  cursor-pointer" @click="hideLogin">Click here to Login</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                  <p class="text-xs leading-5 text-gray-500">
                    By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.
                  </p>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </main>
    </div>
    <notifications group="foo" />
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  auth: 'guest',
  layout: 'login',
  components: {
    ValidationObserver,
    ValidationProvider,
    PulseLoader
  },
  data () {
    return {
      form: {},
      login: true,
      register: false,
      size: '15px',
      color: '#8DF942',
      submitting: false,
      email: '',
      password: '',
      forgot: false
    }
  },
  async mounted () {
    await this.$axios.get('/sanctum/csrf-cookie')
  },
  methods: {
    async doRegister () {
      try {
        this.submitting = true
        if (this.form.password === this.form.confirm_password) {
          const res = await this.$axios.post('api/register-client', this.form)
          if (res.status === 200) {
            this.$notify({
              type: 'success',
              group: 'foo',
              title: 'Success!',
              text: 'Successfully Registered!.'
            })
            this.showLogin()
          }
        } else {
          this.$notify({
            type: 'error',
            group: 'foo',
            title: 'Error!',
            text: 'Password did not match!'
          })
        }
      } catch (err) {
        this.$notify({
          type: 'error',
          group: 'foo',
          title: 'Error!',
          text: err.message
        })
      } finally {
        this.submitting = false
      }
    },
    async doLogin () {
      try {
        this.submitting = true
        const login = {
          email: this.email,
          password: this.password
        }
        await this.$auth.loginWith('local', { data: login })
      } catch (err) {
        this.$notify({
          type: 'error',
          group: 'foo',
          title: 'Error!',
          text: err.message
        })
      } finally {
        this.submitting = false
      }
    },
    showRegister () {
      this.register = true
      this.login = false
      this.forgot = false
    },
    showLogin () {
      this.register = false
      this.login = true
      this.forgot = false
    },
    hideLogin () {
      this.register = false
      this.login = false
      this.forgot = true
    }
  },
  head: {
    title: 'DTAPS',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'MYSMS Marketing Platform & Powerful SMS Gateway for all your SMS needs. OTP, Notifications, Newsletters, Reminders, Polling, 2 WAY SMS, 2FA.'
      }
    ]
  }
}
</script>
<style scoped>
.bg-img {
  background-image: linear-gradient(0deg, rgba(45,55,72,0.9) 16%, rgba(45,55,72,0.9) 70%, rgba(45,55,72,0.9) 100%),url(~assets/img/denr.jpg);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 22% 0;
}
</style>
