import { Request, Response } from "express";
import { productService } from "./product.services";

// create a post  oparation
const productPostController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await productService.postAProduct(data)
        res.status(200).json({
            "success": true,
            "message": "Product created successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error);

    }

}
// finding all products from database
const findAllProduct = async (req: Request, res: Response) => {
    try {

        const result = await productService.findAllProducts();
        res.status(200).json({
            "success": true,
            "message": "Products fetched successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error);

    }
}
// finding a product using id
const findAProductUsingId = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productService.findAProduct(productId);
        res.status(200).json({
            "success": true,
            "message": "Product fetched successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error);

    }
}

// update a product using id
export const productController = {
    productPostController,
    findAllProduct,
     findAProductUsingId,
}