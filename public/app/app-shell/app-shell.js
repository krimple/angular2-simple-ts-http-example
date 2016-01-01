System.register(['../bootstrap/container/container', '../services/message-service', '../bootstrap/menubar/menubar', '../bootstrap/alert/alert', "angular2/core", "angular2/common", "../blog/blogroll", "../blog-editor/blog-editor", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var container_1, message_service_1, menubar_1, alert_1, core_1, common_1, blogroll_1, blog_editor_1, router_1;
    var AppShell;
    return {
        setters:[
            function (container_1_1) {
                container_1 = container_1_1;
            },
            function (message_service_1_1) {
                message_service_1 = message_service_1_1;
            },
            function (menubar_1_1) {
                menubar_1 = menubar_1_1;
            },
            function (alert_1_1) {
                alert_1 = alert_1_1;
            },
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
                function AppShell(messageService) {
                    this.messageService = messageService;
                    this.messages = messageService.messages;
                    messageService.add('this is on fire!');
                }
                AppShell = __decorate([
                    core_1.Component({
                        selector: 'app-shell',
                        template: "\n    <bsContainer>\n        <menubar>\n            <li class=\"pure-menu-item\"><a [routerLink]=\"['BlogRoll']\">Blog Roll</a></li>\n            <li class=\"pure-menu-item\"><a [routerLink]=\"['BlogEditor']\">Blog Editor</a></li>\n       </menubar>\n\n       <!-- messages, if any -->\n       <row *ngFor=\"#message of messages\">\n            <alert [message]=\"message\"></alert>\n       </row>\n\n       <router-outlet></router-outlet>\n    </bsContainer>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, container_1.BootstrapContainer, menubar_1.MenuBar, alert_1.Alert],
                        bindings: [message_service_1.MessageService]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/blogroll', component: blogroll_1.BlogRoll, name: 'BlogRoll', useAsDefault: true }),
                        new router_1.Route({ path: '/blogeditor', component: blog_editor_1.BlogEditor, name: 'BlogEditor' }),
                        new router_1.Route({ path: '/blogeditor/:id', component: blog_editor_1.BlogEditor, name: 'BlogEditorById' })
                    ]), 
                    __metadata('design:paramtypes', [message_service_1.MessageService])
                ], AppShell);
                return AppShell;
            })();
            exports_1("AppShell", AppShell);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1zaGVsbC9hcHAtc2hlbGwudHMiXSwibmFtZXMiOlsiQXBwU2hlbGwiLCJBcHBTaGVsbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQTRCSUEsa0JBQW9CQSxjQUE4QkE7b0JBQTlCQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZ0JBO29CQUM5Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7b0JBQ3hDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBL0JMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFFBQVFBLEVBQUVBLG1kQWNUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLEVBQUVBLDBCQUFpQkEsRUFBRUEsOEJBQWtCQSxFQUFFQSxpQkFBT0EsRUFBRUEsYUFBS0EsQ0FBQ0E7d0JBQ3BGQSxRQUFRQSxFQUFFQSxDQUFDQSxnQ0FBY0EsQ0FBQ0E7cUJBQzdCQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNUQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSxtQkFBUUEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBQ0EsQ0FBQ0E7d0JBQzFGQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxTQUFTQSxFQUFFQSx3QkFBVUEsRUFBRUEsSUFBSUEsRUFBRUEsWUFBWUEsRUFBQ0EsQ0FBQ0E7d0JBQzVFQSxJQUFJQSxjQUFLQSxDQUFDQSxFQUFFQSxJQUFJQSxFQUFFQSxpQkFBaUJBLEVBQUVBLFNBQVNBLEVBQUVBLHdCQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxnQkFBZ0JBLEVBQUNBLENBQUNBO3FCQUN2RkEsQ0FBQ0E7OzZCQVNEQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FqQ0EsQUFpQ0NBLElBQUE7WUFqQ0QsK0JBaUNDLENBQUEiLCJmaWxlIjoiYXBwLXNoZWxsL2FwcC1zaGVsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm9vdHN0cmFwQ29udGFpbmVyfSBmcm9tICcuLi9ib290c3RyYXAvY29udGFpbmVyL2NvbnRhaW5lcic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHtNZW51QmFyfSBmcm9tICcuLi9ib290c3RyYXAvbWVudWJhci9tZW51YmFyJztcbmltcG9ydCB7QWxlcnR9IGZyb20gJy4uL2Jvb3RzdHJhcC9hbGVydC9hbGVydCc7XG5pbXBvcnQge0FsZXJ0TWVzc2FnZX0gZnJvbSAnLi4vYm9vdHN0cmFwL2FsZXJ0L2FsZXJ0LW1lc3NhZ2UnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtCbG9nUm9sbH0gZnJvbSBcIi4uL2Jsb2cvYmxvZ3JvbGxcIjtcbmltcG9ydCB7QmxvZ0VkaXRvcn0gZnJvbSBcIi4uL2Jsb2ctZWRpdG9yL2Jsb2ctZWRpdG9yXCI7XG5pbXBvcnQge1xuICAgIFJvdXRlckxpbmssXG4gICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgUm91dGVDb25maWcsXG4gICAgUm91dGUsXG4gICAgUm91dGVyT3V0bGV0LFxuICAgIExvY2F0aW9uLFxuICAgIFJvdXRlUGFyYW1zXG59IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc2hlbGwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGJzQ29udGFpbmVyPlxuICAgICAgICA8bWVudWJhcj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInB1cmUtbWVudS1pdGVtXCI+PGEgW3JvdXRlckxpbmtdPVwiWydCbG9nUm9sbCddXCI+QmxvZyBSb2xsPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwdXJlLW1lbnUtaXRlbVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQmxvZ0VkaXRvciddXCI+QmxvZyBFZGl0b3I8L2E+PC9saT5cbiAgICAgICA8L21lbnViYXI+XG5cbiAgICAgICA8IS0tIG1lc3NhZ2VzLCBpZiBhbnkgLS0+XG4gICAgICAgPHJvdyAqbmdGb3I9XCIjbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxuICAgICAgICAgICAgPGFsZXJ0IFttZXNzYWdlXT1cIm1lc3NhZ2VcIj48L2FsZXJ0PlxuICAgICAgIDwvcm93PlxuXG4gICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvYnNDb250YWluZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgQm9vdHN0cmFwQ29udGFpbmVyLCBNZW51QmFyLCBBbGVydF0sXG4gICAgYmluZGluZ3M6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5AUm91dGVDb25maWcoW1xuICAgIG5ldyBSb3V0ZSh7IHBhdGg6ICcvYmxvZ3JvbGwnLCBjb21wb25lbnQ6IEJsb2dSb2xsLCBuYW1lOiAnQmxvZ1JvbGwnLCB1c2VBc0RlZmF1bHQ6IHRydWV9KSxcbiAgICBuZXcgUm91dGUoeyBwYXRoOiAnL2Jsb2dlZGl0b3InLCBjb21wb25lbnQ6IEJsb2dFZGl0b3IsIG5hbWU6ICdCbG9nRWRpdG9yJ30pLFxuICAgIG5ldyBSb3V0ZSh7IHBhdGg6ICcvYmxvZ2VkaXRvci86aWQnLCBjb21wb25lbnQ6IEJsb2dFZGl0b3IsIG5hbWU6ICdCbG9nRWRpdG9yQnlJZCd9KVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBTaGVsbCB7XG5cbiAgICBtZXNzYWdlczogQWxlcnRNZXNzYWdlW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzO1xuICAgICAgICBtZXNzYWdlU2VydmljZS5hZGQoJ3RoaXMgaXMgb24gZmlyZSEnKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
