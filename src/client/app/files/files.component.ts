import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  fileToUpload: File;
  public image;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  fileSelect(event) {
    this.fileToUpload = event.target.files[0];
  }

  upload() {
    const fileData = new FormData();
    console.log(this.fileToUpload);
    fileData.append('image', this.fileToUpload, this.fileToUpload.name);
    console.log(fileData);
    this.httpClient.post<any>('/upload', fileData).subscribe((res) => {
      console.log(fileData);
    });

  }

}
