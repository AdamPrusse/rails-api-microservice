import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'adam@adam.com')
	proposalTwo: Proposal = new Proposal(99, 'Abertyc Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'adam@adam.com')
	proposalThree: Proposal = new Proposal(300, 'Abfhgc Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'adam@adam.com')

	proposals: Proposal[] = [
		this.proposalOne,
	 	this.proposalTwo,
	  	this.proposalThree
	  ]
}

