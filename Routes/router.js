// import express from "express";
// const router = express.Router();
// // import upload from "../Multer/multer.js";
// import userModel from "../Models/users.js";

// router.get("/", async (req, res) => {
//     try {
//         const data = await userModel.find();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.get("/:id", async (req, res) => {
//     try {
//         const data = await userModel.findById(req.params.id);
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.post("/", upload.single("file"), async (req, res) => {
//     try {
//         if (req.file) {
//             req.file.path = req.file.path.replace(`\\`, `/`);

//             const file = {
//                 link: `${req.protocol}://${req.get("host")}/${req.file.path}`,
//                 name: req.file.filename,
//                 original_name: req.file.originalname,
//                 type: req.file.mimetype,
//                 path: req.file.path,
//             };
//             const data = await userModel.create(file);
//             res.status(200).json(data);
//         } else {
//             res.status(400).send("no file found");
//         }
//     } catch (error) {
//         res.send(error);
//     }
// });

// router.patch("/:id", upload.single("file"), async (req, res) => {
//     try {
//         if (req.file) {
//             console.log("file")
//             req.file.path = req.file.path.replace(`\\`, `/`);

//             const file = {
//                 link: `${req.protocol}://${req.get("host")}/${req.file.path}`,
//                 name: req.file.filename,
//                 original_name: req.file.originalname,
//                 type: req.file.mimetype,
//                 path: req.file.path,
//             };
//             const data = await userModel.findByIdAndUpdate(req.params.id, file);
//             res.status(200).json(data);
//         } else {
//             res.status(400).send("no file found");
//         }
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.delete("/:id", async (req, res) => {
//     try {
//         const data = await userModel.findByIdAndRemove(req.params.id);
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// export default router;