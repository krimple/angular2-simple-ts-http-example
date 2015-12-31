import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from "angular2/router";
import {Response} from "angular2/http";
import {BlogEntry} from '../domain/blog-entry.ts';
import {BlogService} from '../services/blog-service';
import {MarkdownService} from "../services/markdown-service";

@Component({
    bindings: [BlogService, MarkdownService],
    template: `

    <div class="pure-g" *ngIf="message">
        <div class="pure-u-5-24"></div>
        <div class="pure-u-10-24">
          <span (click)="clearMessage()">[clear]</span> - {{ message }}
        </div>
    </div>
    <div class="pure-g" *ngFor="#blog of blogs">
           <div class="pure-u-1-24"></div>
           <div class="pure-u-22-24" >
               <h3>{{ blog.title }}</h3>
               <hr/>
                <div class="pure-g">
                    <div class="pure-u-11-24">
                    <h4 (click)="editBlogEntry(blog)">Live Preview - Click to open editor...</h4>
                    <div style="width: 100%; height: 5em%;"
                         [innerHtml]="blog.contentRendered"></div>
                </div>
                <div class="pure-u-11-24">
                    <h4>Inline Editor</h4>
                    <textarea style="width: 100%; height: 5em;" #markdown
                    (change)="render(blog)"
                    [(ngModel)]="blog.contentMarkdown"></textarea>
                </div>
           <div class="pure-u-1-24"></div>
    </div>
        `,
    selector: 'blog-roll',
    directives: [CORE_DIRECTIVES]
})
export class BlogRoll {
    blogs:Array<BlogEntry>;
    blogService:BlogService;
    router:Router;
    message:string;
    markdownService:MarkdownService;

    constructor(blogService:BlogService,
                markdownService:MarkdownService,
                router:Router) {
        this.blogService = blogService;
        this.markdownService = markdownService;
        this.loadBlogEntries();
    }

    loadBlogEntries() {
        this.blogService.getBlogs().subscribe(
            (data:Array<BlogEntry>) => {
                console.log('data is', data);
                this.blogs = data;
            },
            (error:Object) => {
                console.log('error!', error);
            }
        );
    }

    render(blog:BlogEntry) {
        if (blog.contentMarkdown) {
            blog.contentRendered = this.markdownService.toHtml(blog.contentMarkdown);
            this.blogService
                .saveBlog(blog)
                .subscribe(
                    () => this.message = "update complete",
                    (error) => { console.log(error); }
                );
        }
    }

    editBlogEntry(blog:BlogEntry) {
        console.log('saving', blog);
        this.blogService.saveBlog(blog)
            .subscribe(
                (res:Response) => {
                    this.router.navigate(['BlogEditorById', {id: blog.id}]);
                },
                (error:Object) => {
                    console.log('error saving!', error);
                }
            );
    }

    clearMessage() {
        this.message = undefined;
    }
}


