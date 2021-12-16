package product.backend.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import product.backend.model.Product;
import product.backend.repository.IProductRepository;
import product.backend.service.IProductService;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> getAll() {
        return iProductRepository.findAll();
    }

    @Override
    public void createProduct(Product product) {
        iProductRepository.save(product);
    }

    @Override
    public void updateProduct(Product product) {
        iProductRepository.save(product);

    }

    @Override
    public void deleteProduct(Long id) {
        iProductRepository.delete(findById(id));
    }

    @Override
    public Product findById(Long id) {
        return iProductRepository.findById(id).get();
    }

    @Override
    public List<Product> getListByPage(Long page, int size) {
        return iProductRepository.getListByPage(page,size);
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return iProductRepository.findAll(pageable);
    }
}
