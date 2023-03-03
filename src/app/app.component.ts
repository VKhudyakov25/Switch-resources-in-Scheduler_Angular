import { Component, ViewChild } from '@angular/core';

import { AppService, Person } from './app.service';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { Serializer } from '@angular/compiler';
import ArrayStore from 'devextreme/data/array_store';
import {
  DxDataGridComponent,
  DxDropDownBoxComponent,
  DxSchedulerComponent,
} from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
  @ViewChild(DxDropDownBoxComponent) box: DxDropDownBoxComponent;
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  dataSource: DataSource;
  dsPerson: ArrayStore;
  currentDate: Date;
  personData: Person[];

  constructor(service: AppService) {
    this.personData = service.getPersons();
    this.currentDate = new Date(2023, 1, 8);
    this.dsPerson = new ArrayStore({
      key: 'id',
      data: service.getPersons(),
    });
    this.dataSource = new DataSource({
      store: service.getAppointments(),
    });
  }
  changeEvent(selectedItems: any) {
    console.log(selectedItems);
    let items = selectedItems.selectedRowKeys;

    let data = selectedItems.selectedRowsData;
    // e.component.option('value', items);
    this.box.value = items;
    if (items.length === 1) {
      // this.scheduler.option('groups', []);
      this.scheduler.groups = [];
      this.dataSource.filter(['personId', '=', `${data[0].id}`]);
      this.dataSource.reload();
      this.box.instance.close();
    } else {
      // this.scheduler.option('groups', ['personId']);
      this.scheduler.groups = ['personId'];
      this.dataSource.filter(null);
      this.dataSource.reload();
      this.box.instance.close();
    }
  }
}
