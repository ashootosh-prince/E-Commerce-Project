const express = require('express');
const authToken = require("../middleware/authToken");

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userLogout = require('../controller/user/userLogout')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getProductDetails = require('../controller/product/getProductDetails')

//user route
router.post("/signup",userSignUpController);
router.post("/signin",userSignInController);
router.get("/userLogout",userLogout)



// //product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/product-details",getProductDetails)
router.post("/update-product",authToken,updateProductController)





module.exports = router