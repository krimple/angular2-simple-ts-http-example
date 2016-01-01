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
    var Row;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Row = (function () {
                function Row() {
                }
                Row = __decorate([
                    core_1.Component({
                        selector: 'row',
                        template: "\n        <div class=\"row\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Row);
                return Row;
            })();
            exports_1("Row", Row);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC9yb3cvcm93LnRzIl0sIm5hbWVzIjpbIlJvdyIsIlJvdy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQ0E7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFWREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7d0JBQ2ZBLFFBQVFBLEVBQUVBLDRGQUlUQTtxQkFDSkEsQ0FBQ0E7O3dCQUdEQTtnQkFBREEsVUFBQ0E7WUFBREEsQ0FWQSxBQVVDQSxJQUFBO1lBVkQscUJBVUMsQ0FBQSIsImZpbGUiOiJib290c3RyYXAvcm93L3Jvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyb3cnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBSb3cge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
