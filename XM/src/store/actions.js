import axios from "../router/axios";

let actions = {
  HOME(context) {
    axios({
      url: '/api/home',
      params: {_limit: 30}
    }).then(res => context.commit('homeList', res.data.data))
  },
  BANNER({state,commit}) {
    axios({
      url: '/api/banner',
      params: {_limit: 3}
    }).then(res => commit('bannerList', res.data.data))
  }
}

export default actions