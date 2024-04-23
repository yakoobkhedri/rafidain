import Swal from 'sweetalert2';

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cart = {
    namespaced: true,

    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        count(state) {
            return state.cart.length;
        },
        allItems(state) {
            return state.cart;
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    mutations: {
        add(state, product) {
            const item = state.cart.find(p => p.id == product.id);
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            updateLocalStorage(state.cart);
        },
        increment(state, id) {
            const item = state.cart.find(p => p.id == id);
            if (item) {
                item.quantity++
            } 
            updateLocalStorage(state.cart);
        },
        decrement(state, id) {
            const item = state.cart.find(p => p.id == id);
            if (item) {
                if (item.quantity>1) {
                    item.quantity--
                }
            } 
            updateLocalStorage(state.cart);
        },
        removeFromCart(state, id) {
            state.cart = state.cart.filter(cart => cart.id != id);
          
            updateLocalStorage(state.cart);
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('add', product);
            Swal.fire({
                title: 'محصول اضافه شد!',
                icon: 'success',
                toast: true,
                timer: 3000,
                position: 'top',
                timerProgressBar: true,
                showConfirmButton: false
            })
        },
        increment({ commit }, id) {
            commit('increment', id);
            Swal.fire({
                title: 'محصول به روزرسانی شد!',
                icon: 'success',
                toast: true,
                timer: 3000,
                position: 'top',
                timerProgressBar: true,
                showConfirmButton: false
            })
        },
        decrement({ commit }, id) {
            commit('decrement', id);
            Swal.fire({
                title: 'محصول به روزرسانی شد!',
                icon: 'success',
                toast: true,
                timer: 3000,
                position: 'top',
                timerProgressBar: true,
                showConfirmButton: false
            })
        },
        removeFromCart({ commit }, id) {
            commit('removeFromCart', id);
            Swal.fire({
                title: 'محصول حذف شد!',
                icon: 'warning',
                toast: true,
                timer: 3000,
                position: 'top',
                timerProgressBar: true,
                showConfirmButton: false
            })
        }
    }
}
export default cart;