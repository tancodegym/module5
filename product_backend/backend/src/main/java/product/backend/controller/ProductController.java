package product.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import product.backend.model.PageProduct;
import product.backend.model.Producer;
import product.backend.model.Product;
import product.backend.service.IProducerService;
import product.backend.service.IProductService;

import java.util.List;

@RestController
@EnableWebMvc
@RequestMapping("/product")
//@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@CrossOrigin
public class ProductController {
    @Autowired
    IProducerService iProducerService;
    @Autowired
    IProductService iProductService;

    @GetMapping("/list")
    public ResponseEntity<?> getProductList() {
        List<Product> productList = iProductService.getAll();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
    @GetMapping("/producerList")
    public ResponseEntity<?> getProducerList() {
        List<Producer> producerList = iProducerService.getAll();
        return new ResponseEntity<>(producerList, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        iProductService.createProduct(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping("/update")
    public ResponseEntity<?> updateProduct(@RequestBody Product product) {
        iProductService.updateProduct(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/findById")
    public ResponseEntity<?> getProduct(@RequestBody Long id) {
        Product product  = iProductService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @PostMapping("/delete")
    public ResponseEntity<?> deleteProduct(@RequestBody Long id) {
            iProductService.deleteProduct(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
//    @GetMapping("/getPage/{page}")
//    public ResponseEntity<PageProduct> getPage(@PathVariable Long page) {
//        List<Product> totalPage = iProductService.getListByPage((long) 0,999999);
//        int size =2;
//        int total= (totalPage.size()+1)/size;
//        long page1= page*size;
//        List<Product> productList = iProductService.getListByPage(page1,size);
//        PageProduct pageProduct = new PageProduct(total,productList);
//        return new ResponseEntity<>(pageProduct, HttpStatus.OK);
//    }
//    @GetMapping("/getPage/{page}")
//    public ResponseEntity<?> getPage(@PathVariable Long page) {
////        Page<Product> productPage = iProductService.
//        return new ResponseEntity<>( HttpStatus.OK);
//    }
    @GetMapping("/getPage/{page}")
    public ResponseEntity<Page<Product>> findAll (@PathVariable ("page") int page) {
        Page<Product> productList = iProductService.findAll(PageRequest.of(page, 2));
        if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }


}
