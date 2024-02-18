const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect(
    'mongodb+srv://medpabhandari:~Sunwuk0ng@cluster0.ida4qir.mongodb.net/'
    )
.then(()=>{
    console.log('connected mongo db')
})
.catch((e)=>console.log(e));