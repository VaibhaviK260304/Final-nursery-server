import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())

const plants = [{
        "id": 1,
        "name": "Bamboo",
        "category": "indoor",
        "image": "https://vaaree.com/products/faux-evergreen-bamboo-plant-with-pot-dark-green?pr_prod_strat=e5_desc&pr_rec_id=a769795a9&pr_rec_pid=8593226170614&pr_ref_pid=8593226137846&pr_seq=uniform",
        "price": "500",
        "description": "Bamboo grows well both indoors and outdoors. If you're growing lucky bamboo in water, you can train it to twist and curl in different ways. You can also arrange different types of bamboo plants together. For example, try potting green and variegated bamboo stalks together."
    },            //This is a temporary DataBase
    {
        "id": 2,
        "name": "Jasmin",
        "category": "indoor",
        "price": "250",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMPWirbmwewB6MWH0XdKlOVTUza1YtLhdcobbMn34S5cCzgGDLNF5T4of-_Q2xYA2nzIJ5XYzPr2wNoxCUmLjJ3BIwqLe6hwtQIw2PS3gz&usqp=CAc",
        "description": "Jasmine is a genus of shrubs and vines in the olive family of Oleaceae. It contains around 200 species native to tropical and warm temperate regions of Eurasia, Africa, and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers."
    },
    {
        "id": 3,
        "name": "Rose",
        "category": "indoor",
        "price": "300",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMPWirbmwewB6MWH0XdKlOVTUza1YtLhdcobbMn34S5cCzgGDLNF5T4of-_Q2xYA2nzIJ5XYzPr2wNoxCUmLjJ3BIwqLe6hwtQIw2PS3gz&usqp=CAc",
        "description": "Roses are a group of perennial and deciduous shrubs."
    },
    {
        "id": 4,
        "name": "Lily",
        "category": "indoor",
        "price": "200",
        "image":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMPWirbmwewB6MWH0XdKlOVTUza1YtLhdcobbMn34S5cCzgGDLNF5T4of-_Q2xYA2nzIJ5XYzPr2wNoxCUmLjJ3BIwqLe6hwtQIw2PS3gz&usqp=CAc",
        "description": "Lilies are a genus of flowering plants which includes around 100 species."
    }
]
app.post("/plant", (req, res)=>{
    const {name, category, image, price, description} = req.body

    if(!name){
        return res.json({
            success: false,
            data: null,
            message: "Please enter a name for the plant."
        })
    }    
    if(!category){
        return res.json({
            success: false,
            data: null,
            message: "Please enter a category of the plant."
        })
    }    
    if(!image){
        return res.json({
            success: false,
            data: null,
            message: "Please the image of the plant."
        })
    }    
    if(!price){
        return res.json({
            success: false,
            data: null,
            message: "Please enter price for the plant."
        })
    }    
    if(!description){
        return res.json({
            success: false,
            data: null,
            message: "Description can not be empty."
        })
    }

    const randomId = Math.round(Math.random() * 1000)

    const newPlant = { id: randomId, name: name, category:category, image: image, price: price, description: description}

    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added!!!"
    })
})