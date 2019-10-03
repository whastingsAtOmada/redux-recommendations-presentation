const apiRequests = {
  get() {
    return Promise.resolve({
      data: { fake: 'response' },
    })
  }
}

export default apiRequests