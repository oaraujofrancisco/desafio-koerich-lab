import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaProdutoComponent} from "./lista-produto/lista-produto.component";
import {ProdutoComponent} from "./produto/produto.component";

const routes: Routes = [
    {path: '', component: ListaProdutoComponent},
    {path: 'novo', component: ProdutoComponent},
    {path: ':id', component: ProdutoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {
}
