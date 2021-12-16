package product.backend.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import product.backend.model.Producer;
import product.backend.repository.IProducerRepository;
import product.backend.service.IProducerService;

import java.util.List;

@Service
public class ProducerService implements IProducerService {
        @Autowired
    private IProducerRepository iProducerRepository;

    @Override
    public List<Producer> getAll() {
        return iProducerRepository.findAll();
    }
}
