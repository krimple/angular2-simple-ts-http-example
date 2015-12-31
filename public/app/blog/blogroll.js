System.register(['angular2/core', 'angular2/common', "angular2/router", '../services/blog-service', "../services/markdown-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, blog_service_1, markdown_service_1;
    var BlogRoll;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            },
            function (markdown_service_1_1) {
                markdown_service_1 = markdown_service_1_1;
            }],
        execute: function() {
            BlogRoll = (function () {
                function BlogRoll(blogService, markdownService, router) {
                    this.blogService = blogService;
                    this.markdownService = markdownService;
                    this.loadBlogEntries();
                }
                BlogRoll.prototype.loadBlogEntries = function () {
                    var _this = this;
                    this.blogService.getBlogs().subscribe(function (data) {
                        console.log('data is', data);
                        _this.blogs = data;
                    }, function (error) {
                        console.log('error!', error);
                    });
                };
                BlogRoll.prototype.render = function (blog) {
                    var _this = this;
                    if (blog.contentMarkdown) {
                        blog.contentRendered = this.markdownService.toHtml(blog.contentMarkdown);
                        this.blogService
                            .saveBlog(blog)
                            .subscribe(function () { return _this.message = "update complete"; }, function (error) { console.log(error); });
                    }
                };
                BlogRoll.prototype.editBlogEntry = function (blog) {
                    var _this = this;
                    console.log('saving', blog);
                    this.blogService.saveBlog(blog)
                        .subscribe(function (res) {
                        _this.router.navigate(['BlogEditorById', { id: blog.id }]);
                    }, function (error) {
                        console.log('error saving!', error);
                    });
                };
                BlogRoll.prototype.clearMessage = function () {
                    this.message = undefined;
                };
                BlogRoll = __decorate([
                    core_1.Component({
                        bindings: [blog_service_1.BlogService, markdown_service_1.MarkdownService],
                        template: "\n\n    <div class=\"pure-g\" *ngIf=\"message\">\n        <div class=\"pure-u-5-24\"></div>\n        <div class=\"pure-u-10-24\">\n          <span (click)=\"clearMessage()\">[clear]</span> - {{ message }}\n        </div>\n    </div>\n    <div class=\"pure-g\" *ngFor=\"#blog of blogs\">\n           <div class=\"pure-u-1-24\"></div>\n           <div class=\"pure-u-22-24\" >\n               <h3>{{ blog.title }}</h3>\n               <hr/>\n                <div class=\"pure-g\">\n                    <div class=\"pure-u-11-24\">\n                    <h4 (click)=\"editBlogEntry(blog)\">Live Preview - Click to open editor...</h4>\n                    <div style=\"width: 100%; height: 5em%;\"\n                         [innerHtml]=\"blog.contentRendered\"></div>\n                </div>\n                <div class=\"pure-u-11-24\">\n                    <h4>Inline Editor</h4>\n                    <textarea style=\"width: 100%; height: 5em;\" #markdown\n                    (change)=\"render(blog)\"\n                    [(ngModel)]=\"blog.contentMarkdown\"></textarea>\n                </div>\n           <div class=\"pure-u-1-24\"></div>\n    </div>\n        ",
                        selector: 'blog-roll',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService, markdown_service_1.MarkdownService, router_1.Router])
                ], BlogRoll);
                return BlogRoll;
            })();
            exports_1("BlogRoll", BlogRoll);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cvYmxvZ3JvbGwudHMiXSwibmFtZXMiOlsiQmxvZ1JvbGwiLCJCbG9nUm9sbC5jb25zdHJ1Y3RvciIsIkJsb2dSb2xsLmxvYWRCbG9nRW50cmllcyIsIkJsb2dSb2xsLnJlbmRlciIsIkJsb2dSb2xsLmVkaXRCbG9nRW50cnkiLCJCbG9nUm9sbC5jbGVhck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQXdDSUEsa0JBQVlBLFdBQXVCQSxFQUN2QkEsZUFBK0JBLEVBQy9CQSxNQUFhQTtvQkFDckJDLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBO29CQUMvQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsZUFBZUEsQ0FBQ0E7b0JBQ3ZDQSxJQUFJQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQUVERCxrQ0FBZUEsR0FBZkE7b0JBQUFFLGlCQVVDQTtvQkFUR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FDakNBLFVBQUNBLElBQXFCQTt3QkFDbEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO3dCQUM3QkEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3RCQSxDQUFDQSxFQUNEQSxVQUFDQSxLQUFZQTt3QkFDVEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsUUFBUUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQSxDQUNKQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURGLHlCQUFNQSxHQUFOQSxVQUFPQSxJQUFjQTtvQkFBckJHLGlCQVVDQTtvQkFUR0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3ZCQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTt3QkFDekVBLElBQUlBLENBQUNBLFdBQVdBOzZCQUNYQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTs2QkFDZEEsU0FBU0EsQ0FDTkEsY0FBTUEsT0FBQUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsaUJBQWlCQSxFQUFoQ0EsQ0FBZ0NBLEVBQ3RDQSxVQUFDQSxLQUFLQSxJQUFPQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUNyQ0EsQ0FBQ0E7b0JBQ1ZBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREgsZ0NBQWFBLEdBQWJBLFVBQWNBLElBQWNBO29CQUE1QkksaUJBV0NBO29CQVZHQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDNUJBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBO3lCQUMxQkEsU0FBU0EsQ0FDTkEsVUFBQ0EsR0FBWUE7d0JBQ1RBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLGdCQUFnQkEsRUFBRUEsRUFBQ0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzVEQSxDQUFDQSxFQUNEQSxVQUFDQSxLQUFZQTt3QkFDVEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hDQSxDQUFDQSxDQUNKQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7Z0JBRURKLCtCQUFZQSxHQUFaQTtvQkFDSUssSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkF2RkxMO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLENBQUNBLDBCQUFXQSxFQUFFQSxrQ0FBZUEsQ0FBQ0E7d0JBQ3hDQSxRQUFRQSxFQUFFQSw0b0NBMkJMQTt3QkFDTEEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxVQUFVQSxFQUFFQSxDQUFDQSx3QkFBZUEsQ0FBQ0E7cUJBQ2hDQSxDQUFDQTs7NkJBd0REQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0F4RkEsQUF3RkNBLElBQUE7WUF4RkQsK0JBd0ZDLENBQUEiLCJmaWxlIjoiYmxvZy9ibG9ncm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge0Jsb2dFbnRyeX0gZnJvbSAnLi4vZG9tYWluL2Jsb2ctZW50cnkudHMnO1xuaW1wb3J0IHtCbG9nU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvYmxvZy1zZXJ2aWNlJztcbmltcG9ydCB7TWFya2Rvd25TZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvbWFya2Rvd24tc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczogW0Jsb2dTZXJ2aWNlLCBNYXJrZG93blNlcnZpY2VdLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICA8ZGl2IGNsYXNzPVwicHVyZS1nXCIgKm5nSWY9XCJtZXNzYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwdXJlLXUtNS0yNFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVyZS11LTEwLTI0XCI+XG4gICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImNsZWFyTWVzc2FnZSgpXCI+W2NsZWFyXTwvc3Bhbj4gLSB7eyBtZXNzYWdlIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwdXJlLWdcIiAqbmdGb3I9XCIjYmxvZyBvZiBibG9nc1wiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVyZS11LTEtMjRcIj48L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1cmUtdS0yMi0yNFwiID5cbiAgICAgICAgICAgICAgIDxoMz57eyBibG9nLnRpdGxlIH19PC9oMz5cbiAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1cmUtZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVyZS11LTExLTI0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCAoY2xpY2spPVwiZWRpdEJsb2dFbnRyeShibG9nKVwiPkxpdmUgUHJldmlldyAtIENsaWNrIHRvIG9wZW4gZWRpdG9yLi4uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDVlbSU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIdG1sXT1cImJsb2cuY29udGVudFJlbmRlcmVkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1cmUtdS0xMS0yNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+SW5saW5lIEVkaXRvcjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDVlbTtcIiAjbWFya2Rvd25cbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJyZW5kZXIoYmxvZylcIlxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImJsb2cuY29udGVudE1hcmtkb3duXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1cmUtdS0xLTI0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgc2VsZWN0b3I6ICdibG9nLXJvbGwnLFxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEJsb2dSb2xsIHtcbiAgICBibG9nczpBcnJheTxCbG9nRW50cnk+O1xuICAgIGJsb2dTZXJ2aWNlOkJsb2dTZXJ2aWNlO1xuICAgIHJvdXRlcjpSb3V0ZXI7XG4gICAgbWVzc2FnZTpzdHJpbmc7XG4gICAgbWFya2Rvd25TZXJ2aWNlOk1hcmtkb3duU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGJsb2dTZXJ2aWNlOkJsb2dTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIG1hcmtkb3duU2VydmljZTpNYXJrZG93blNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlID0gYmxvZ1NlcnZpY2U7XG4gICAgICAgIHRoaXMubWFya2Rvd25TZXJ2aWNlID0gbWFya2Rvd25TZXJ2aWNlO1xuICAgICAgICB0aGlzLmxvYWRCbG9nRW50cmllcygpO1xuICAgIH1cblxuICAgIGxvYWRCbG9nRW50cmllcygpIHtcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5nZXRCbG9ncygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhOkFycmF5PEJsb2dFbnRyeT4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBpcycsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmxvZ3MgPSBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcjpPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IhJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcihibG9nOkJsb2dFbnRyeSkge1xuICAgICAgICBpZiAoYmxvZy5jb250ZW50TWFya2Rvd24pIHtcbiAgICAgICAgICAgIGJsb2cuY29udGVudFJlbmRlcmVkID0gdGhpcy5tYXJrZG93blNlcnZpY2UudG9IdG1sKGJsb2cuY29udGVudE1hcmtkb3duKTtcbiAgICAgICAgICAgIHRoaXMuYmxvZ1NlcnZpY2VcbiAgICAgICAgICAgICAgICAuc2F2ZUJsb2coYmxvZylcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLm1lc3NhZ2UgPSBcInVwZGF0ZSBjb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkaXRCbG9nRW50cnkoYmxvZzpCbG9nRW50cnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmluZycsIGJsb2cpO1xuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLnNhdmVCbG9nKGJsb2cpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXM6UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydCbG9nRWRpdG9yQnlJZCcsIHtpZDogYmxvZy5pZH1dKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcjpPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHNhdmluZyEnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjbGVhck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
