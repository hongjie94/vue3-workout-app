export default {
  getUserData: ({ commit }, uid) => {
    commit('getUid', uid)
    commit('getUnlockedWorkouts', uid)
    commit('getUserCalendar', uid)
  }
}
