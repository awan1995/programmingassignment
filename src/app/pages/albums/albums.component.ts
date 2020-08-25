import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../../core/shared-services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {
  users=[];
  albums=[];
  albumList: any[];
  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
    this.getUsers();
    
  }
  getUsers(){
    this.albumService.getAllUsers().subscribe(data=>{
      this.users=data;
      this.getAlbums();
    })
  }
  getAlbums(){
    this.albumService.getAllAlbums().subscribe(data=>{
      this.albums=data;
    })
  }
  getUserName(id:number){
    var user:any=this.users.filter(_=>_.id==id);
    console.log(user);
    
    return user[0].name;

  }
  
  change(event)
  {
    console.log(event.value);
    this.albumList=this.albums.filter(_=>_.userId==event.value);
    console.log(this.albumList);
    
    
  }
  change2(){
    
  }
}
