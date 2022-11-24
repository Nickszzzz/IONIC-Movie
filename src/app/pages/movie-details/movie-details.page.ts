import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})

export class MovieDetailsPage implements OnInit {


  title: string = '';
  imgUrl: string = '';
  tagline: string = '';
  genres = [];
  overview = '';
  release_date = '';
  budget = 0;
  homepage = '';


  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id : any = this.route.snapshot.paramMap.get('id');
    
    this.movieService.getMoviewDetails(id).subscribe((res) => {
      this.title = res.title;
      this.imgUrl = environment.image+'/w400'+res.poster_path;
      this.tagline = res.tagline;
      this.genres = res.genres;
      this.overview = res.overview;
      this.release_date = res.release_date;
      this.budget = res.budget;
      this.homepage = res.homepage;
      console.log(res);
    });  
  }

  openHomepage() {
    window.open(this.homepage);
  }

}
