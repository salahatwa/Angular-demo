import { Component, OnInit } from '@angular/core';
import { GitHubService } from './../../shared/services/github.service';
import { Github } from 'src/app/shared/models/github.model';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  data: Github[];

  constructor(private github: GitHubService) { }

  ngOnInit(): void {
    this.github.postUser().subscribe(result => {
      console.log(result);
    }, err => {
      console.log(err);
    });
    this.github.githubRepos('salahatwa').subscribe(result => {
      console.log(result);
      this.data = result;
    }, err => {
      console.log(err);
    }, () => {

    });

  }

}
