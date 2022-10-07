import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProdutoService} from "../produto.service";
import {Produto} from "../../core/models/produto";
import {MensagemService} from "../../core/services/mensagem.service";

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

    public produtoForm!: FormGroup;
    public isCarregado: boolean = false;

    constructor(private produtoService: ProdutoService,
                private router: Router,
                private formBuilder: FormBuilder,
                private mensagemService: MensagemService
    ) {
    }

    ngOnInit(): void {
        this.iniciarFormulario();
    }

    public voltarListaProduto() {
        this.router.navigate(['produto']);
    }

    public salvarProduto() {
        if (this.produtoForm.valid) {
            const novoProduto: Produto = {
                produtoNome: this.produtoForm.value.produtoNome,
                quantidadeProduto: this.produtoForm.value.quantidadeProduto,
                defeito: this.produtoForm.value.defeito,
                valor: this.produtoForm.value.valor,
                imagem: ""
            }

            this.produtoService.salvarProduto(novoProduto).subscribe(
                () => {
                    this.mensagemService.success("Produto cadastrado com sucesso");
                    this.router.navigate(['produto']);
                },
                () => {
                    this.mensagemService.error("O Produto não pode ser cadastrado, tente novamente mais tarde");
                })
        }
    }

    public atualizarProduto() {
    }

    private iniciarFormulario(produto?: Produto) {
        this.produtoForm = this.formBuilder.group({
            produtoNome: [produto?.produtoNome],
            quantidadeProduto: [produto?.quantidadeProduto],
            defeito: [produto?.defeito],
            valor: [produto?.valor],
            imagem: [produto?.imagem],
        })

        this.isCarregado = !this.isCarregado;
    }
}
