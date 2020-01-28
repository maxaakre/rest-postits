const express = require("express");
const app = express();
const postitsRoutes = require("./routes/postit");



app.use(express.urlencoded());
app.use(express.json());

app.use('/postits', postitsRoutes)






PORT = 3000;


app.listen(PORT, () => console.log(`You are on localhost:${PORT}`));