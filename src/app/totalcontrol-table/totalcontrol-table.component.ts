import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-totalcontrol-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totalcontrol-table.component.html',
  styleUrl: './totalcontrol-table.component.scss'
})
export class TotalcontrolTableComponent {

  types: string[] = ['NIST CSF', 'NIST CSF', 'ISO 27001','ISO 27001', 'GDPR','GDPR','COBIT','COBIT']; // List of available framework types
  selectedTypes: string[] = []; // Store selected frameworks
  controls = [
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
      this.filteredFrameworks = this.controls.filter(item => this.selectedTypes.includes(item.framework));
    } else {
      this.filteredFrameworks = [...this.controls];  // Reset to show all if no filter is selected
    }
  }


}
