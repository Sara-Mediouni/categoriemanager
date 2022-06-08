import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categories } from './categorie';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
private baseurl='http://localhost:8080/categories';


  constructor(private http:HttpClient) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
     const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
     FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  }
  

  
  

  getCategorieById(id:Number):Observable<any>{
       return this.http.get(`${this.baseurl}/find/${id}`)
  }
  deleteCategorie(id:Number):Observable<any>{
        return this.http.delete(`${this.baseurl}/delete/${id}`)
      }
  getCategoriesList(): Observable<Categories[]>{
        return this.http.get<Categories[]>(`${this.baseurl}/all`);
      }
  updateCategorie(id:Number,c:Categories):Observable<any>{
        return this.http.post(`${this.baseurl}/update/${id}`,c)
          }  
  createCategorie(c: Categories): Observable<Object>{
         return this.http.post(`${this.baseurl}/add`, c);
          }       
}
