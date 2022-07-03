import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    mutations: {
        increment (state, payload) {
            state.count += payload.amount
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 2000)
        }
    }
});
export default store;