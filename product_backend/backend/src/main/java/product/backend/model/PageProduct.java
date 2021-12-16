package product.backend.model;

import java.util.List;

public class PageProduct {
    private int totalPage;
    private List<Product> productList;

    public PageProduct(int totalPage, List<Product> productList) {
        this.totalPage = totalPage;
        this.productList = productList;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public List<Product> getProductList() {
        return productList;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }
}
