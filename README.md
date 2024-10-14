# Warehouse Management Backend

This is the backend API for a Warehouse Management System built with Node.js, Express, and PostgreSQL. The API manages information about **godowns** (locations) and **items** stored in the godowns. The backend is hosted on Vercel.

## Project Overview

This API allows users to:
- Manage godowns and their hierarchical structure (parent-child relationships).
- Manage items stored in godowns.
- Fetch godown and item data via RESTful endpoints.

### Live API

You can access the live API at:  
**[https://warehouse-pearl.vercel.app/](https://warehouse-pearl.vercel.app/)**

---

## Video Demonstration

To see the application in action, watch the video demonstration here:

**[Video Demonstration](https://drive.google.com/file/d/1vdFvnWb3S7cdF3JeCKHF9fr-68VBCyxg/view?usp=drive_link)**

---

## Features

- **CRUD Operations**: Manage godowns and items using RESTful API routes.
- **Relational Data**: Store godowns and items with relationships using PostgreSQL.
- **Secure Connection**: Uses SSL for secure database connections.
- **Deployed on Vercel**: Backend hosted on Vercel for fast and scalable performance.

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/warehouse-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd warehouse-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:

   Create a `.env` file in the root of your project and add your environment variables:

   ```
   PG_USER=your_postgres_username
   PG_HOST=your_postgres_host
   PG_DATABASE=your_postgres_database_name
   PG_PASSWORD=your_postgres_password
   PG_PORT=your_postgres_port
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` to access the API locally.

---

## Environment Variables

Ensure you have the following environment variables in your `.env` file:

```bash
PG_USER=your_postgres_username
PG_HOST=your_postgres_host
PG_DATABASE=your_postgres_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=your_postgres_port

DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>?sslmode=require
```

---

## API Endpoints

### Godowns

- **GET** `/api/godowns`: Fetch all godowns.
- **GET** `/api/child-godowns/:parentID`: Fetch child godowns by parent godown ID.
- **POST** `/api/godowns`: Create a new godown.
- **PUT** `/api/godowns/:id`: Update an existing godown.
- **DELETE** `/api/godowns/:id`: Delete a godown.

### Items

- **GET** `/api/items/:godownID`: Fetch all items stored in a specific godown.
- **POST** `/api/items`: Create a new item.
- **PUT** `/api/items/:id`: Update an existing item.
- **DELETE** `/api/items/:id`: Delete an item.

---

## Database Schema

### Godowns Table

| Column     | Type    | Description                                      |
|------------|---------|--------------------------------------------------|
| id         | UUID    | Primary key                                      |
| name       | VARCHAR | Name of the godown                               |
| parent_id  | UUID    | References the parent godown (null for top level) |

### Items Table

| Column        | Type     | Description                                |
|---------------|----------|--------------------------------------------|
| item_id       | UUID     | Primary key                                |
| name          | VARCHAR  | Name of the item                           |
| quantity      | INT      | Quantity in stock                          |
| category      | VARCHAR  | Category of the item                       |
| price         | DECIMAL  | Price of the item                          |
| status        | VARCHAR  | Item status (e.g., in_stock, out_of_stock)  |
| godown_id     | UUID     | Foreign key referencing the godown         |
| brand         | VARCHAR  | Brand of the item                          |
| attributes    | VARCHAR  | Additional attributes in JSON format       |
| image_url     | TEXT     | URL of the item image                      |

---

## Deployment

The backend is deployed on **Vercel**. To deploy your own version, follow these steps:

1. Link your repository to Vercel.
2. Set up environment variables (same as the `.env` file) in Vercel's dashboard under **Settings > Environment Variables**.
3. Deploy the project.

---

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building the API.
- **PostgreSQL**: Relational database for storing godowns and items.
- **Prisma**: ORM for interacting with the database.
- **Vercel**: Hosting platform for deployment.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- Thanks to **Aiven** for providing a PostgreSQL instance.
- Thanks to **Vercel** for free hosting services.

---

## Contact

For any questions or issues, please reach out at **avichaltrivedi111@example.com**.
