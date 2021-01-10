const mongoose = require('mongoose');
const { Schema } = mongoose;

const carouselSchema = new Schema({
      imageUrl: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model('Carousel', carouselSchema);