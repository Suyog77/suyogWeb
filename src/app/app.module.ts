import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './homeComponent/about.component';
import { ServicesComponent } from './coursesComponent/services.component';
import { HeadComponentComponent } from './headComponent/head-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { JavaComponentComponent } from './java-component/java-component.component';
import { DotComponentComponent } from './dot-component/dot-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HeadComponentComponent,
    NavComponentComponent,
    RegistrationComponentComponent,
    ContactComponent,
    GalleryComponent,
    FooterComponentComponent,
    JavaComponentComponent,
    DotComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
