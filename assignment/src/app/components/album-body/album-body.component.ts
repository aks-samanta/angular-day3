import { Component } from '@angular/core';
import { Album } from 'src/app/album';

@Component({
  selector: 'app-album-body',
  templateUrl: './album-body.component.html',
  styleUrls: ['./album-body.component.css']
})
export class AlbumBodyComponent {

  albums: Album[] = [];

  ngOnInit() {
    this.albums = [
      {
        thumbnail: "http://www.w3.org/2000/svg",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },
      {
        thumbnail: "https://picsum.photos/200/300",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        readTime: "9 min"
      },

    ]
  }

}
