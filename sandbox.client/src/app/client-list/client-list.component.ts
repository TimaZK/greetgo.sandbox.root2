import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {LoginService} from "../login/login.service";
import {ClientListService} from "./client-list.service";
import {AddCustomerComponent} from "../add-customer/add-customer.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})

export class ClientListComponent implements OnInit {
  constructor(
    public login: LoginService,
    public listService: ClientListService,
    public dialog: MatDialog
  ) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  filterName: string;
  displayedColumns: string[] = ['id', 'fio', 'age', 'character', 'totalBalanceOfAccounts', 'maximumBalance', 'minimumBalance'];

  dataSource = new MatTableDataSource();

    ngOnInit() {
    this.dataSource.paginator = this.paginator;
      this.dataSource.data = this.listService.loadRecords();
  }

  myFunk($event: PageEvent) {
    console.log($event)
  }

  applyFilter() {
    console.log(this.filterName);
  }

  myFunk1($event: any) {
    console.log($event);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '500px',
      height: '500px'
    });

  }
}
