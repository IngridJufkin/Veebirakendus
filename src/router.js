const express = require('express')
const router = express.Router()

const { getAllUsers, getUserDetails, addUser, updateUser, loginUser, getUserByEmail, getAllProducts,
    addProduct, deleteProduct, updateProduct,
    addOrder, getAllOrders, updateOrder,
    getAllBonus, addBonus, updateBonus, getOrderByID, getProductByID,
    getOrdersByDate, getOrdersByStatus, updateOrderProduct, updateOrderbonusCode
} = require('./controllers')

const auth = require('./config/auth') //impordime funktsiooni, mida kasutame config authis

router.get('/users', auth, getAllUsers)
router.get('/me', auth, getUserDetails) //auth vajalik me päringu juures middelware kasutamiseks
router.get('/user/:email', auth, getUserByEmail)
router.post('/user', addUser) //siia pole audentimist vaja
router.post('/userLogin', loginUser) //siia pole audentimist vaja , sets kasutaja pole sisse logitud
router.patch('/user/:id', auth, updateUser)


router.get('/products', auth, getAllProducts)
router.get('/product/:id', auth, getProductByID)
router.post('/product', auth, addProduct)
router.delete('/product/:id', auth, deleteProduct)
router.post('/product/:id', auth, updateProduct)


router.get('/orders', auth, getAllOrders)
router.post('/order', auth, addOrder)
router.patch('/order/:id', auth, updateOrder)
router.get('/order/:id', auth, getOrderByID)
router.get('/orders/:status', auth, getOrdersByStatus)
router.get('/orders/filter-date/:startDate/:endDate', auth, getOrdersByDate)
router.patch('/orders/product/:id', auth, updateOrderProduct)


router.get('/bonus', auth, getAllBonus)
router.post('/bonus', auth, addBonus)
router.patch('/bonus/:id', auth, updateBonus)
router.patch('/orders/bonuscode/:id', auth, updateOrderbonusCode)

module.exports = router
