import { createStore } from 'vuex';
import articles from './modules/articles'


const store = createStore({
   modules:{
      articles,
   }
});

export default store;