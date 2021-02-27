const db = require('../db')
const Order = db.Orders

module.exports = async function updateOrderbonusCode(req, res) {
    try {
        const productId = req.params.id  
        await Order.updateOne(
            { 'bonusCode._id': productId },
            {
                $set: {
                    ...req.body.code && { 'bonusCode.$.code': req.body.code }, //nii iga väärtusega mis peab olema muudetav
                    ...req.body.discount && { 'bonusCode.$.discount': req.body.discount },
                }
            }
        );
        res.status(200).json({ message: 'Successs!' })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

