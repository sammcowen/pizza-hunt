const {Schema, Model} = require('mongoose');

const PizzaSchema = new Schema({
pizzaName:{
    type:String,
},
createdBy: {
    type:String,
},
createdAt: {
    type:Date,
    default:Date.now,
},
size:{
    type:String,
    default:'Large',

},
toppings:[]

});
// create Pizza Model using Pizza Schema 
const Pizza = model('Pizza',PizzaSchema);
// export pizza model 
module.exports = Pizza;