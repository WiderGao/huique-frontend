const Wishlist = () => import('../extra/views/WishList.vue')
export default [
    {
        path: '/event/wishlist',
        name: 'Wishlist',
        meta: {
            title: '小小心愿单',
            requireAuth: false
        },
        component: Wishlist
    },
]