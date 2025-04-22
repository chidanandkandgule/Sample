import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-framework-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-table.component.html',
  styleUrl: './framework-table.component.scss'
})
export class FrameworkTableComponent {
  types: string[] = ['NIST CSF', 'ISO/IEC 27001', 'COBIT', 'GDPR']; // List of available framework types
  selectedTypes: string[] = []; // Store selected frameworks

  data: any[] = [
    { name: 'NIST CSF', version: '2.0', type: 'Cybersecurity', focus: 'Risk, Detect', date: 'Apr-18', source: 'https://www.nist.gov/' },
    { name: 'ISO/IEC 27001', version: '2022', type: 'InfoSec Management', focus: 'Policies, Controls', date: 'Oct-22', source: 'https://www.iso.org/standard/27001' },
    { name: 'COBIT', version: '2019', type: 'Governance', focus: 'IT Governance & Processes', date: 'Nov-18', source: 'https://www.isaca.org/resources/cobit' },
    { name: 'GDPR', version: '2016', type: 'Privacy Regulation', focus: 'Data Privacy, Consent', date: 'Apr-16', source: 'https://gdpr-info.eu/' }
  ]

  filteredFrameworks: any[] = [...this.data];  // Initially, all data is visible

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
      this.filteredFrameworks = this.data.filter(item => this.selectedTypes.includes(item.name));
    } else {
      this.filteredFrameworks = [...this.data];  // Reset to show all if no filter is selected
    }
  }

}
