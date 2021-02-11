<template>
  <div class="py-6">
    <div v-if="add" class="flex w-full h-screen bg-smoke fixed justify-center items-center mx-auto z-20 lg:mt-0 -mt-16">
      <ValidationObserver
        v-slot="{ handleSubmit }"
        class="flex w-full h-screen fixed justify-center items-center mx-auto z-20"
      >
        <form
          class="flex w-full h-screen fixed justify-center items-center mx-auto z-20 lg:mt-0 -mt-16"
          @submit.prevent="handleSubmit(addApp)"
        >
          <div class="lg:w-1/2 md:w-1/2 w-full bg-white text-black1 rounded-lg p-4 lg:-ml-64 lg:-mt-10 p-8 lg:m-0 m-4">
            <div class="">
              <div class="border-b border-gray-300 pb-4">
                <h1 class="text-lg leading-6 font-medium text-gray-900">
                  Add New Appointment
                </h1>
              </div>
              <div class="mt-6 grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <div class="w-full mt-1">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Date"
                      rules="required"
                    >
                      <input
                        v-model="form2.appointment_date"
                        type="date"
                        class="shadow-sm border border-gray-300 p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                      <p class="text-red-500 w-auto text-xs italic">
                        {{ errors[0] }}
                      </p>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="col-span-2">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div class="mt-1">
                    <input
                      v-model="form2.description"
                      type="text"
                      class="shadow-sm border border-gray-300 p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                  </div>
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="mt-10 bg-gray-300 py-2 px-4 rounded-md text-gray-900 focus:outline-none mr-2"
                  @click="addAppointment"
                >
                  <svg
                    class="h-6 w-6 text-gray-900 inline-flex"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                  </svg>
                  &nbsp;Cancel
                </button>
                <button
                  type="submit"
                  :class="submitting ? 'opacity-25 cursor-not-allowed' : ''"
                  class="mt-10 bg-bluegreen py-2 px-4 rounded-md text-white focus:outline-none"
                >
                  <span v-if="submitting">
                    <pulse-loader class="inline-flex" :btn-loading="submitting" :color="color" :size="size" />
                  </span>
                  <div v-else>
                    <svg
                      class="h-6 w-6 text-white inline-flex"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    &nbsp;Add
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-4 md:px-8">
      <div class="flex w-full mx-auto px-4 sm:px-4 md:px-8">
        <div class="flex flex-wrap w-full p-4 rounded-md shadow-md bg-white">
          <div class="w-1/2">
            <h1 class="font-medium text-gray-900">
              Appointment
            </h1>
          </div>
          <div class="flex w-full justify-start border-t border-gray-300 mt-4">
            <div class="flex justify-start items-center lg:w-1/2 w-full py-4">
              <button class="bg-bluegreen py-2 px-4 rounded-md text-white focus:outline-none" @click="addAppointment">
                <svg
                  class="h-6 w-6 text-white inline-flex"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                &nbsp;ADD
              </button>
            </div>
          </div>
          <div class="flex w-full">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="w-full flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-4   lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-lg font-medium text-gray-500  tracking-wider whitespace-nowrap">
                            Description
                          </th>
                          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-lg font-medium text-gray-500  tracking-wider whitespace-nowrap">
                            Date
                          </th>
                          <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-lg font-medium text-gray-500  tracking-wider whitespace-nowrap">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="item in appointments.data" :key="item.id" class="w-full">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ item.description }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ dateFormatFormat(item.appointment_date) }}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {{ item.status }}
                          </td>
                        </tr>
                      <!-- More rows... -->
                      </tbody>
                    </table>
                    <div class="text-center">
                      <paginate
                        v-if="appointments && appointments.data && appointments.data.length >= 5"
                        v-model="page"
                        :page-count="appointments.meta.pagination.total_pages"
                        :page-range="3"
                        :margin-pages="2"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination-container'"
                        :page-class="'pagination-page'"
                        class="inline-flex"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <notifications group="foo" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    PulseLoader
  },
  data () {
    return {
      add: false,
      submitting: false,
      page: 1,
      form2: {},
      menus: [
        { name: 'Send SMS', value: 'sendsms', color: 'bg-pink-500', url: '/auth/sendsms', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
        { name: 'Create Campaign', value: 'account', color: 'bg-blue-500', url: '/auth/campaign', d: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
        { name: 'Create List', value: 'list', color: 'bg-green-500', url: '/auth/listmanagement', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { name: 'Create Contact', value: 'contact', color: 'bg-yellow-500', url: '/auth/contacts', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
        { name: 'Reports Summary', value: 'summary', color: 'bg-red-500', url: '/auth/reports', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
      ]
    }
  },
  computed: {
    ...mapGetters('appointment', {
      appointments: 'appointments'
    })
  },
  watch: {
    page () {
      this.getAppointment()
    }
  },
  mounted () {
    this.getAppointment()
  },
  methods: {
    addAppointment () {
      this.add = !this.add
    },
    async addApp () {
      try {
        this.submitting = true
        const res = await this.$axios.post('api/authorized/user/appoint', this.form2)
        if (res.status === 201) {
          this.$notify({
            type: 'success',
            group: 'foo',
            title: 'Success!',
            text: 'Succesfully Added'
          })
          this.add = false
          await this.getAppointment()
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
    async getAppointment () {
      try {
        const res = await this.$axios.get('api/authorized/user/get-appoint', {
          params: {
            page: this.page,
            limit: 5
          }
        })
        this.$store.commit('appointment/setAppointment', res.data)
      } catch (err) {
        this.$notify({
          type: 'error',
          group: 'foo',
          title: 'Error!',
          text: err.message
        })
      }
    }
  }
}
</script>

<style scoped>
h1,
h3,
label,
textarea,
select,
span{
  font-size: 12pt;
}
</style>
