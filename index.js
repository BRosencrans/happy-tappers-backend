const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const cors = require("cors");

let corsOptions = {
    origin: "http://localhost: 3001",
};

const PORT = 3001;
const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server is running on ${PORT}.`);
    });
});
