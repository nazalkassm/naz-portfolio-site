const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/message', (req, res) => {
  const { name, email, message } = req.body;
  console.log({ name, email, message });
  res.status(200).json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
