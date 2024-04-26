import { Component } from '@angular/core';
import { PropositionsService } from 'src/app/menu/service/propositions.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-liste-propsitions',
  templateUrl: './liste-propsitions.component.html',
  styleUrls: ['./liste-propsitions.component.css']
})
export class ListePropsitionsComponent implements OnInit{
  propositions: any[] = [];

  constructor(private propositionsService: PropositionsService) { }

  ngOnInit(): void {
    this.loadPropositions();
  }
  loadPropositions() {
    this.propositionsService.getAll().subscribe(data => {
      this.propositions = data;
      this.loadStoredVotes();
    });
  }

  vote(proposition: any) {
    proposition.vote++;
    this.propositionsService.updateVote(proposition).subscribe(() => {
      localStorage.setItem('vote_' + proposition.id, proposition.vote.toString());
      this.propositions.sort((a, b) => b.vote - a.vote);
    });
  }

  loadStoredVotes() {
    this.propositions.forEach(proposition => {
      const storedVotes = localStorage.getItem('vote_' + proposition.id);
      if (storedVotes !== null) {
        proposition.vote = parseInt(storedVotes, 10);
      }
    });
    this.propositions.sort((a, b) => b.vote - a.vote);
  }
}
