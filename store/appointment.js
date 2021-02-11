export const state = () => ({
  appointments: []
})
export const getters = {
  appointments: state => state.appointments
}
export const mutations = {
  setAppointment (state, payload) {
    state.appointments = payload
  }
}
