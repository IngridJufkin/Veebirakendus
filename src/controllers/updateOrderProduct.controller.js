const db = require('../db')
const Order = db.Orders

module.exports = async function updateOrderProduct(req, res) {
    try {
        const productId = req.params.id  // Orderis oleva toote _id 
        await Order.updateOne(
            { 'products._id': productId },
            {
                $set: {
                    ...req.body.amount && { 'products.$.amount': req.body.amount }, //nii iga väärtusega mis peab olema muudetav
                    ...req.body.weight && { 'products.$.weight': req.body.weight },
                    ...req.body.price && { 'products.$.price': req.body.price },
                    ...req.body.notes && { 'products.$.notes': req.body.notes },
                    ...req.body.category && { 'products.$.category': req.body.category }
                }
            }
        );
        res.status(200).json({ message: 'Successs!' })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

