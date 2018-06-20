import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({

    // all modules are imported here
    imports:[
        BrowserModule
    ],
    
    //all component and pipe are declared here
    declarations:[
    
    AppComponent,
    DashboardComponent

    ],
    //first component would come here
    bootstrap:[
        AppComponent
    ],

//all services are declared here
    providers:[]
    
})



export class AppModule{

}