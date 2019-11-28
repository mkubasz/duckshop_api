### Duck shop API

Api for mobile application to control your shop list, bucket and money.

## How to run

`yarn install`

`yarn start`

## Endpoints
```json
{
  "version": "0.0.1",
  "endpoints" : {
    "buckets" : {
      "routes" : [
        {"link":  "/buckets", "method":  "GET", "description":  "Return all buckets"},
        {"link":  "/buckets/:id", "method":  "GET", "description":  "Return one bucket"},
        {"link":  "/buckets/create", "method":  "POST", "description":  "Create new bucket"},
        {"link":  "/buckets/:id/products", "method":  "GET", "description":  "Return all products from selected bucket"},
        {"link":  "/buckets/:id/products/add", "method":  "POST", "description":  "Create new product in bucket"},
        {"link":  "/buckets/:id/products/:id", "method":  "GET", "description":  "Return product from bucket"},
        {"link":  "/buckets/:id/products/:id/save", "method":  "POST", "description":  "Save product as template"},
        {"link":  "/buckets/:id/products/:id/buy", "method":  "GET", "description":  "Select as bought product"},
        {"link":  "/buckets/:id/closed", "method":  "GET", "description":  "Closed bucket/ Archive bucket"},
        {"link":  "/buckets/:id/shared", "method":  "GET", "description":  "Shared bucket with others"}
      ]
    }
  }
}
```
