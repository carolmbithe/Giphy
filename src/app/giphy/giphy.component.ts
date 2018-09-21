import { Component, OnInit } from '@angular/core';
import {Giphy} from '../giphy-class/giphy';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {


  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{

    }

  }

}
