const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5173;

// Gunakan middleware cors
app.use(cors());

app.get('/download-zip', (req, res) => {
    const zipFilePath = path.join(__dirname, '../smtSlider.zip');
    res.download(zipFilePath, 'smtSlider.zip', (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
