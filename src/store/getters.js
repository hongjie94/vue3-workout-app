export default {
  CardioWorkouts: (state) => {
    return state.workouts.filter(
      (workout) => workout.category === 'Cardio'
    )
  },
  MuscleWorkouts: (state) => {
    return state.workouts.filter(
      (workout) => workout.category === 'Muscle'
    )
  },
  YogaWorkouts: (state) => {
    return state.workouts.filter(
      (workout) => workout.category === 'Yoga'
    )
  },
  UnlockedWorkoutName: (state) => {
    if (state.unlockedWorkouts) {
      const Unlockedname = []
      state.unlockedWorkouts.forEach(workouts => {
        Unlockedname.push(workouts.workoutName)
      })
      return Unlockedname
    } else {
      console.log('No data available')
    }
  }
}
