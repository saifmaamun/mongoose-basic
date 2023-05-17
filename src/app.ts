// import express, cors

import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';




const app:Application = express()
app.use(cors()); //use cors


app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('keep rocking')
    next()
})


export default app