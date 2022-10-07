package br.com.koerich.service.domain;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;

@Entity
@Table(name = "tb_produto")
public class Produto implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String produtoNome;

    private Long quantidadeProduto;

    private Long valor;

    private Long defeito;

    private String imagem;

    public Produto() {
    }

    public Produto(Long id, String produtoNome, Long quantidadeProduto, Long valor, Long defeito, String imagem) {
        this.id = id;
        this.produtoNome = produtoNome;
        this.quantidadeProduto = quantidadeProduto;
        this.valor = valor;
        this.defeito = defeito;
        this.imagem = imagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProdutoNome() {
        return produtoNome;
    }

    public void setProdutoNome(String produto) {
        this.produtoNome = produto;
    }

    public Long getQuantidadeProduto() {
        return quantidadeProduto;
    }

    public void setQuantidadeProduto(Long quantidade) {
        this.quantidadeProduto = quantidade;
    }

    public Long getValor() {
        return valor;
    }

    public void setValor(Long valor) {
        this.valor = valor;
    }

    public Long getDefeito() {
        return defeito;
    }

    public void setDefeito(Long defeito) {
        this.defeito = defeito;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
}
