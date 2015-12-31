System.register(['./app-shell/app-shell', "angular2/platform/browser", "angular2/http", 'angular2/router'], function(exports_1) {
    var app_shell_1, browser_1, http_1, router_1;
    return {
        setters:[
            function (app_shell_1_1) {
                app_shell_1 = app_shell_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_shell_1.AppShell, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztZQUtBLG1CQUFTLENBQUMsb0JBQVEsRUFBRSxDQUFDLHFCQUFjLEVBQUUseUJBQWdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwU2hlbGx9IGZyb20gJy4vYXBwLXNoZWxsL2FwcC1zaGVsbCc7XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSBcImFuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXJcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmJvb3RzdHJhcChBcHBTaGVsbCwgW0hUVFBfUFJPVklERVJTLCBST1VURVJfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
