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
    var Alert;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Alert = (function () {
                function Alert() {
                }
                Alert = __decorate([
                    core_1.Component({
                        selector: 'alert',
                        properties: ['message'],
                        template: "\n        <div class=\"alert alert-info alert-dismissable\"\n             data-dismiss=\"alert\">\n            <button type=\"button\" class=\"close\"\n                 data-dismiss=\"alert\"\n                 aria-label=\"Close\">\n                 <span aria-hidden=\"true\">&times;</span>\n            </button>\n            {{ message.text }}\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Alert);
                return Alert;
            })();
            exports_1("Alert", Alert);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC9hbGVydC9hbGVydC50cyJdLCJuYW1lcyI6WyJBbGVydCIsIkFsZXJ0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7Z0JBZ0JBQyxDQUFDQTtnQkFoQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE9BQU9BO3dCQUNqQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQ3ZCQSxRQUFRQSxFQUFFQSxrWEFVVEE7cUJBQ0pBLENBQUNBOzswQkFFREE7Z0JBQURBLFlBQUNBO1lBQURBLENBaEJBLEFBZ0JDQSxJQUFBO1lBaEJELHlCQWdCQyxDQUFBIiwiZmlsZSI6ImJvb3RzdHJhcC9hbGVydC9hbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtBbGVydE1lc3NhZ2V9IGZyb20gXCIuL2FsZXJ0LW1lc3NhZ2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWxlcnQnLFxuICAgIHByb3BlcnRpZXM6IFsnbWVzc2FnZSddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvIGFsZXJ0LWRpc21pc3NhYmxlXCJcbiAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHt7IG1lc3NhZ2UudGV4dCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
