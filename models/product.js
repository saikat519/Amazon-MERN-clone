const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      rating: {
        type: Number,
        default: 0
      },
      imageUrl: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model('Product', productSchema);