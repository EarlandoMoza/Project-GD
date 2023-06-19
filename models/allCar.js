const mongoose =  require('mongoose');

const carSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        merk:{
            type: String,
            required:true,
        },
        desc:{
            type: String,
            required:true
        },
        image:{
            type:String,
            required:true,
        }
        
    },
    {
        timestamps:true
    }
)

const Car = mongoose.model('Car', carSchema)

module.exports = Car
