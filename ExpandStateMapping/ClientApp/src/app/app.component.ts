import { Component } from '@angular/core';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `
  <ejs-gantt [dataSource]='data' [treeColumnIndex]='1' height='400' [taskFields]="taskSettings" [splitterSettings] = "splitterSettings"  loadChildOnDemand='true' >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='80'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80'></e-column>
                  </e-columns>
               </ejs-gantt>
 `,

})
export class AppComponent {
  public data?: DataManager;
  public taskSettings?: object;
  public splitterSettings?: object;
  public ngOnInit(): void {
    this.data = new DataManager({
      adaptor: new UrlAdaptor,
      url: "Home/Datasource",
    });
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      child: 'subtasks',
      parentID: 'ParentValue',
      hasChildMapping: 'isParent',
      expandState: 'IsExpanded'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
}
