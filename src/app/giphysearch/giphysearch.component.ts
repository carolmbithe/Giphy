import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'


@Component({
 selector: 'app-giphysearch',
 templateUrl: './giphysearch.component.html',
 styleUrls: ['./giphysearch.component.css']
})
export class GiphySearchComponent implements OnInit {
 link="https://api.giphy.com/v1/gifs/search?q=";
 key="&api_key=GmxQH7oMwWvakXa8MstlqvInM3EM3FMR";
 gifs=[];

 constructor(private http:Http) {

   this.http=http;
  }

 doSearch(search: HTMLInputElement): void {
   // console.log(`User entered: ${search.value}`);

  let fullLink= this.link + search.value + this.key;
  console.log(fullLink);

  this.http.request(fullLink).subscribe(Response=>{
    this.gifs=Response.json().data;
    console.log(this.gifs);

  })
 }
 ngOnInit() {
 }

}
