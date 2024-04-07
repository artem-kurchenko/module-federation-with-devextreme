# Angular Micro Frontends Starter Application with DevExtreme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.
It uses [Native Federation](https://github.com/angular-architects/module-federation-plugin) to architect it with micro frontends.

DevExtreme was added using `npm i devextreme@23.2.5 devextreme-angular@23.2.5`
The `MFE2` project contains the `DxDataGrid` component in the `projects\mfe2\src\app\home` view. 
The component is registered as follows:
```ts
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DxDataGridModule,...],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
```

## To Reproduce the issue

### Steps

1 Run `npm install` to install all dependecies
2a. Run `npm run start:all` to check the `shell` application: 
  * Open `http://localhost:4200`
  * Switch to the `MFE2` item
2b. Run `ng serve mfe2` 
    Open `http://localhost:4202/`

### Actual Results:

The build process shows the following warnings:

[1]  INFO  Building federation artefacts
[1]  WARN  No entry point found for devextreme
[1]  WARN  If you don't need this package, skip it in your federation.config.js or consider moving it into depDependencies in your package.json
[1]  WARN  No meta data found for shared lib devextreme

The browser throws the following errors:

```
app.routes.ts:4 Error: Unable to resolve specifier 'devextreme-angular/ui/accordion' 
_angular_core-17_3_1-dev.js:3806 ERROR Error: Unable to resolve specifier 'devextreme/core/dom_adapter' 
```

### Additional information:

I see that the ESBuild takes all possible modules from `devextreme-angular` and `devextreme` even if they were not imported. 
E.g., the browser page shows the error related the `devextreme-angulr/ui/accordion` module while I didn't explicitely export it

I also had to skip the `devextreme-angular/server` module in `federation.config.js`  because it contains incompatible the `stream` package although an application doesn't use SSR.

 ```js
 skip: [
     'devextreme-angular/server',
```

