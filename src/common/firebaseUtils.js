import firebase from 'firebase/app'

const { Timestamp } = firebase.firestore

export const timestampToDate = (timestamp) => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate()
  }
  return new Date(1e3 * timestamp.seconds + timestamp.nanoseconds / 1e6)
}

export const isTimestamp = (value) => {
  return (
    value &&
    (value instanceof Timestamp ||
      (typeof value.seconds === 'number' && typeof value.nanoseconds === 'number'))
  )
}

const convertTimestamps = (document) => {
  // eslint-disable-next-line guard-for-in
  for (const key in document) {
    const val = document[key]

    if (isTimestamp(val)) {
      // eslint-disable-next-line no-param-reassign
      document[key] = timestampToDate(val)
    }
    if (val != null && val.constructor === Object) {
      convertTimestamps(val)
    } else if (Array.isArray(val)) {
      val.forEach((item) => {
        if (item != null && item.constructor === Object) {
          convertTimestamps(val)
        }
      })
    }
  }
  return document
}

// Firestore data converter
export const timestampConverter = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return convertTimestamps(data)
  },

  toFirestore(data) {
    return data
  },
}
