# Expand State Mapping with Remote Data in Angular Gantt Chart

This sample demonstrates Syncfusion Angular Gantt Chart remote binding and expand State Mapping in an ASP.NET MVC + Angular CLI app.

## Overview

An Angular front end in ASP.NET MVC loads hierarchical task data from `Home/Datasource`, showing remote child loading, expand state persistence, and server-side processing.

## Features

- Remote `DataManager` with `UrlAdaptor`
- `expandStateMapping` with `IsExpanded`
- `loadChildOnDemand` child loading
- Server-side filtering, sorting, searching, and paging

## How it works

The app creates a `DataManager`:

```ts
this.data = new DataManager({
  adaptor: new UrlAdaptor,
  url: 'Home/Datasource',
});
```

Task fields map to:

```ts
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
```

## Prerequisites

- Visual Studio 2022 or compatible ASP.NET MVC tooling
- Node.js and npm
- Angular CLI for Angular 19

## Run the sample

1. Open `ExpandStateMapping\SyncfusionAngularASPNETMVC.sln`.
2. Rebuild to restore NuGet packages.
3. Run `npm install` in `ExpandStateMapping\ClientApp` if needed.
4. Run the project and open it in a browser.

## Notes

- `IsExpanded` maintains expand state.
- `loadChildOnDemand='true'` fetches child records on demand.
