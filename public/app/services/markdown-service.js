System.register(['angular2/core', "marked"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, marked;
    var MarkdownService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (marked_1) {
                marked = marked_1;
            }],
        execute: function() {
            // todo - use module form of Markdown Converter library
            MarkdownService = (function () {
                function MarkdownService() {
                }
                // markdown object is not typescript
                MarkdownService.prototype.toHtml = function (text) {
                    return marked.parse(text);
                };
                MarkdownService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MarkdownService);
                return MarkdownService;
            })();
            exports_1("MarkdownService", MarkdownService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21hcmtkb3duLXNlcnZpY2UudHMiXSwibmFtZXMiOlsiTWFya2Rvd25TZXJ2aWNlIiwiTWFya2Rvd25TZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTWFya2Rvd25TZXJ2aWNlLnRvSHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsdURBQXVEO1lBRXZEO2dCQUFBQTtnQkFPQUMsQ0FBQ0E7Z0JBTEdELG9DQUFvQ0E7Z0JBRXBDQSxnQ0FBTUEsR0FBTkEsVUFBT0EsSUFBWUE7b0JBQ2ZFLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBTkxGO29CQUFDQSxpQkFBVUEsRUFBRUE7O29DQU9aQTtnQkFBREEsc0JBQUNBO1lBQURBLENBUEEsQUFPQ0EsSUFBQTtZQVBELDZDQU9DLENBQUEiLCJmaWxlIjoic2VydmljZXMvbWFya2Rvd24tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCAqIGFzIG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XG5cbi8vIHRvZG8gLSB1c2UgbW9kdWxlIGZvcm0gb2YgTWFya2Rvd24gQ29udmVydGVyIGxpYnJhcnlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duU2VydmljZSB7XG4gICAgLy8gbWFya2Rvd24gb2JqZWN0IGlzIG5vdCB0eXBlc2NyaXB0XG5cbiAgICB0b0h0bWwodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBtYXJrZWQucGFyc2UodGV4dCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
