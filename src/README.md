# Salon Backend

This is a simple Express backend for a salon app. It has two routes:
- `GET /` → returns `{ ok: true }`
- `GET /health` → returns `healthy`

---

## Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd salon-backend



# Products API

## Example GET Request
GET /api/products

Response:
[
  { "id": 1, "name": "Shampoo", "price": 500 },
  { "id": 2, "name": "Hair Oil", "price": 300 }
]
## Get product by id
GET /api/products/1
{
  "id": 1,
  "name": "Shampoo",
  "price": 500
}

## Example POST Request
POST /api/products
Body:
{
  "name": "Face Wash",
  "price": 700
}

Response:
{
  "id": 3,
  "name": "Face Wash",
  "price": 700
}
# Firestore Products API

## What is Firestore?
Firestore is a NoSQL cloud database from Firebase. It stores data in documents inside collections and can be accessed in real-time.

## Example POST request body
{
  "name": "Laptop",
  "price": 1200,
  "description": "High-performance laptop"
}

## Example GET URL
## About Auth Routes
- Get all products: http://localhost:5000/api/products
- Get one product: http://localhost:5000/api/products/<productId>


Register: Users can create an account with name, email, password, and role.

Login: Users can log in to receive a JWT token.

Security: Passwords are hashed with bcrypt. JWT used for session tokens.

Database: Users stored in Firestore.

Structure: Controllers handle logic, routes handle API endpoints, utils handle hashing and JWT.