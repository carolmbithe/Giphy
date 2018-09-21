import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'giphy';
}
// import { Component,OnInit } from '@angular/core';


// import {Giphy} from './giphy-class/giphy';
// import {HttpClient} from '@angular/common/http';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {


//   giphy: Giphy;
//   giphyArray:any;



// //   performSearch(searchTerm: HTMLInputElement): void {
// //     console.log(`User entered: ${searchTerm.value}`);
// // }



// constructor(private http:HttpClient) { }

// ngOnInit(){
//   this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=GmxQH7oMwWvakXa8MstlqvInM3EM3FMR").subscribe(data=>{
//     this.giphy= new Giphy(data);
//     this.giphyArray = this.giphy.data.data;
//     console.log(data)
//       // Successful API request.
//   })
// }
// }
