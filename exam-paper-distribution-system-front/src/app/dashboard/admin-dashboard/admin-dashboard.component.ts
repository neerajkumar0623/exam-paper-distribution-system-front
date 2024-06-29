import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Order {
  idOrder: number;
  product: string;
  customer: string;
  status: string;
  createdDate: string;
  deadline: string;
  price: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  displayedColumns: string[] = ['idOrder', 'product', 'customer', 'status', 'createdDate', 'deadline', 'price', 'action'];
  dataSource = new MatTableDataSource<Order>([
    // Add your data here
  ]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}