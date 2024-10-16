
import express from "express";
import pg from "pg";
import * as env from "dotenv";
import cors from "cors"; 

const port = 3001;
const app = express();
env.config();


app.use(cors());


const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: {
        rejectUnauthorized: false, // For self-signed certificates (common on hosted platforms like Aiven)
    }
    
});

db.connect();

app.get("/", (req, res) => {
    res.send("This is default route");
});


app.get('/api/godowns', async (req, res) => {
    try {const result = await db.query(`SELECT * FROM "Godown"`);
        res.json(result.rows);
    } catch (err) {console.log(err);res.status(500).json({ error: err.message });
    }
});


app.get('/api/items/:godownID', async (req, res) => {
    const { godownID } = req.params;
    try {const result = await db.query("SELECT * FROM \"Item\" WHERE godown_id = $1", [godownID]);
        res.json(result.rows);
    } catch (err)
     {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/child-godowns/:parentID', async (req, res) => {
    const { parentID } = req.params;
    try {const result = await db.query("SELECT * FROM \"Godown\" WHERE parent_id = $1", [parentID]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`app listening on port ${port}...`);
});


export default app;