import {Component} from "angular2/core";
import {ROUTER_PROVIDERS} from 'angular2/router';
import {CORE_DIRECTIVES} from "angular2/common";

//, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {BlogRoll} from "../blog/blogroll";
//import {reflector} from 'angular2/src/core/reflection/reflection';
//import {ReflectionCapabilities} from 'angular2/src/core/reflection/reflection_capabilities';
import {
    RouterLink,
    RouteConfig,
    Router,
    Route,
    RouterOutlet,
    Location,
    RouteParams
} from 'angular2/router';


@Component({
    selector: 'app-shell',
    template: `
        <a [routerLink]="['BlogRoll']">Blog Roll</a>
        <br/>
        <hr/>
        <router-outlet></router-outlet>
    `,
    directives: [CORE_DIRECTIVES, RouterLink, RouterOutlet],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    new Route({ path: '/blogroll',
                component: BlogRoll,
                name: 'BlogRoll',
                useAsDefault: true})
])
export class AppShell {

}
