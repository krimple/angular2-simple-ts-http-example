System.register(["angular2/core", 'angular2/router', "angular2/common", "../blog/blogroll"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, blogroll_1, router_2;
    var AppShell;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (blogroll_1_1) {
                blogroll_1 = blogroll_1_1;
            }],
        execute: function() {
            AppShell = (function () {
                function AppShell() {
                }
                AppShell = __decorate([
                    core_1.Component({
                        selector: 'app-shell',
                        template: "\n        <a [routerLink]=\"['BlogRoll']\">Blog Roll</a>\n        <br/>\n        <hr/>\n        <router-outlet></router-outlet>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, router_2.RouterLink, router_2.RouterOutlet],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_2.RouteConfig([
                        new router_2.Route({ path: '/blogroll',
                            component: blogroll_1.BlogRoll,
                            name: 'BlogRoll',
                            useAsDefault: true })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppShell);
                return AppShell;
            })();
            exports_1("AppShell", AppShell);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNoZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC1zaGVsbC9hcHAtc2hlbGwudHMiXSwibmFtZXMiOlsiQXBwU2hlbGwiLCJBcHBTaGVsbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFBQUE7Z0JBbUJBQyxDQUFDQTtnQkFuQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsUUFBUUEsRUFBRUEsdUlBS1RBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsRUFBRUEsbUJBQVVBLEVBQUVBLHFCQUFZQSxDQUFDQTt3QkFDdkRBLFNBQVNBLEVBQUVBLENBQUNBLHlCQUFnQkEsQ0FBQ0E7cUJBQ2hDQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNUQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQTs0QkFDakJBLFNBQVNBLEVBQUVBLG1CQUFRQTs0QkFDbkJBLElBQUlBLEVBQUVBLFVBQVVBOzRCQUNoQkEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7cUJBQ25DQSxDQUFDQTs7NkJBR0RBO2dCQUFEQSxlQUFDQTtZQUFEQSxDQUFDQSxBQW5CRCxJQW1CQztZQW5CRCwrQkFtQkMsQ0FBQSJ9