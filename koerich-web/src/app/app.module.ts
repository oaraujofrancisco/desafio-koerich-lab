import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutComponent} from "./components/layout/layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import {MatSnackBarModule} from "@angular/material/snack-bar";

registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt'}
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
