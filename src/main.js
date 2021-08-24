import {createApp} from 'vue'
import {createStore} from "vuex";
import App from './App.vue'

const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state, val = 1) {
            state.count += val
        },
        decrement(state, val = 1) {
            state.count -= val
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
