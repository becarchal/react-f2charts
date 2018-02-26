
export default {
    namespace: 'index',
    state: {
        title: '',
    },
    subscriptions: {
  
    },
    effects: {
  
    },
    reducers: {
        setState(state, action) {
            return {...state, ...action};
        }
    }
  }
  