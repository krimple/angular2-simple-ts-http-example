System.register(['./app-shell/app-shell', "angular2/platform/browser", "angular2/http"], function(exports_1) {
    var app_shell_1, browser_1, http_1;
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
            }],
        execute: function() {
            browser_1.bootstrap(app_shell_1.AppShell, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQU1BLG1CQUFTLENBQUMsb0JBQVEsRUFBRSxDQUFDLHFCQUFjLENBQUMsQ0FBQyxDQUFDIn0=