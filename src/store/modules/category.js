const categories = {
    namespaced: true,

    state: {
        categories: [
            {
                id: 1,
                image: 'src/assets/img/composit.png',
                category:'پوشش نما'
            },
            {
                id: 2,
                image: 'src/assets/img/khe-2444-0615400s_51.png',
                category:'ابزارآلات'
            },
            {
                id: 3,
                image: 'src/assets/img/profil2.png',
                category:'پروفیل'
            },
            {
                id: 4,
                image: 'src/assets/img/fiberglas.png',
                category:'فایبرگلاس'
            },
            {
                id: 5,
                image: 'src/assets/img/yaragh.png',
                category:'یراق آلات'
            },
            {
                id: 6,
                image: 'src/assets/img/stair.png',
                category:'پله دکوراتیو'
            },
            {
                id: 7,
                image: 'src/assets/img/stair.png',
                category:'نرده'
            },
            {
                id: 8,
                image: 'src/assets/img/R-(3).png',
                category:'لوازم جانبی'
            }
        ]
    },
    getters:{
        allCategories(state){
             return state.categories
        }
    }
}
export default categories;