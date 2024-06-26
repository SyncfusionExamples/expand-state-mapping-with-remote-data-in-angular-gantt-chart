import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridModule, TreeGridModule, GanttModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
