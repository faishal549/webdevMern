require("dotenv").config()
const express = require("express")
const cors = require('cors')
const app = express();
const router = require("./router/auth-router")
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router')
const adminRoute = require('./router/admin-router')
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const port = process.env.PORT || 5000;


const corsOptions = {
    origin: ["http://localhost:5173", "https://webdev-mern-2xza.vercel.app"], // Removed trailing slash
    method: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"], // Corrected format
    credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use("/api/auth", router)
app.use("/api/form", contactRoute)
app.use("/api/user", serviceRoute)
app.use("/api/admin", adminRoute)


app.use(errorMiddleware)

app.get("/", (req, res) => {
    res.send("<h1>Hello This is home page</h1>")
})
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`listening at port no ${port}`)
    })
});
