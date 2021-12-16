package product.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import product.backend.model.Product;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Long> {
    @Query(value="Select * from product Order By id limit :page,:size ",nativeQuery=true)
    List<Product> getListByPage(@Param("page") Long page, @Param("size") int size);

//
//    Page<Product> findAll(Pageable pageable);


}
