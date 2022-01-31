# MyFirstDemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Basic Idea of how a page is  loaded when we go ng-serve 

Upon inspection we saw that HTLM code which is hosted on localhost:4200 has new JS imports. 
Those imports are done by Angular CLI. 

As for the rest 
When we fire ng-serve 

There's 2 things we need to understand. 
The first page that is displayed is index.html and it has a app-root tag within which the information will be loaded

And the workflow to add information in this index.html goes like. 

First main.ts will start 
At a certain line it will have 


````
import { AppModule } from './app/app.module';
````

That is we go inside app.module.ts file
There we have specified the information regarding the modules and component selectors that we want to send to index.html

````
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
````

Here first line indicates the component file in which bindings will be present. And rest of the lines indicates the modules that will be imported.
App component will look like
````
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
````

The component selector specified the tag in which we want to export information. 
TemplateUrl indicates what we want to import there. 
Ans styleSheet refers to the style rules that this has to follow 



By Default angular doesn't scan all your file you need to specify the modules in app.modules
Remember we never modify index.html.
Each component of ours should ideally have it's own html component. 


# How to add a new component(Brief)

1. Create a new Component and mark it with component declarator. WHat component essentially means here that it is a class/entity. 
    ````
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-server',
        templateUrl: './server.component.html'
    })

    export  class ServerComponent {

    }
    ````
2. Then you add an import statement in your module file. For ex app.module.ts
   Add the import and the declaration. And angular server should automatically pick up this changes. 

3. Check your changes at localhost server. 


# Alternate way of adding a new component. 

In the CLi you can use 

````
ng generate component <component name>

or

ng g c <component name>
````

This will create your component ts file, a spec file to test it and add it's declaration in module files



With respect to angular and fontend. Data binding can be defined as a path/communication between business logic present in backend/typesript and template(Html) that user see
we can do this  by 
1. string interpolation  --> ({{ data }})
2. property binding ([property]="data") --> [] basically indicate to angular that we are using property binding 
3. Event Binding -> (event) = "expression"
4. Two-way-Binding -> [(ngmodel)] ="data"

Note: String interpolation doesn't work within property binding
For event binding we have a variable -> $event. THis variable gives us the access to the data. Once the even thas been triggered


Directives are instructions in the DOM 

1. Structural Directives are instruction to DOM which change the DOM structure also ex *ngif
2. Attribute Directives don't add or remove elements/ change the structure
