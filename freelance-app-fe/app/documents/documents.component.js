"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map