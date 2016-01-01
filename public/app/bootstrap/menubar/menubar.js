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
    var MenuBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MenuBar = (function () {
                function MenuBar() {
                }
                MenuBar = __decorate([
                    core_1.Component({
                        selector: 'menubar',
                        template: "\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n\n   <ul class=\"nav navbar-nav navbar-right\">\n     <ng-content></ng-content>\n   </ul>\n   </div>\n   </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuBar);
                return MenuBar;
            })();
            exports_1("MenuBar", MenuBar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC9tZW51YmFyL21lbnViYXIudHMiXSwibmFtZXMiOlsiTWVudUJhciIsIk1lbnVCYXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUNBO2dCQUFBQTtnQkFlQUMsQ0FBQ0E7Z0JBZkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsUUFBUUEsRUFBRUEsZ05BU1RBO3FCQUNKQSxDQUFDQTs7NEJBR0RBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCw2QkFlQyxDQUFBIiwiZmlsZSI6ImJvb3RzdHJhcC9tZW51YmFyL21lbnViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWVudWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgIDwvdWw+XG4gICA8L2Rpdj5cbiAgIDwvbmF2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTWVudUJhciB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
