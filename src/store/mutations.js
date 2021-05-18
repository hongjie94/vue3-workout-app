import db from '@/components/firebaseInit'

export default {
  // Get user UID
  getUid: (state, uid) => { state.uid = uid },

  // Get user Unlocked Workouts form firestore
  getUnlockedWorkouts: (state, uid) => {
    console.log('getUnlockedWorkouts')
    const dbRef = db.collection(uid).doc('unlockedWorkouts')
    dbRef.get().then((doc) => {
      const workouts = doc.data().unlockedWorkouts
      if (workouts) {
        const reverseWorkouts = [...workouts].reverse()
        state.unlockedWorkouts = reverseWorkouts
      } else {
        return console.log('No unlocked Workout')
      }
    })
  },

  // Get user Calendar form firestore
  getUserCalendar: (state, uid) => {
    console.log('getUserCalendar')
    const dbRef = db.collection(uid).doc('userCalendar')
    dbRef.get().then((doc) => {
      const calendarData = doc.data().userCalendar
      if (calendarData) {
        state.userCalendar = calendarData
      } else {
        return console.log('No Calendar Data')
      }
    })
  }
}
