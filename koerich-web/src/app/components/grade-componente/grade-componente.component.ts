import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../../core/models/produto";

@Component({
    selector: 'app-grade-componente',
    templateUrl: './grade-componente.component.html',
    styleUrls: ['./grade-componente.component.scss']
})
export class GradeComponenteComponent implements OnInit {

    @Input() produto!: Produto;

    constructor() {
    }

    ngOnInit(): void {
    }

}
