### Mongo DB Task Details

1.  Find all the information about each products
2.  Find the product price which are between 400 to 800
3.  Find the product price which are not between 400 to 600
4.  List the four product which are grater than 500 in price
5.  Find the product name and product material of each products
6.  Find the product with a row id of 10
7.  Find only the product name and product material
8.  Find all products which contain the value of soft in product material
9.  Find products which contain product color indigo and product price 492.00
10. Delete the products which product price value are same

#### 1. Find all the information about each products

Query

```javascript
db.product.find();
```

#### 2. Find the product price which are between 400 to 800

Query

```javascript
db.product.find({
  $and: [{ product_price: { $gte: 400 } }, { product_price: { $lte: 800 } }],
});
```

#### 3. Find the product price which are not between 400 to 600

Query

```javascript
db.product.find({
  $or: [{ product_price: { $gt: 600 } }, { product_price: { $lt: 400 } }],
});
```

#### 4. List the four product which are grater than 500 in price

Query

```javascript
db.product.find({ product_price: { $gt: 500 } }).limit(5);
```

#### 5. Find the product name and product material of each products

Query

```javascript
db.product.find({}, { product_name: 1, product_material: 1 });
```

#### 6. Find the product with a row id of 10

Query

```javascript
db.product.find({ id: "10" }); //in json file id is string
```

#### 7. Find only the product name and product material

Query

```javascript
db.product.distinct("product_name");
db.product.distinct("product_material");
```

#### 8. Find all products which contain the value of soft in product material

Query

```javascript
db.product.find({ product_material: "Soft" });
```

#### 9. Find products which contain product color indigo and product price 492.00

Query

```javascript
db.product.find({
  $and: [{ product_color: "indigo" }, { product_price: 492 }],
}); //in json file product price 492 with color indigo not found

db.product.find({ $or: [{ product_color: "indigo" }, { product_price: 492 }] }); // but with price 492 other color product available
```

#### 10. Delete the products which product price value are same

Query

```javascript
db.product
  .find()
  .sort({ product_price: 1 })
  .forEach(function (eachProduct) {
    db.product.deleteOne({
      _id: { $gt: eachProduct._id },
      product_price: eachProduct.product_price,
    });
  });
```
