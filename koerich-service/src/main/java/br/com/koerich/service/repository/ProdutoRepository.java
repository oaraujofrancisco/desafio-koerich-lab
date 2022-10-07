package br.com.koerich.service.repository;

import br.com.koerich.service.domain.Produto;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    List<Produto> findByProdutoNomeContainingIgnoreCaseAndQuantidadeProdutoGreaterThanEqual(
            String produtoNome, Long quantidadeProduto, Pageable pageable);
}
