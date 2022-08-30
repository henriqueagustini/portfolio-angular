import { PortfolioService } from './../services/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  constructor(public cv: PortfolioService) {}

  ngOnInit(): void {}
}
