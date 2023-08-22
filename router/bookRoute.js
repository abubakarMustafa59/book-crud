import express from 'express';
import bookModel from '../Model/bookModel.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const search = req.query.name || "";
    const status = req.query.status || "";
    // const ageGTE = req.query.age || 0; // age greater than or equal to 18
    const page = parseInt(req.query.page) || 1; // get the page number from the query parameter
    const limit = parseInt(req.query.limit) || 4; // set a default limit of 10 documents per page

    const query = {
        name: { $regex: search, $options: "i" },
        status: status === "Available" ? "Available" : { $regex: status, $options: "i" },
        // age: { $gte: ageGTE },
    };
    try {
        const count = await bookModel.countDocuments(query); // get the total number of documents that match the query

        const book = await bookModel.find(query).skip((page - 1) * limit).limit(limit);
        res.send({ book, count });
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id)
        res.send(book)
    } catch (error) {
        res.send({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        console.log("first", req.body)
        const book=await bookModel.create(req.body)
        res.send({book})
        // if (req.file) {
        //     const { name, age, status } = req.body;
        //     req.file.path = req.file.path.replace(`\\`, `/`);
        //     const file = {
        //         image: req.file.path,
        //     };
        //     const newData = new bookModel({
        //         name: name,
        //         age: age,
        //         image: file.image,
        //         status: status
        //     })
        //     console.log(newData)
        //     const newModel = await bookModel.create(newData)
        //     res.send(newModel)
        // }
        // else {
        //     res.send("Image is required")
        // }
    } catch (error) {
        res.send({ message: error + "Spmething went wrong" })

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const book = await bookModel.findByIdAndDelete(req.params.id)
        res.send(book)
    } catch (error) {
        res.send(error)
    }
})


router.patch("/:id", async (req, res) => {
    try {
        // if (req.file) {
        //     const { name, age, status } = req.body;
        //     req.file.path = req.file.path.replace(`\\`, `/`);
        //     const file = {
        //         image: req.file.path,
        //     };
        //     const newData = {
        //         name: name,
        //         age: age,
        //         image: file.image,
        //         status: status
        //     }
        //     const newModel = await bookModel.findByIdAndUpdate(req.params.id, newData)
        //     res.send(newModel)
        // }
        // else {
            // }
            console.log("update",req.body)
                const book = await bookModel.findByIdAndUpdate(req.params.id, req.body)
                res.send(book)
    } catch (error) {
        res.status(500).send(error);
    }
});
// router.patch('/:id', async (req, res) => {
//     try {
//         const book = await bookModel.findByIdAndUpdate(req.params.id, req.body)
//         res.send(book)
//     } catch (error) {
//         res.send(error)
//     }
// })

export default router