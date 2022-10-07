import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdutoRoutingModule} from './produto-routing.module';
import {ListaProdutoComponent} from './lista-produto/lista-produto.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {ProdutoComponent} from './produto/produto.component';
import {TabelaComponenteComponent} from "../components/tabela-componente/tabela-componente.component";
import {GradeComponenteComponent} from "../components/grade-componente/grade-componente.component";


@NgModule({
    declarations: [
        ListaProdutoComponent,
        ProdutoComponent,
        TabelaComponenteComponent,
        GradeComponenteComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        ReactiveFormsModule,
        FormsModule,

        //Material modules
        MatGridListModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class ProdutoModule {
}
