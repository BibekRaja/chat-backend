const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const axios = require("axios");
const PORT = process.env.Port || 3001

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "c65414cc-d4b5-4a82-8217-d64154fe684b" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(PORT, () => {
    console.log("server started");
})

