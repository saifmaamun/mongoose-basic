// import mongoose, app

import mongoose from 'mongoose';
import app from './app';


const port:number = 7000   //declare port 








// naming the main function 
async function server() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongodb-try');

    app.listen(port, () => {
        console.log(`testing plus practice app listening on port ${port}`)
      })
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server()                //call the function server, to run the server








