import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Flex Layout Module Beta
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainNavComponent } from './component/main-nav/main-nav.component';
import { MainDashboardComponent } from './component/main-dashboard/main-dashboard.component';
import { MainTableComponent } from './component/main-table/main-table.component';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './component/login/login.component';

// Auth Guard
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainTableComponent,
    MainDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [
    AuthGuardGuard,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
