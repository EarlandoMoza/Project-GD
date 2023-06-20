const mongoose =  require('mongoose');

const merchSchema = mongoose.Schema(
    {
        nama:{
            type:String,
            required:true,
        },
        desk:{
            type: String,
            required:true
        },
        harga:{
            type:String,
            required:true,
        },
        gambar:{
            type:String,
            required:true,
        }
        
    },
    {
        timestamps:true
    }
)

const Merch = mongoose.model('Merch', merchSchema)

module.exports = Merch
