package br.com.koerich.service.service;

import br.com.koerich.service.domain.Produto;
import br.com.koerich.service.repository.ProdutoRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;


    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public List<Produto> buscarTodos(String produtoNome, Long quantidadeProduto, Pageable pageable) {

        List<Produto> testeProduto = produtoRepository.findByProdutoNomeContainingIgnoreCaseAndQuantidadeProdutoGreaterThanEqual(
                produtoNome, quantidadeProduto, pageable);

        return testeProduto;


    }

    public Produto buscarPorId(Long id) {

        Optional<Produto> produtoOptional = produtoRepository.findById(id);
        if (produtoOptional.isEmpty()) {
            throw new RuntimeException("Produto não encontrado");
        }

        return produtoOptional.get();
    }

    public Produto salvarProduto(Produto produto) {
        produto.setId(null);

        return produtoRepository.save(produto);
    }

    public Produto atualizarProduto(Long id, Produto produto) {
        Produto produtoParaAtualizar = buscarPorId(id);

        produtoParaAtualizar.setProdutoNome(produto.getProdutoNome());
        produtoParaAtualizar.setQuantidadeProduto(produto.getQuantidadeProduto());
        produtoParaAtualizar.setValor(produto.getValor());
        produtoParaAtualizar.setDefeito(produto.getDefeito());

        return produtoRepository.save(produtoParaAtualizar);
    }
}
