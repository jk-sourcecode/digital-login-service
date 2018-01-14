const couchbase = require('common/couchbase')


module.exports = {
  Save(key, value) {
    return new Promise((resolve, reject) => {
      couchbase.Insert(key, value)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
  },
  Update(key, value) {
    return new Promise((resolve, reject) => {
      couchbase.Upsert(key, value)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
  },
  Select(query) {
    return new Promise((resolve, reject) => {
      couchbase.ExecuteQuery(query)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
  },
  Remove(key) {
    return new Promise((resolve, reject) => {
      couchbase.RemoveDocument(key)
        .then(result => resolve(result))
        .catch(err => reject(err))
    })
  },
}
