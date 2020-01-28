const express = require('express')
const router = express.Router();
const Postits = require('../models/postits.js')

router.get("/", async (req, res) => {
    const postits = await Postits.getPostits()
    res.json(postits)
});

router.post("/", async (req, res) => {
    const postits = await Postits.newPostits(req.body)
    res.json(postits)
});

router.delete("/:id", async (req, res) => {
    const postits = await Postits.removePostits(req.params.id)
    res.json(postits)
});

router.patch("/:id", async (req, res) => {
    const postits = await Postits.updatePostits(req.params.id, req.body)
    res.json(postits)
});

module.exports = router