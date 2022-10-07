import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../produto.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-lista-produto',
    templateUrl: './lista-produto.component.html',
    styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

    public produtos$ = this.produtoService.buscarTodosFiltragemOpcional();

    public quantidadeDefeitos = 0;
    public ordenacaoProdutos: string = "";
    public estiloVisualizao: string = "grade";
    public numeroColunasGrid: number = 2;
    public proporcaoColunasGrid: string = "2:1";

    private params = {};

    constructor(private produtoService: ProdutoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.numeroColunasGrid = (window.innerWidth <= 1250) ? 1 : 2;
        this.proporcaoColunasGrid = (window.innerWidth <= 750) ? "1.3:1" : "2:1";

        this.params = {
            "prod-nome": "",
            "qnt-prod": this.quantidadeDefeitos,
            "pagina": 0,
            "limite": 10,
            "ordenar": "id",
            "direcao": "ASC"
        }
    }

    public cadastrarNovoProduto(): void {
        this.router.navigate(['novo'], {relativeTo: this.activatedRoute});
    }

    public onResize($event: any) {
        this.numeroColunasGrid = ($event.target.innerWidth <= 1250) ? 1 : 2;
        this.proporcaoColunasGrid = ($event.target.innerWidth <= 750) ? "1.3:1" : "2:1";
    }

    public aplicarFiltro($event: KeyboardEvent) {
        const palavraPesquisada = ($event.target as HTMLInputElement).value.trim().toLowerCase();

        this.params = {
            ...this.params,
            "prod-nome": palavraPesquisada,
        }
        this.buscarProdutosFiltrados(this.params);
    }

    public onSelect() {
        this.params = {
            ...this.params,
            "ordenar": this.ordenacaoProdutos,
            "qnt-prod": this.quantidadeDefeitos,
        }
        this.buscarProdutosFiltrados(this.params);
    }

    private buscarProdutosFiltrados(params: {}) {
        this.produtos$ = this.produtoService.buscarTodosFiltragemOpcional(params);
    }
}
