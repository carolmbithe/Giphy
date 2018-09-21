import { Component, OnInit } from '@angular/core';
import {Giphy} from '../giphy-class/giphy';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {


  giphys:any;



//   performSearch(searchTerm: HTMLInputElement): void {
//     console.log(`User entered: ${searchTerm.value}`);
// }



constructor(private http:Http) { }

ngOnInit(){
  this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=GmxQH7oMwWvakXa8MstlqvInM3EM3FMR").subscribe(Response=>{
    this.giphys=Response.json().data;
    console.log(this.giphys)
      // Successful API request.
  })
}
}
