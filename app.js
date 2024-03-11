const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const connectMongodb = require('./init/mongodb');
const {authRoute,categoryRoute, fileRoute} =  require('./routes');

const {errorHandler}  = require('./middlewares');
const notFound = require('./controllers/notFound');
//init app
const app = express();
//connect to database
connectMongodb();
//third party middleware
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json({limit:"500mb"}));
app.use(bodyParser.urlencoded({limit:"500mb",extended:true}));
app.use(morgan('dev'));
//route section
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/file',fileRoute);
//not found route
app.use('*',notFound);
//error handling middleware
app.use(errorHandler);
module.exports = app;