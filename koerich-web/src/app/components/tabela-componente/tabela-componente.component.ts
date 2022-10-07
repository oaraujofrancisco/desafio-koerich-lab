import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../../core/models/produto";

@Component({
    selector: 'app-tabela-componente',
    templateUrl: './tabela-componente.component.html',
    styleUrls: ['./tabela-componente.component.scss']
})
export class TabelaComponenteComponent implements OnInit {

    @Input() produtos!: Produto[];
    public colunas = ['imagem', 'produto', 'quantidade', 'defeito', 'valor',];

    constructor() {
    }

    ngOnInit(): void {
    }

}
