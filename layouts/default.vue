<template>
  <div>
    <Navbar class="sticky top-0 z-20" />
    <Nuxt />
    <Footer class="pin bottom-0" />
  </div>
</template>

<script>
import Navbar from '~/components/navigation/newnav.vue'
import Footer from '~/components/navigation/footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.pagination-container {
  justify-content: center;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
.pagination-container li {
  padding: 8px;
}
.pagination-container .pagination-page {
  border-right: 1px solid lightgray;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}
.pagination-container > :first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid lightgray;
}
.pagination-container > :last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 1px solid lightgray;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}
.pagination-container li a {
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
}
.pagination-container .active {
  background-color: #0c69a2;
  border-top: 1px solid #0c69a2 !important;
  border-bottom: 1px solid #0c69a2 !important;
  color: white;
}
.pagination-container .disabled,
.pagination-container .disabled a {
  color: gray;
  cursor: not-allowed;
}
</style>
