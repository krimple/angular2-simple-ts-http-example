import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/add/operator/map';

@Component({
    providers: [HTTP_PROVIDERS],
    template:`
    <div *ngFor="#blog of blogs">
      <h1>{{ blog.title }}</h1>
      <div [innerHtml]="blog.content"></div>
    </div>
    `,
    selector: 'blog-roll',
    directives: [CORE_DIRECTIVES]
})
export class BlogRoll {
    blogs: Array<BlogEntry>;

    constructor(http: Http) {
        http.get("/data/data.json")
            .map((res: Response) => {
                return BlogEntry.asBlogEntries(res.json())}
            )
            .subscribe(
                (data: Array<BlogEntry>) => {
                console.log('data is', data);
                this.blogs = data;
                },
                (error: Object) => {
                    console.log('error!', error);
                }
            );
    }
}

class BlogEntry {
    title: string;
    content: string;
    constructor(title:string, content:string) {
        this.title = title;
        this.content = content;
    }

    static asBlogEntries(jsonArray: Array<Object>) {
        return jsonArray.map((datum) => BlogEntry.asBlogEntry(datum));
    }

    static asBlogEntry(json: Object) {
        return new BlogEntry(json["title"], json["content"]);
    }
}