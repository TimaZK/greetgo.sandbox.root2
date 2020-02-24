import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ClientListService} from "../services/client-list.service";
import {AddCustomerComponent} from "../add-customer/add-customer.component";
import {MatDialog} from "@angular/material/dialog";
import {ClientDisplay} from "../../model/ClientDisplay";
import {PageFilter} from "../../model/PageFilter";
import {ClientToSave} from "../../model/ClientToSave";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})

export class ClientListComponent implements OnInit {
  constructor(
    public listService: ClientListService,
    public dialog: MatDialog,
  ) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'fio', 'age', 'character', 'totalBalanceOfAccounts', 'maximumBalance', 'minimumBalance', 'action'];

  dataSource = new MatTableDataSource();
  private newClientDisplay: ClientDisplay;
  private pageFilter: PageFilter;

  ngOnInit() {
    this.pageFilter = new PageFilter();
    this.pageFilter.pageSize = 5;
    this.pageFilter.pageNumber = 0;
    this.dataSource.data = this.listService.loadRecords();
    this.listService.listClientDisplay();
    this.listService.saveClient(new ClientToSave());
    this.listService.deleteClient(this.listService.loadRecords()[0].id);
    this.listService.getCharms();
    this.listService.getClient("1");
  }

  myFunk($event: PageEvent) {
    this.pageFilter.pageSize = $event.pageSize;
    this.pageFilter.pageNumber = $event.pageIndex;
    this.pageFilter.filterName = "";
    console.log(this.pageFilter);
  }

  applyFilter(value) {
    this.pageFilter.filterName = value;
    this.pageFilter.sortName = "";
    this.pageFilter.direction = "";
    console.log(this.pageFilter);
  }

  myFunk1($event: any) {
    this.pageFilter.sortName = $event.active;
    this.pageFilter.direction = $event.direction;
    this.pageFilter.filterName = "";
    console.log(this.pageFilter);
  }

  openModal(id): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '700px',
      height: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(
      res=> {
        if (res == null) {
          return;
        }
        if (res.id > this.listService.clientArr.length) {
          this.newClientDisplay = new ClientDisplay();
          this.newClientDisplay.id = res.id;
          this.newClientDisplay.fio = res.firstName + " " + res.lastName;
          this.newClientDisplay.age = 0;
          if (res.charm == 1) {
            this.newClientDisplay.character = this.listService.charms[0].name;
          } else if (res.charm == 2) {
            this.newClientDisplay.character = this.listService.charms[1].name;
          } else {
            this.newClientDisplay.character = this.listService.charms[2].name;
          }
          this.newClientDisplay.totalBalanceOfAccounts = 0;
          this.newClientDisplay.maximumBalance = 0;
          this.newClientDisplay.minimumBalance = 0;

          this.dataSource.data.unshift(this.newClientDisplay);
          this.listService.clientArr.push(res);
          this.dataSource.data = [...this.dataSource.data];
          console.log(this.listService.clientArr);
          console.log(this.listService.loadRecords());

        } else {
          for (let i=0; i<this.listService.clientArr.length; i++) {
            if (this.listService.clientArr[i].id === res.id) {
              this.listService.clientArr[i].firstName = res.firstName;
              this.listService.clientArr[i].lastName = res.lastName;
              this.listService.clientArr[i].patron = res.patron;
              this.listService.clientArr[i].birthDay = res.birthDay;
              this.listService.clientArr[i].charm = res.charm;
              this.listService.clientArr[i].gender = res.gender;
              this.listService.clientArr[i].factAddress = res.factAddress;
              this.listService.clientArr[i].regAddress = res.regAddress;
              this.listService.clientArr[i].phones = res.phones;
            }
          }
        }
      }
    )
  }

  openDialogDelete(id) {
    this.dataSource.data = this.dataSource.data.filter((value:any) => value.id!=id);
  }

  openDialogUpdate(id: ClientDisplay) {
    this.openModal(id);
  }
}
