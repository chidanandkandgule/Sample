import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-totalcontrol-table',
  standalone: true,
  imports: [
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatInputModule,
      MatButtonModule,
    ],
  templateUrl: './totalcontrol-table.component.html',
  styleUrl: './totalcontrol-table.component.scss'
})
export class TotalcontrolTableComponent {

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

   sortData(sort: Sort) {
    const data = this.data.slice(); // clone original data

    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'framework':
          return this.compare(a.framework, b.framework, isAsc);
        case 'version':
          return this.compare(a.version, b.version, isAsc);
        case 'controlId':
          return this.compare(a.controlId, b.controlId, isAsc);
        case 'controlName':
          return this.compare(a.controlName, b.controlName, isAsc);
        case 'controlDescription':
          return this.compare(a.controlDescription, b.controlDescription, isAsc);
        case 'category':
          return this.compare(a.category, b.category, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
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
