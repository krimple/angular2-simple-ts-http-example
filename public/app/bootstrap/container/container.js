System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BootstrapContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BootstrapContainer = (function () {
                function BootstrapContainer() {
                }
                BootstrapContainer = __decorate([
                    core_1.Component({
                        selector: 'bsContainer',
                        template: "\n    <div class=\"container\">\n      <ng-content></ng-content>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BootstrapContainer);
                return BootstrapContainer;
            })();
            exports_1("BootstrapContainer", BootstrapContainer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC9jb250YWluZXIvY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbIkJvb3RzdHJhcENvbnRhaW5lciIsIkJvb3RzdHJhcENvbnRhaW5lci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQ0E7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFWREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxRQUFRQSxFQUFFQSxvRkFJVEE7cUJBQ0pBLENBQUNBOzt1Q0FHREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCxtREFVQyxDQUFBIiwiZmlsZSI6ImJvb3RzdHJhcC9jb250YWluZXIvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzQ29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcENvbnRhaW5lciB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
