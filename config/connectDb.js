const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser:true })
    
    console.log(`Server Running On ${mongoose.connection.host}`)
  } catch (err) {
    console.log(`${err}`)
    process.exit()
  }
}
module.exports = {
   connectDB
}