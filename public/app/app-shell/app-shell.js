System.register(["angular2/core", "angular2/common", "../blog/blogroll", "../blog-editor/blog-editor", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, blogroll_1, blog_editor_1, router_1;
    var AppShell;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (blogroll_1_1) {
                blogroll_1 = blogroll_1_1;
            },
            function (blog_editor_1_1) {
                blog_editor_1 = blog_editor_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppShell = (function () {
                function AppShell() {
                }
                AppShell = __decorate([
                    core_1.Component({
                        selector: 'app-shell',
                        template: "\n\n    <div class=\"pure-menu pure-menu-horizontal\">\n    <span class=\"pure-menu-heading\">Simple Router Demo</span>\n    <ul class=\"pure-menu-list\">\n        <li class=\"pure-menu-item\"><a class=\"pure-menu-link\" [routerLink]=\"['BlogRoll']\">Blog Roll</a></li>\n        <li class=\"pure-menu-item\"><a class=\"pure-menu-link\" [routerLink]=\"['BlogEditor']\">Blog Editor</a></li>\n    </ul>\n    </div>\n    <router-outlet></router-outlet>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/blogroll', component: blogroll_1.BlogRoll, name: 'BlogRoll', useAsDefault: true }),
                        new router_1.Route({ path: '/blogeditor', component: blog_editor_1.BlogEditor, name: 'BlogEditor' }),
                        new router_1.Route({ path: '/blogeditor/:id', component: blog_editor_1.BlogEditor, name: 'BlogEditorById' })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppShell);
                return AppShell;
            })();
            exports_1("AppShell", AppShell);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1zaGVsbC9hcHAtc2hlbGwudHMiXSwibmFtZXMiOlsiQXBwU2hlbGwiLCJBcHBTaGVsbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUFBO2dCQXNCQUMsQ0FBQ0E7Z0JBdEJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFFBQVFBLEVBQUVBLHdjQVVUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7cUJBQ25EQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNUQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSxtQkFBUUEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7d0JBQzFGQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxTQUFTQSxFQUFFQSx3QkFBVUEsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQzVFQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBLFNBQVNBLEVBQUVBLHdCQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxnQkFBZ0JBLEVBQUNBLENBQUNBO3FCQUN2RkEsQ0FBQ0E7OzZCQUdEQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0F0QkEsQUFzQkNBLElBQUE7WUF0QkQsK0JBc0JDLENBQUEiLCJmaWxlIjoiYXBwLXNoZWxsL2FwcC1zaGVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7QmxvZ1JvbGx9IGZyb20gXCIuLi9ibG9nL2Jsb2dyb2xsXCI7XG5pbXBvcnQge0Jsb2dFZGl0b3J9IGZyb20gXCIuLi9ibG9nLWVkaXRvci9ibG9nLWVkaXRvclwiO1xuaW1wb3J0IHtcbiAgICBSb3V0ZXJMaW5rLFxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxuICAgIFJvdXRlQ29uZmlnLFxuICAgIFJvdXRlLFxuICAgIFJvdXRlck91dGxldCxcbiAgICBMb2NhdGlvbixcbiAgICBSb3V0ZVBhcmFtc1xufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXNoZWxsJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgPGRpdiBjbGFzcz1cInB1cmUtbWVudSBwdXJlLW1lbnUtaG9yaXpvbnRhbFwiPlxuICAgIDxzcGFuIGNsYXNzPVwicHVyZS1tZW51LWhlYWRpbmdcIj5TaW1wbGUgUm91dGVyIERlbW88L3NwYW4+XG4gICAgPHVsIGNsYXNzPVwicHVyZS1tZW51LWxpc3RcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicHVyZS1tZW51LWl0ZW1cIj48YSBjbGFzcz1cInB1cmUtbWVudS1saW5rXCIgW3JvdXRlckxpbmtdPVwiWydCbG9nUm9sbCddXCI+QmxvZyBSb2xsPC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInB1cmUtbWVudS1pdGVtXCI+PGEgY2xhc3M9XCJwdXJlLW1lbnUtbGlua1wiIFtyb3V0ZXJMaW5rXT1cIlsnQmxvZ0VkaXRvciddXCI+QmxvZyBFZGl0b3I8L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAgbmV3IFJvdXRlKHsgcGF0aDogJy9ibG9ncm9sbCcsIGNvbXBvbmVudDogQmxvZ1JvbGwsIG5hbWU6ICdCbG9nUm9sbCcsIHVzZUFzRGVmYXVsdDogdHJ1ZX0pLFxuICAgIG5ldyBSb3V0ZSh7IHBhdGg6ICcvYmxvZ2VkaXRvcicsIGNvbXBvbmVudDogQmxvZ0VkaXRvciwgbmFtZTogJ0Jsb2dFZGl0b3InfSksXG4gICAgbmV3IFJvdXRlKHsgcGF0aDogJy9ibG9nZWRpdG9yLzppZCcsIGNvbXBvbmVudDogQmxvZ0VkaXRvciwgbmFtZTogJ0Jsb2dFZGl0b3JCeUlkJ30pXG5dKVxuZXhwb3J0IGNsYXNzIEFwcFNoZWxsIHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
