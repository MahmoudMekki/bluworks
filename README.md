### install the modules
In order to build the project you need first to download the packages
`npm install`
### To run the project
`npm run dev`
### Endpoints
1. Number Count
```bash
   curl --location --request GET 'localhost:8080/api/v1/interval-count?start=-1&end=9' \
--header 'Content-Type: application/json' 
```
2. String Index
```bash
   curl --location --request GET 'localhost:8080/bluworks/api/v1/input-string?input="AAA"' \
--header 'Content-Type: application/json' 
```

2. Get Min steps
```bash
   curl --location --request POST 'localhost:8080/bluworks/api/v1/numbers' \
--header 'Content-Type: application/json' \
--data-raw '{
"set": [4,5,80]
}'
```
