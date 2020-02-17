import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ClientListService} from "../services/client-list.service";
import {AddCustomerComponent} from "../add-customer/add-customer.component";
import {MatDialog} from "@angular/material/dialog";
import {ClientDisplay} from "../../model/ClientDisplay";

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
  filterName: string;
  displayedColumns: string[] = ['id', 'fio', 'age', 'character', 'totalBalanceOfAccounts', 'maximumBalance', 'minimumBalance', 'action'];

  dataSource = new MatTableDataSource();
  private newClientDisplay: ClientDisplay;

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

  openModal(id): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '700px',
      height: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(
      res=> {
        if (res == null) {
          return
        }
        else {
          this.dataSource.data.unshift(this.createClientDisplay());
          if (res.id != null) {
            this.listService.clientArr.push(res);
          } else {
            return;
          }
          this.dataSource.data = [...this.dataSource.data];
          console.log(this.listService.clientArr);
          console.log(this.listService.loadRecords());
        }
      }
    )
  }

  openDialogDelete(id) {
    // this.dataSource.data = this.dataSource.data.filter((value:any) => value!=element);
    console.log(id);
    // this.dataSource.data = this.dataSource.data.filter(value => value!=id);
  }

  openDialogUpdate(id: ClientDisplay) {
    this.openModal(id);
  }

  createClientDisplay() {
    this.newClientDisplay = new ClientDisplay();
    this.newClientDisplay.id = 8;
    this.newClientDisplay.fio = "Bla bla";
    this.newClientDisplay.character = "Rude";
    this.newClientDisplay.totalBalanceOfAccounts = 0;
    this.newClientDisplay.maximumBalance = 0;
    this.newClientDisplay.minimumBalance = 0;
    return this.newClientDisplay;
  }
}
