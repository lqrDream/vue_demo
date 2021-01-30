let mutations = {
  readDeincreased(state){
    state.read--
  },
  homeList(state,payload){
    state.home = payload
  },
  bannerList(state,payload){
    state.banner = payload
  }
}
export default mutations
