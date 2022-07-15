class Storage {
  set (key, val) {
    if (typeof val === 'object') {
      val = JSON.stringify(val)
    }
    localStorage.setItem(key, val)
  }

  get (key) {
    const data = localStorage.getItem(key)
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  }

  remove (key) {
    localStorage.removeItem(key)
  }
}

const storages = new Storage()
export default storages
