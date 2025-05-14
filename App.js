// 
import express from 'express';
//local module
import userRgister from './routes/UseRegister.js';
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello World');
    next();
    }
);

app.use('/user', userRgister);

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});