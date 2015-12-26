System.register(['angular2/core', "angular2/common", "angular2/http", 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1;
    var BlogRoll, BlogEntry;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlogRoll = (function () {
                function BlogRoll(http) {
                    var _this = this;
                    http.get("/api/blogs")
                        .map(function (res) {
                        return BlogEntry.asBlogEntries(res.json());
                    })
                        .subscribe(function (data) {
                        console.log('data is', data);
                        _this.blogs = data;
                    }, function (error) {
                        console.log('error!', error);
                    });
                }
                BlogRoll = __decorate([
                    core_1.Component({
                        providers: [],
                        template: "\n    <div *ngFor=\"#blog of blogs\">\n      <h1>{{ blog.title }}</h1>\n      <div [innerHtml]=\"blog.content\"></div>\n    </div>\n    ",
                        selector: 'blog-roll',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlogRoll);
                return BlogRoll;
            })();
            exports_1("BlogRoll", BlogRoll);
            BlogEntry = (function () {
                function BlogEntry(title, content) {
                    this.title = title;
                    this.content = content;
                }
                BlogEntry.asBlogEntries = function (jsonArray) {
                    return jsonArray.map(function (datum) { return BlogEntry.asBlogEntry(datum); });
                };
                BlogEntry.asBlogEntry = function (json) {
                    var title = json['title'];
                    var content = json['content'];
                    return new BlogEntry(title, content);
                };
                return BlogEntry;
            })();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3JvbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmxvZy9ibG9ncm9sbC50cyJdLCJuYW1lcyI6WyJCbG9nUm9sbCIsIkJsb2dSb2xsLmNvbnN0cnVjdG9yIiwiQmxvZ0VudHJ5IiwiQmxvZ0VudHJ5LmNvbnN0cnVjdG9yIiwiQmxvZ0VudHJ5LmFzQmxvZ0VudHJpZXMiLCJCbG9nRW50cnkuYXNCbG9nRW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFjSUEsa0JBQVlBLElBQVVBO29CQWQxQkMsaUJBNkJDQTtvQkFkT0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7eUJBQ2pCQSxHQUFHQSxDQUFDQSxVQUFDQSxHQUFhQTt3QkFDZkEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQUE7b0JBQUFBLENBQUNBLENBQzlDQTt5QkFDQUEsU0FBU0EsQ0FDTkEsVUFBQ0EsSUFBc0JBO3dCQUNuQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQzdCQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDbEJBLENBQUNBLEVBQ0xBLFVBQUNBLEtBQWFBO3dCQUNWQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDakNBLENBQUNBLENBQ0pBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkE1QkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFNBQVNBLEVBQUVBLEVBQUVBO3dCQUNiQSxRQUFRQSxFQUFDQSwwSUFLUkE7d0JBQ0RBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsVUFBVUEsRUFBRUEsQ0FBQ0Esd0JBQWVBLENBQUNBO3FCQUNoQ0EsQ0FBQ0E7OzZCQW1CREE7Z0JBQURBLGVBQUNBO1lBQURBLENBQUNBLEFBN0JELElBNkJDO1lBN0JELCtCQTZCQyxDQUFBO1lBRUQ7Z0JBR0lFLG1CQUFZQSxLQUFZQSxFQUFFQSxPQUFjQTtvQkFDcENDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFFTUQsdUJBQWFBLEdBQXBCQSxVQUFxQkEsU0FBd0JBO29CQUN6Q0UsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsS0FBS0EsSUFBS0EsT0FBQUEsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBNUJBLENBQTRCQSxDQUFDQSxDQUFDQTtnQkFDbEVBLENBQUNBO2dCQUVNRixxQkFBV0EsR0FBbEJBLFVBQW1CQSxJQUFTQTtvQkFDeEJHLElBQUlBLEtBQUtBLEdBQVdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUNsQ0EsSUFBSUEsT0FBT0EsR0FBV0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBRXRDQSxNQUFNQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUNMSCxnQkFBQ0E7WUFBREEsQ0FBQ0EsQUFsQkQsSUFrQkMifQ==