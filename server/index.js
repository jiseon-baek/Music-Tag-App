import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();



app.use(app.json({ limit: "20mb", extended: true }));
app.use(app.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
	res.send(
		'App is running!'
	);
})

const PORT = process.env.PORT || 5000;

//mongoose와 mongoDB연결
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true } )
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) =>  console.log(error.message));

mongoose.set('useFindAndModify', false);

