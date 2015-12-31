import {Component} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {BlogRoll} from "../blog/blogroll";
import {BlogEditor} from "../blog-editor/blog-editor";
import {
    RouterLink,
    ROUTER_DIRECTIVES,
    RouteConfig,
    Route,
    RouterOutlet,
    Location,
    RouteParams
} from 'angular2/router';


@Component({
    selector: 'app-shell',
    template: `

    <div class="pure-menu pure-menu-horizontal">
    <span class="pure-menu-heading">Simple Router Demo</span>
    <ul class="pure-menu-list">
        <li class="pure-menu-item"><a class="pure-menu-link" [routerLink]="['BlogRoll']">Blog Roll</a></li>
        <li class="pure-menu-item"><a class="pure-menu-link" [routerLink]="['BlogEditor']">Blog Editor</a></li>
    </ul>
    </div>
    <router-outlet></router-outlet>
    `,
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
    new Route({ path: '/blogroll', component: BlogRoll, name: 'BlogRoll', useAsDefault: true}),
    new Route({ path: '/blogeditor', component: BlogEditor, name: 'BlogEditor'}),
    new Route({ path: '/blogeditor/:id', component: BlogEditor, name: 'BlogEditorById'})
])
export class AppShell {

}
