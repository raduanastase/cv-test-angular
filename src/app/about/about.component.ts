import {Component, OnInit} from '@angular/core';
import {GithubProjectsService} from '../services/github-projects.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public projects: object[];

  constructor(private githubProjectsService: GithubProjectsService) {
  }

  ngOnInit(): void {
    this.githubProjectsService.getProjectsForUser('raduanastase').subscribe((data) => {
      this.projects = data;
    });
  }
}
