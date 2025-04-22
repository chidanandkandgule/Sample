import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-noncommoncontrol-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noncommoncontrol-table.component.html',
  styleUrl: './noncommoncontrol-table.component.scss'
})
export class NoncommoncontrolTableComponent {


  types: string[] = [ "Art.7",
    "Art.20",
    "A.15.1.1",
    "A.14.2.3",
    "PR.IP-6",
    "DE.DP-4",
    "DSS05.07",
    "BAI06.04"]; // List of available framework types
  selectedTypes: string[] = []; // Store selected frameworks
  controls = [
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
  

  filteredFrameworks: any[] = [...this.controls];  // Initially, all data is visible

  // Toggle framework selection in the selectedTypes array
  toggleFramework(type: string, event: any) {
    if (event.target.checked) {
      this.selectedTypes.push(type);
    } else {
      this.selectedTypes = this.selectedTypes.filter(t => t !== type);
    }
    this.filterData();
  }

  // Filter data based on selected frameworks 
  filterData() {
    if (this.selectedTypes.length > 0) {
      this.filteredFrameworks = this.controls.filter(item => this.selectedTypes.includes(item.controlId));
    } else {
      this.filteredFrameworks = [...this.controls];  // Reset to show all if no filter is selected
    }
  }

}
