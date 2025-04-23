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
  selector: 'app-framework-table',
  standalone: true,
  imports: [ CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './framework-table.component.html',
  styleUrl: './framework-table.component.scss'
})
export class FrameworkTableComponent {
  displayedColumns: string[] = ['name', 'version', 'type', 'focus', 'date', 'source']
  stickyColumns: string[] = ['name'];
  data: any[] = [
    { name: 'NIST CSF', version: '2.0', type: 'Cybersecurity', focus: 'Risk, Detect', date: 'Apr-18', source: 'https://www.nist.gov/' },
    { name: 'ISO/IEC 27001', version: '2022', type: 'InfoSec Management', focus: 'Policies, Controls', date: 'Oct-22', source: 'https://www.iso.org/standard/27001' },
    { name: 'COBIT', version: '2019', type: 'Governance', focus: 'IT Governance & Processes', date: 'Nov-18', source: 'https://www.isaca.org/resources/cobit' },
    { name: 'GDPR', version: '2016', type: 'Privacy Regulation', focus: 'Data Privacy, Consent', date: 'Apr-16', source: 'https://gdpr-info.eu/' }
  ]
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
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
       name: 200, version: 100, type: 200, focus: 200, date: 100, source:100 
    };
  
    return stickyBefore.reduce((acc, col) => acc + (columnWidths[col] || 100), 0);
  }

}
