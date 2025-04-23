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
  selector: 'app-commoncontrol-table',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './commoncontrol-table.component.html',
  styleUrl: './commoncontrol-table.component.scss'
})
export class CommoncontrolTableComponent {

  displayedColumns: string[] = ['controlName', 'controlId', 'framework', 'controlDescription', 'relatedFrameworks', 'subscribedFrameworkControlIds', 'controlType', 'evidence']

  stickyColumns: string[] = ['controlName'];
  data = [
    {
      controlName: "Asset Inventory",
      controlId: "CM-8",
      framework: "NIST",
      controlDescription: "Ensures accurate inventory of all hardware, software, and other assets in an organization to manage risk and ensure compliance.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls, PCI DSS",
      subscribedFrameworkControlIds: "COBIT DSS01 | ISO 27001 A.8.1 | ISO 27002 8.1 | CIS Control 1 | PCI DSS 2.4",
      controlType: "Detective",
      evidence: "Asset register, asset management logs"
    },  
    {
      controlName: "Identity and Access Control",
      controlId: "AC-1",
      framework: "NIST",
      controlDescription: "Controls related to managing user access to systems and resources to ensure proper authentication, authorization, and accounting.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls, PCI DSS, GDPR",
      subscribedFrameworkControlIds: "COBIT DSS05 | ISO 27001 A.9.1 | ISO 27002 9.1 | CIS Control 5 | PCI DSS 7.1 | GDPR Article 32",
      controlType: "Preventive, Detective",
      evidence: "Access control logs, role-based access policies, authentication records"
    },
    {
      controlName: "User Access Provisioning",
      controlId: "AC-5",
      framework: "NIST",
      controlDescription: "Ensures users are provisioned with appropriate access levels and de-provisioned when no longer required.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls, PCI DSS, GDPR",
      subscribedFrameworkControlIds: "COBIT DSS09 | ISO 27001 A.9.2 | ISO 27002 9.2 | CIS Control 5.1 | PCI DSS 8.1",
      controlType: "Preventive",
      evidence: "User provisioning/de-provisioning records, access request forms"
    },
    {
      controlName: "Technical Vulnerability Management",
      controlId: "CA-7",
      framework: "NIST",
      controlDescription: "Management of vulnerabilities through scanning, assessment, patching, and continuous monitoring to identify weaknesses and apply necessary controls.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls, PCI DSS",
      subscribedFrameworkControlIds: "COBIT DSS04 | ISO 27001 A.12.6 | ISO 27002 12.6 | CIS Control 3 | PCI DSS 6.2",
      controlType: "Detective, Corrective",
      evidence: "Vulnerability scans, patch management records, vulnerability assessment reports"
    },
    {
      controlName: "Data Minimization",
      controlId: "MP-6",
      framework: "NIST",
      controlDescription: "Ensures only necessary data is collected, stored, and processed, in line with privacy and security regulations.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, GDPR, CIS Controls",
      subscribedFrameworkControlIds: "COBIT DSS03 | ISO 27001 A.18.1 | ISO 27002 18.1 | GDPR Article 5 (Data Minimization Principle)",
      controlType: "Preventive",
      evidence: "Data classification records, data processing policy, access control logs"
    },
    {
      controlName: "Security of Processing",
      controlId: "SC-13",
      framework: "NIST",
      controlDescription: "Ensures that the processing of personal data or sensitive information is secured using appropriate encryption and access controls.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls, PCI DSS, GDPR",
      subscribedFrameworkControlIds: "COBIT DSS02 | ISO 27001 A.10.1 | ISO 27002 10.1 | CIS Control 10 | PCI DSS 3.4",
      controlType: "Preventive",
      evidence: "Encryption policy, encryption logs, access control records"
    },
    {
      controlName: "Risk Management Framework",
      controlId: "RMF (SP 800-37)",
      framework: "NIST",
      controlDescription: "A structured approach to identifying, assessing, and managing risks associated with the information systems and organizational processes.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls",
      subscribedFrameworkControlIds: "COBIT APO12 | ISO 27001 A.8.2 | ISO 27002 8.2 | CIS Control 6.1",
      controlType: "Detective, Corrective",
      evidence: "Risk assessment reports, risk register, risk treatment plans"
    },
    {
      controlName: "Solution Requirements Definition",
      controlId: "SA-4",
      framework: "NIST",
      controlDescription: "Defines security requirements and integrates them into the design and development of solutions and systems, ensuring security is built into the solution from the start.",
      relatedFrameworks: "NIST, COBIT, ISO 27001, ISO 27002, CIS Controls",
      subscribedFrameworkControlIds: "COBIT DSS02 | ISO 27001 A.14.2 | ISO 27002 14.2 | CIS Control 12.5",
      controlType: "Preventive",
      evidence: "Security requirements documents, design specifications, testing reports"
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
      controlName: 150,
      controlId: 100,
      framework: 100,
      controlDescription: 300,
      relatedFrameworks: 300,
      subscribedFrameworkControlIds: 300,
      controlType: 100,
      evidence: 200
    };
  
    return stickyBefore.reduce((acc, col) => acc + (columnWidths[col] || 100), 0);
  }

}
