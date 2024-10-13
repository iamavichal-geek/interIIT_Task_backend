
import express from "express";
import pg from "pg";
import * as env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"; // Import cors

const port = 3001;
const app = express();
env.config();

// Use cors middleware
app.use(cors());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,

    // connectionString: process.env.POSTGRES_URL,
});

db.connect();

// Home route
app.get("/", (req, res) => {
    res.send("Home");
});

// Fetch all godowns
app.get('/api/godowns', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM godowns");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch items for a specific godown
app.get('/api/items/:godownID', async (req, res) => {
    const { godownID } = req.params;
    try {
        const result = await db.query("SELECT * FROM items WHERE godown_id = $1", [godownID]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch child godowns for a specific parent godown
app.get('/api/child-godowns/:parentID', async (req, res) => {
    const { parentID } = req.params;
    try {
        const result = await db.query("SELECT * FROM godowns WHERE parent_id = $1", [parentID]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`app listening on port ${port}...`);
});
