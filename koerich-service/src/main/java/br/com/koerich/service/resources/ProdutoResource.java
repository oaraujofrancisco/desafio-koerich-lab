package br.com.koerich.service.resources;

import br.com.koerich.service.domain.Produto;
import br.com.koerich.service.service.ProdutoService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/produtos")
public class ProdutoResource {

    private final ProdutoService produtoService;

    public ProdutoResource(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }


    @GetMapping
    public ResponseEntity<List<Produto>> buscarTodos(
            @RequestParam(value = "prod-nome", defaultValue = "") String produtoNome,
            @RequestParam(value = "qnt-prod", defaultValue = "0") Long quantidadeProduto,
            @RequestParam(value = "pagina", defaultValue = "0") int pagina,
            @RequestParam(value = "limite", defaultValue = "10") int limite,
            @RequestParam(value = "ordenar", defaultValue = "id") String ordenar,
            @RequestParam(value = "direcao", defaultValue = "ASC") String direcao
    ) {
        direcao = direcao.toUpperCase();

        Pageable pageable = PageRequest.of(pagina, limite, Sort.by(Sort.Direction.valueOf(direcao), ordenar));

        return ResponseEntity.ok(produtoService.buscarTodos(produtoNome, quantidadeProduto, pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(produtoService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Produto> salvarProduto(@RequestBody Produto produto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.salvarProduto(produto));
    }

    @PutMapping("{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable Long id, @RequestBody Produto produto) {
        return ResponseEntity.ok(produtoService.atualizarProduto(id, produto));
    }
}
