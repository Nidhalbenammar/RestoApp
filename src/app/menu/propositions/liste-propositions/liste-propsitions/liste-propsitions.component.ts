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
  votedPropositions: Set<number> = new Set();
  constructor(private propositionsService: PropositionsService) { }

  ngOnInit(): void {
    this.loadPropositions();
    this.loadStoredVotes();
  }

  loadPropositions() {
    this.propositionsService.getAll().subscribe(data => {
      this.propositions = data;
    });
  }

  vote(proposition: any) {
    if (this.votedPropositions.has(proposition.id)) {
      alert('You have already voted for this proposition.');
      return;
    }

    proposition.vote++;
    this.propositionsService.updateVote(proposition).subscribe(() => {
      localStorage.setItem('vote_' + proposition.id, proposition.vote.toString());
      this.votedPropositions.add(proposition.id);
      this.sortPropositions();
    });
  }

  loadStoredVotes() {
    this.propositions.forEach(proposition => {
      const storedVotes = localStorage.getItem('vote_' + proposition.id);
      if (storedVotes !== null) {
        proposition.vote = parseInt(storedVotes, 10);
        this.votedPropositions.add(proposition.id);
      }
    });
    this.sortPropositions();
  }

  sortPropositions() {
    this.propositions.sort((a, b) => b.vote - a.vote);
  }
}
