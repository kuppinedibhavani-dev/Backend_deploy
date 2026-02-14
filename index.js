const express = require('express');
const cors = require('cors');

const app = express();

// Allow frontend to access backend
app.use(cors({
    origin:"https://react-frontend-deploy-psi.vercel.app/"
}));

const PORT = process.env.PORT || 5000;

// Test route
app.get('/', (req, res) => {
    res.json({ message: "Backend is working 🚀" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
