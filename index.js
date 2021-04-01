const express = require("express");
const app = express();
require("./models/dbConfigs");
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/post", postsRoutes);

app.listen(5500, () => console.log("server started: 5500"));
