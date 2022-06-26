import * as rl from 'readline-sync'
import { ProductMenu } from './product-menu';
enum AdminChoice {
    PRODUCT_MANAGEMENT = 1,
    CATEGORY_MANAGEMENT = 2,

}
export class AdminMenu{
    private productMenu = new ProductMenu();
    run() {
        let choice = -1
    
        do {
            console.log(`============Quản lý cửa hàng============`)
            console.log(`1. Quản lý danh mục sản phẩm`)
            console.log(`2. Thêm sản phẩm`)
            console.log(`0. Đăng xuất`)
            choice = +rl.question(`Nhập lựa chọn của bạn :`)
            switch (choice) {
                case AdminChoice.PRODUCT_MANAGEMENT : {
                    this.productMenu.run();
                    break;
                }
                case AdminChoice.CATEGORY_MANAGEMENT : {
                console.log(`2. Quản lý danh mục sản phẩm`)

                }
            }

        } while (choice != 0)
    }
}