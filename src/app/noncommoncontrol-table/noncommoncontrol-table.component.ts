import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-noncommoncontrol-table',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './noncommoncontrol-table.component.html',
  styleUrl: './noncommoncontrol-table.component.scss'
})
export class NoncommoncontrolTableComponent {


  displayedColumns: string[] = ['controlId', 'framework', 'controlName', 'controlDescription', 'controlType', 'evidence'];
  stickyColumns: string[] = ['framework'];
  data = [
    {
      controlId: "Art.7",
      framework: "GDPR",
      controlName: "Consent Management",
      controlDescription: "Obtain, store, and manage user consent before data processing",
      controlType: "Preventive",
      evidence: "Consent Logs, UI Screenshots"
    },
    {
      controlId: "Art.20",
      framework: "GDPR",
      controlName: "Data Portability",
      controlDescription: "Allow users to export/download their personal data",
      controlType: "Corrective",
      evidence: "Data Export Feature Spec"
    },
    {
      controlId: "A.15.1.1",
      framework: "ISO 27001",
      controlName: "Supplier Security Agreements",
      controlDescription: "Require vendors to include security clauses in contracts",
      controlType: "Preventive",
      evidence: "Vendor Contract Templates"
    },
    {
      controlId: "A.14.2.3",
      framework: "ISO 27001",
      controlName: "Technical Review of Applications",
      controlDescription: "Perform technical security reviews during development lifecycle",
      controlType: "Detective",
      evidence: "Code Review Checklists"
    },
    {
      controlId: "PR.IP-6",
      framework: "NIST CSF",
      controlName: "Data Backup",
      controlDescription: "Perform regular, tested backups of application and user data",
      controlType: "Corrective",
      evidence: "Backup Logs, Recovery Tests"
    },
    {
      controlId: "DE.DP-4",
      framework: "NIST CSF",
      controlName: "Detect Unauthorized Devices",
      controlDescription: "Detect unauthorized devices connected to the application environment",
      controlType: "Detective",
      evidence: "Network Scans, Alerts"
    },
    {
      controlId: "DSS05.07",
      framework: "COBIT 2019",
      controlName: "Protection Against Malware",
      controlDescription: "Implement controls to detect, prevent, and recover from malware attacks",
      controlType: "Preventive",
      evidence: "EDR Logs, Antivirus Reports"
    },
    {
      controlId: "BAI06.04",
      framework: "COBIT 2019",
      controlName: "Change Authorization",
      controlDescription: "Ensure all web application changes are formally authorized",
      controlType: "Preventive",
      evidence: "Change Requests, Approvals"
    }
  ];
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

      controlId: 100,
      framework: 150,
      controlName: 150,
      controlDescription: 300,
      controlType: 100,
      evidence: 100
     };
   
     return stickyBefore.reduce((acc, col) => acc + (columnWidths[col] || 100), 0);
   }

}
