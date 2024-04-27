import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbar } from "@angular/material/toolbar";
import { MatAnchor } from "@angular/material/button";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import { PageCreateGroupComponent } from './group/pages/page-create-group/page-create-group.component';
import { FormCreateGroupComponent } from './group/components/form-create-group/form-create-group.component';
import { HomeComponent } from './public/pages/home/home.component';
import { MatIcon } from "@angular/material/icon";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatListItem, MatListItemAvatar, MatListItemLine, MatNavList } from "@angular/material/list";
import { PageGroupComponent } from './group/pages/page-group/page-group.component';
import { GroupService } from './group/services/group.service';
import { IncomingComponent } from './payments/incoming/pages/incoming.component';
import { OutgoingComponent } from './payments/outgoing/pages/outgoing.component';
import {MatCard, MatCardHeader, MatCardModule, MatCardTitleGroup} from "@angular/material/card";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LanguageSwitcherComponent,
    PageCreateGroupComponent,
    FormCreateGroupComponent,
    HomeComponent,
    PageGroupComponent,
    IncomingComponent,
    OutgoingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatAnchor,
    HttpClientModule,
    MatButtonToggleModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    MatSidenavContent,
    MatListItemAvatar,
    MatListItemLine,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatSidenav,
    MatCard,
    MatCardModule,
    MatCardHeader,
    MatCardTitleGroup
  ],
  providers: [
    provideAnimationsAsync(),
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
