import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Produto} from "../core/models/produto";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    private readonly urlApi = "api/produtos";

    constructor(private http: HttpClient) {
    }

    public buscarTodosFiltragemOpcional(params?: any): Observable<Produto[]> {

        return this.http.get<Produto[]>(this.urlApi, {params}).pipe(delay(500));
    }

    public buscarPorId(id: number): Observable<Produto> {
        return this.http.get<Produto>(`${this.urlApi}/${id}`);
    }

    public salvarProduto(novoProduto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this.urlApi, novoProduto)
    }

    public atualizarProduto(produtoAtualizado: Produto): Observable<Produto> {
        return this.http.put<Produto>(this.urlApi, produtoAtualizado)

    }

    public excluirProduto(id: number): Observable<Produto[]> {
        return this.http.delete<Produto[]>(`${this.urlApi}/${id}`)
    }
}
