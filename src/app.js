import express from "express";
import cors from "cors";
const app = express();

//Basic config 
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "32kb"}));
app.use(express.static("public"));

//CORS config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],

}));

app.get('/', (req, res) => {
  res.send('Welcome to baseCampy!');
})

// Route
import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);


app.get('/instagram', (req, res) => {
  res.send('Hello this is an instagram page!');
})

export default app;