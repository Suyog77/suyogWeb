//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './homeComponent/about.component';
import { ServicesComponent } from './coursesComponent/services.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { JavaComponentComponent } from './java-component/java-component.component';
import { DotComponentComponent } from './dot-component/dot-component.component';
import { restComponent } from './rest/rest.component';


//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.
// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 
//   to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' }, //default page
    { path: 'Home', component: AboutComponent },
    { path: 'Courses', component: ServicesComponent },
    { path: 'registration', component: RegistrationComponentComponent },
    { path: 'Navigation', component: NavComponentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'footer', component: FooterComponentComponent },
    { path: 'java', component: JavaComponentComponent },
    { path: 'DotNet', component: DotComponentComponent },
    { path: 'rest', component: restComponent },
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);