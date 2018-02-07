import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document[] = [
	  {
	  	title: "My First Doc",
	  	description: 'qwerasdfav asdf as',
	  	file_url: 'http://google.com',
	  	updated_at: '02 02 2018',
	  	image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png',
	  },
	  {
	  	title: "My Second Doc",
	  	description: 'qwerasdfav asdf as',
	  	file_url: 'http://google.com',
	  	updated_at: '02 02 2018',
	  	image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1000px-Google_mic.svg.png',
	  },
	  {
	  	title: "My Last Doc",
	  	description: 'qwerasdfav asdf as',
	  	file_url: 'http://google.com',
	  	updated_at: '02 02 2018',
	  	image_url: 'https://c2.staticflickr.com/6/5512/14253849274_ab20a010a0_z.jpg',
	  }
	]
}