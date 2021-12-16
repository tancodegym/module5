package product.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import product.backend.model.Producer;

public interface IProducerRepository extends JpaRepository<Producer,Long> {
}
