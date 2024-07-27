//imports from libraries
import express from "express"
import dotenv from "dotenv"
dotenv.config()

//import we made.
import { getHealth } from "./controllers/health.js"
import {postPlant, getPlants, getPlantId, putPlantId, deletePlantId} from "./controllers/plant.js"
import {error} from "./controllers/error.js"

const app = express()
app.use(express.json())

app.get("/health", getHealth)

app.get("/", (req, res)=>{
    res.json({
        success: true,
        data: [],
        message: "server is healthy"
    })
} )

app.post("/plant", postPlant)
app.get("/plants", getPlants)
app.get("/plant/:id", getPlantId )
app.put("/plant/:id", putPlantId)
app.delete("/plant/:id", deletePlantId)

app.use("*", error)

const port = process.env.port || 5000
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})