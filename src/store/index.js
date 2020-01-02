import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        msg: "是他是他就是他",
        num: 10
    },
    getters: {
        db2(state) {
            return state.num * Math.random()
        }
    }
})
export default store
