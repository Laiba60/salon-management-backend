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

