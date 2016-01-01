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
    var BlogEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BlogEditor = (function () {
                function BlogEditor() {
                }
                BlogEditor = __decorate([
                    core_1.Component({
                        template: "\n      <b>hi</b>\n                    <div class=\"pure-u-11-24\">\n                    <h4>Inline Editor</h4>\n                    <textarea style=\"width: 100%; height: 5em;\" #markdown\n                    (change)=\"render(blog)\"\n                    [(ngModel)]=\"blog.contentMarkdown\"></textarea>\n                </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BlogEditor);
                return BlogEditor;
            })();
            exports_1("BlogEditor", BlogEditor);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctZWRpdG9yL2Jsb2ctZWRpdG9yLnRzIl0sIm5hbWVzIjpbIkJsb2dFZGl0b3IiLCJCbG9nRWRpdG9yLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFDQTtnQkFBQUE7Z0JBYUFDLENBQUNBO2dCQWJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSw4VUFRWkE7cUJBQ0RBLENBQUNBOzsrQkFHREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCxtQ0FhQyxDQUFBIiwiZmlsZSI6ImJsb2ctZWRpdG9yL2Jsb2ctZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGI+aGk8L2I+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdXJlLXUtMTEtMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PklubGluZSBFZGl0b3I8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA1ZW07XCIgI21hcmtkb3duXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwicmVuZGVyKGJsb2cpXCJcbiAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJibG9nLmNvbnRlbnRNYXJrZG93blwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gYFxufSlcbmV4cG9ydCBjbGFzcyBCbG9nRWRpdG9yIHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
