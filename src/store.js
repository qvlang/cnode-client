import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topicList: []
  },
  mutations: {
    updateTopics (state, data) {
      state.topicList = data.data
    }
  },
  actions: {
    getTopics (context) {
      axios.get('https://cnodejs.org/api/v1/topics')
      .then((res) => {
        // eslint-disable-next-line
        context.commit('updateTopics', res.data)
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err)
      })
    }
  },
  getters: {
    getTopicInfo: (state) => (id)=>{
      return state.topicList.find(topic=> topic.id === id)
    }
  }
})
