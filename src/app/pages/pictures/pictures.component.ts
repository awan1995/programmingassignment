import { Component, OnInit } from '@angular/core';
import {AlbumService} from '../../core/shared-services/album.service'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PhotoService } from 'src/app/core/shared-services/photo.service';
@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})

export class PicturesComponent implements OnInit {
  users=[];
  albums=[];
  photo$: Observable<any[]> = this.store.select(state => state.items);
  photoList: any;
  currentImage: string;
  photoList1: any[];
  constructor(private albumService:AlbumService,private store: Store<{ items: any[] }>,private photoService:PhotoService) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Photo Component] List' });
    this.store.select<any>('items').subscribe(response=>{
      console.log(response);
      
    })
    this.getUsers();
    this.getPhotos();
    
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
      // this.store.dispatch({ type: '[Photo Component] List' });
      console.log(this.photo$);
      
    })
  }
  getPhotos()
  {
    this.photoService.getAllPhotos().subscribe(response=>{
      this.photoList=response;
    })
  }
  getUserName(id:number){
    var user:any=this.users.filter(_=>_.id==id);
    //console.log(user);
    
    return user[0].name;

  }
  getAlbumName(id:number){
    var album:any=this.albums.filter(_=>_.id==id);
    console.log(album);
    
    return album[0].title;

  }
  imageChange(url:string)
  {
    this.currentImage=url;
    console.log(this.currentImage);
    
  }
  change(event)
  {
    console.log(event.value);
    this.photoList1=this.photoList.filter(_=>_.albumId==event.value);
    console.log(this.photoList1);
    
    
  }
}

export class Photo{
  title:string;
}