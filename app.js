const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();







app.get("*", (req,res) => {
    res.status(404).send('page not found');
})

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
})