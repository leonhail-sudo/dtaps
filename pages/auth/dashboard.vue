<template>
  <div>
    <Dashnav class="lg:hidden md:hidden w-full" />
    <div class="h-screen flex overflow-hidden bg-gray-100">
      <Dashnav class="lg:flex md:flex h-screen overflow-hidden hidden" />
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <Searchbar class="lg:flex md:flex hidden" />
        <main class="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
          <Main />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      main: true,
      sms: true,
      closed: true
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
</style>
