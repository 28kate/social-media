const express = require("express");
const app = express();
const cors = require("cors"); //allows servers to specify not only who can access the assets, but also how they can be accessed//

app.use(cors());
app.use(express.json()); //to recognize the incoming Request Object as a JSON Object.//

const userRoute = require("./routes/User");
app.use("/user", userRoute);
const uploadRoute = require("./routes/Upload");
app.use("/upload", uploadRoute);

app.listen(3001, (req, res) => {
  console.log("Server running...");
});
