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