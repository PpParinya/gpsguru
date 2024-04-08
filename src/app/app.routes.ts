import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './main/product/product.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [

    {
        path: '', component: MainComponent,
            children:[
                {path: '', loadComponent: () => import('./main/home/home.component').then(x => x.HomeComponent)},
                {path: 'product', loadComponent: () => import('./main/product/product.component').then(x => x.ProductComponent)},
                {path: 'promotion', loadComponent: () => import('./main/promotion/promotion.component').then(x => x.PromotionComponent)},
                {path: 'about', loadComponent: () => import('./main/about/about.component').then(x => x.AboutComponent)},
                {path: 'contact', loadComponent: () => import('./main/contact/contact.component').then(x => x.ContactComponent)},
                {path: 'question', loadComponent: () => import('./main/question/question.component').then(x => x.QuestionComponent)},
                {path: 'service', loadComponent: () => import('./main/service/service.component').then(x => x.ServiceComponent)},
                {path: 'work', loadComponent: () => import('./main/work/work.component').then(x => x.WorkComponent)},
            ],
        
    },
    {
        path: '**', component: MainComponent,
    },

];
