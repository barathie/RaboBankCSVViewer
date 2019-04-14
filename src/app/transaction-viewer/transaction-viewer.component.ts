import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-transaction-viewer',
  templateUrl: './transaction-viewer.component.html',
  styleUrls: ['./transaction-viewer.component.css']
})
export class TransactionViewerComponent implements OnInit {
  public rowData: any[] = [];  

  @ViewChild('fileImportInput') fileImportInput: any;

  columnDefs = [
    {headerName: 'First name', field: 'firstName'},
    {headerName: 'Sur name', field: 'surName'},
    {headerName: 'Issue count', field: 'issueCount'},
    {headerName: 'Date of birth', field: 'dateOfBirth'}
  ];

  constructor() { }

  ngOnInit() {
  }

  fileChangeListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.rowData = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow); 
      };

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerRow: any) {   
    let  dataArr: any[] = [];
    let headerLength = headerRow.length;

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let data = (<string>csvRecordsArray[i]).split(',');
      // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
      // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
      if (data.length == headerLength) {        
        dataArr.push({firstName: data[0].trim(), surName: data[1].trim(), issueCount: data[2].trim(),dateOfBirth: data[3].trim()});
      }
    }
   
    return dataArr;
  }

  // CHECK IF FILE IS A VALID CSV FILE
  isCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  // GET CSV FILE HEADER COLUMNS
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
  }
}

export class CSVRecord {

  public firstName: any;
  public surName: any;
  public issueCount: any;
  public dateOfBirth: any;
  
  constructor() {

  }
}

