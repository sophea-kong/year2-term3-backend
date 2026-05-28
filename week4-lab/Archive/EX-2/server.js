import express from "express";
import { articles, journalists } from "./models/data.js";
import articleRoute from './routes/articlesRoutes.js'
import joiurnalistRoute from './routes/journalistRoutes.js'
import categoriesRoute from './routes/categoriesRoutes.js'

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });
app.use("/articles",articleRoute);
app.use("/journalist",joiurnalistRoute);
app.use('/categories',categoriesRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
