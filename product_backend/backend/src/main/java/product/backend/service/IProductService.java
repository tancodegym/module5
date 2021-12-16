package product.backend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import product.backend.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAll();
    void createProduct(Product product);
    void updateProduct(Product product);
    void deleteProduct(Long id);
    Product findById(Long id);
    List<Product> getListByPage(Long page,int size);
    Page<Product> findAll(Pageable pageable);
}
