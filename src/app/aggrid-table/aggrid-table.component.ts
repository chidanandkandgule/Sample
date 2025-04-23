import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // For ngIf, ngFor
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-aggrid-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './aggrid-table.component.html',
  styleUrls: ['./aggrid-table.component.scss'],
})
export class AggridTableComponent implements OnInit {
  displayedColumns: string[] = ['framework', 'version', 'controlId','controlName','controlDescription','category'];
  stickyColumns: string[] = ['framework'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // Sample data
  data = [
    {
      framework: 'NIST CSF',
      version: '2.0',
      controlId: 'CM-8',
      controlName: 'Asset Inventory',
      controlDescription: 'Identify and manage web app assets (code, servers, APIs)',
      category: 'Asset Management'
    },
    {
      framework: 'NIST CSF',
      version: '2.0',
      controlId: 'AC-1',
      controlName: 'Access Control Policy and Procedures',
      controlDescription: 'Enforce access rights and RBAC in web app',
      category: 'Access Control'
    },
    {
      framework: 'ISO 27001',
      version: '2022',
      controlId: 'A.9.2.1',
      controlName: 'User Access Provisioning',
      controlDescription: 'Provision and de-provision user access systematically',
      category: 'Access Control'
    },
    {
      framework: 'ISO 27001',
      version: '2022',
      controlId: 'A.12.6.1',
      controlName: 'Technical Vulnerability Management',
      controlDescription: 'Scan, assess, and patch vulnerabilities in web apps',
      category: 'Vulnerability Management'
    },
    {
      framework: 'GDPR',
      version: '2016',
      controlId: 'Art.5',
      controlName: 'Data Minimization',
      controlDescription: 'Only collect and store data necessary for app functionality',
      category: 'Data Protection'
    },
    {
      framework: 'GDPR',
      version: '2016',
      controlId: 'Art.32',
      controlName: 'Security of Processing',
      controlDescription: 'Implement appropriate security to protect personal data',
      category: 'Security & Privacy'
    },
    {
      framework: 'COBIT',
      version: '2019',
      controlId: 'APO12.01',
      controlName: 'Risk Management Framework',
      controlDescription: 'Define and maintain a risk management framework that aligns with enterprise objectives.',
      category: 'Governance'
    },
    {
      framework: 'COBIT',
      version: '2019',
      controlId: 'BAI03.01',
      controlName: 'Solution Requirements Definition',
      controlDescription: 'Define and document business and technical requirements for solutions.',
      category: 'Management / Delivery'
    }
  ];

  // Paginator and Sort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource.data = this.data; // Assign data to the data source
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator; // Initialize paginator
    // this.dataSource.sort = this.sort; // Initialize sorting
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  

  // Apply filter
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isSticky(column: string): boolean {
    return this.stickyColumns.includes(column);
  }

  getStickyLeft(column: string): number {
    const index = this.displayedColumns.indexOf(column);
    const stickyBefore = this.displayedColumns.slice(0, index).filter(c => this.isSticky(c));
    const columnWidths = {
      framework: 150,
      version: 100,
      controlId: 120,
      controlName: 180,
      controlDescription: 300,
      category: 200
    };
  
    return stickyBefore.reduce((acc, col) => acc + (columnWidths[col] || 100), 0);
  }

}
