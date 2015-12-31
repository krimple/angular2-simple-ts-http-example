System.register(['angular2/http', 'angular2/core', '../domain/blog-entry', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, http_2, core_1, blog_entry_1;
    var BlogService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_entry_1_1) {
                blog_entry_1 = blog_entry_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlogService = (function () {
                function BlogService(http) {
                    this.http = http;
                    var headers = new http_1.Headers();
                    headers.append("content-type", "application/json; charset=utf-8");
                    this.opts = new http_1.RequestOptions();
                    this.opts.headers = headers;
                }
                BlogService.prototype.getBlogs = function () {
                    return this.http.get("/api/blogs")
                        .map(function (res) { return blog_entry_1.BlogEntry.asBlogEntries(res.json()); });
                };
                BlogService.prototype.saveBlog = function (blog) {
                    if (blog.id) {
                        return this.http.put('/api/blogs/' + blog.id, blog.json(), this.opts);
                    }
                    else {
                        return this.http.post('/api/blogs', blog.json(), this.opts);
                    }
                };
                BlogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], BlogService);
                return BlogService;
            })();
            exports_1("BlogService", BlogService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Jsb2ctc2VydmljZS50cyJdLCJuYW1lcyI6WyJCbG9nU2VydmljZSIsIkJsb2dTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQmxvZ1NlcnZpY2UuZ2V0QmxvZ3MiLCJCbG9nU2VydmljZS5zYXZlQmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFHSUEscUJBQW9CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBQzNCQSxJQUFJQSxPQUFPQSxHQUFZQSxJQUFJQSxjQUFPQSxFQUFFQSxDQUFDQTtvQkFDckNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLGlDQUFpQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xFQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxxQkFBY0EsRUFBRUEsQ0FBQ0E7b0JBQ2pDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtnQkFDL0JBLENBQUNBO2dCQUVERCw4QkFBUUEsR0FBUkE7b0JBQ1FFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBO3lCQUM3QkEsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBYUEsSUFBT0EsTUFBTUEsQ0FBQ0Esc0JBQVNBLENBQUNBLGFBQWFBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwRkEsQ0FBQ0E7Z0JBQ0RGLDhCQUFRQSxHQUFSQSxVQUFTQSxJQUFlQTtvQkFDcEJHLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO3dCQUNWQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDMUVBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDSkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hFQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBcEJMSDtvQkFBQ0EsaUJBQVVBLEVBQUVBOztnQ0FxQlpBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7WUFyQkQscUNBcUJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvYmxvZy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SW5qZWN0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jsb2dFbnRyeX0gZnJvbSAnLi4vZG9tYWluL2Jsb2ctZW50cnknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsb2dTZXJ2aWNlIHtcbiAgICBvcHRzOiBSZXF1ZXN0T3B0aW9ucztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICB2YXIgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgaGVhZGVycy5hcHBlbmQoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgIHRoaXMub3B0cyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgIHRoaXMub3B0cy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB9XG5cbiAgICBnZXRCbG9ncygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvYXBpL2Jsb2dzXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4geyByZXR1cm4gQmxvZ0VudHJ5LmFzQmxvZ0VudHJpZXMocmVzLmpzb24oKSkgfSk7XG4gICAgfVxuICAgIHNhdmVCbG9nKGJsb2c6IEJsb2dFbnRyeSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgaWYgKGJsb2cuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCcvYXBpL2Jsb2dzLycgKyBibG9nLmlkLCBibG9nLmpzb24oKSwgdGhpcy5vcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9ibG9ncycsIGJsb2cuanNvbigpLCB0aGlzLm9wdHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
