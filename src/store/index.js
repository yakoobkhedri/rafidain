import { createStore } from 'vuex';
import products from './modules/products'
import categories from './modules/category'
import articles from './modules/articles'
import cart from './modules/cart'


const store = createStore({
   modules:{
      products,
      articles,
      categories,
      cart
   }
});

export default store;