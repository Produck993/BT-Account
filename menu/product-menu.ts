import { ProductManagement } from "../managemnet/product/product-management"
import * as rl from 'readline-sync'
import { Product } from "../model/product";

enum ProductChoice {
    SHOW_ALL_PRODUCT  = 1,
    CREAT_PRODYCT     = 2,
    EDIT_PRODUCT      = 3,
    DELETE_PRODUCT    = 4,
    SEACH_PRODUCT     = 5,
    CHECKOUT          = 0
}

export class ProductMenu{
    private productmenagement = new ProductManagement();
    run() {
        let choice = -1
        do {
            console.log(`=========Quản lý danh mục sản phẩm=========`)
            console.log(`1. Hiển thị danh sách sản phẩm`)
            console.log(`2. Thêm danh sách sản phẩm`)
            console.log(`3. Sửa danh sách sản phẩm`)
            console.log(`4. Xóa danh sách sản phẩm`)
            console.log(`5. Tìm kiếm sản phẩm`)
            console.log(`0. Thoát`)
            choice = +rl.question(`Nhập lựa chọn của bạn : `)
            switch ( choice) {
                case ProductChoice.SHOW_ALL_PRODUCT : {
                    this.showAllProduct()
                    break;
                }
                case ProductChoice.CREAT_PRODYCT : {
                   this.editProduct()
                    break;
                }
                case ProductChoice.EDIT_PRODUCT : {
                    break ; 
                }
                case ProductChoice.DELETE_PRODUCT : {
                    break;
                }
                case ProductChoice.SEACH_PRODUCT : {
                    break;
                }
                case ProductChoice.CHECKOUT : {
                    break ;
                }
            }
        } while (choice != 0)
    }

    showAllProduct() {
        console.log(`==========danh sách sản phẩm==========`)

        let product = this.productmenagement.getAll();
        for (let i = 0; i < product .length; i++ ) {
            console.log(`${i + 1}, ${product[i].name}, ${product[i].price}, ${product[i].description}`)
        }
    }

    editProduct() {
        console.log(`==========thêm mới sản phẩm==========`)    
        let product = this.inputProduct()
        this.productmenagement.creatNew(product)
    }

    inputProduct() {
        let name = rl.question(`nhập tên sản phẩm mới : `)
        let price = +rl.question(`nhập giá sản phẩm mới : `)
        let description = rl.question(`nhập mô tả sản phẩm mới : `)
        return new Product(name,price,description)
    }

}