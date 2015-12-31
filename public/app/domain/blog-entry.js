System.register([], function(exports_1) {
    var BlogEntry;
    return {
        setters:[],
        execute: function() {
            BlogEntry = (function () {
                function BlogEntry(title, contentRendered, contentMarkdown, id) {
                    this.title = title;
                    this.contentRendered = contentRendered;
                    this.contentMarkdown = contentMarkdown;
                    if (id) {
                        this.id = id;
                    }
                }
                BlogEntry.prototype.json = function () {
                    return JSON.stringify(this);
                };
                BlogEntry.asBlogEntries = function (jsonArray) {
                    return jsonArray.map(function (datum) { return BlogEntry.asBlogEntry(datum); });
                };
                BlogEntry.asBlogEntry = function (json) {
                    var id = json['id'];
                    var title = json['title'];
                    var contentRendered = json['contentRendered'];
                    var contentMarkdown = json['contentMarkdown'];
                    return new BlogEntry(title, contentRendered, contentMarkdown, id);
                };
                return BlogEntry;
            })();
            exports_1("BlogEntry", BlogEntry);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9ibG9nLWVudHJ5LnRzIl0sIm5hbWVzIjpbIkJsb2dFbnRyeSIsIkJsb2dFbnRyeS5jb25zdHJ1Y3RvciIsIkJsb2dFbnRyeS5qc29uIiwiQmxvZ0VudHJ5LmFzQmxvZ0VudHJpZXMiLCJCbG9nRW50cnkuYXNCbG9nRW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBTUlBLG1CQUFZQSxLQUFZQSxFQUFFQSxlQUFzQkEsRUFBRUEsZUFBc0JBLEVBQUVBLEVBQVNBO29CQUMvRUMsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ25CQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxlQUFlQSxDQUFDQTtvQkFDdkNBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLGVBQWVBLENBQUNBO29CQUN2Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ0xBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEVBQUVBLENBQUNBO29CQUNqQkEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVERCx3QkFBSUEsR0FBSkE7b0JBQ0lFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBRU1GLHVCQUFhQSxHQUFwQkEsVUFBcUJBLFNBQXVCQTtvQkFDeENHLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUNBLEtBQUtBLElBQUtBLE9BQUFBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLEVBQTVCQSxDQUE0QkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxDQUFDQTtnQkFFTUgscUJBQVdBLEdBQWxCQSxVQUFtQkEsSUFBUUE7b0JBQ3ZCSSxJQUFJQSxFQUFFQSxHQUFVQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDM0JBLElBQUlBLEtBQUtBLEdBQVVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUNqQ0EsSUFBSUEsZUFBZUEsR0FBVUEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtvQkFDckRBLElBQUlBLGVBQWVBLEdBQVVBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7b0JBRXJEQSxNQUFNQSxDQUFDQSxJQUFJQSxTQUFTQSxDQUFDQSxLQUFLQSxFQUFFQSxlQUFlQSxFQUFFQSxlQUFlQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFFdEVBLENBQUNBO2dCQUNMSixnQkFBQ0E7WUFBREEsQ0FoQ0EsQUFnQ0NBLElBQUE7WUFoQ0QsaUNBZ0NDLENBQUEiLCJmaWxlIjoiZG9tYWluL2Jsb2ctZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmxvZ0VudHJ5IHtcbiAgICBpZDpudW1iZXI7XG4gICAgdGl0bGU6c3RyaW5nO1xuICAgIGNvbnRlbnRSZW5kZXJlZDpzdHJpbmc7XG4gICAgY29udGVudE1hcmtkb3duOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOnN0cmluZywgY29udGVudFJlbmRlcmVkOnN0cmluZywgY29udGVudE1hcmtkb3duOnN0cmluZywgaWQ6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb250ZW50UmVuZGVyZWQgPSBjb250ZW50UmVuZGVyZWQ7XG4gICAgICAgIHRoaXMuY29udGVudE1hcmtkb3duID0gY29udGVudE1hcmtkb3duO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGpzb24oKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXNCbG9nRW50cmllcyhqc29uQXJyYXk6QXJyYXk8T2JqZWN0Pikge1xuICAgICAgICByZXR1cm4ganNvbkFycmF5Lm1hcCgoZGF0dW0pID0+IEJsb2dFbnRyeS5hc0Jsb2dFbnRyeShkYXR1bSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc0Jsb2dFbnRyeShqc29uOmFueSkge1xuICAgICAgICB2YXIgaWQ6bnVtYmVyID0ganNvblsnaWQnXTtcbiAgICAgICAgdmFyIHRpdGxlOnN0cmluZyA9IGpzb25bJ3RpdGxlJ107XG4gICAgICAgIHZhciBjb250ZW50UmVuZGVyZWQ6c3RyaW5nID0ganNvblsnY29udGVudFJlbmRlcmVkJ107XG4gICAgICAgIHZhciBjb250ZW50TWFya2Rvd246c3RyaW5nID0ganNvblsnY29udGVudE1hcmtkb3duJ107XG5cbiAgICAgICAgcmV0dXJuIG5ldyBCbG9nRW50cnkodGl0bGUsIGNvbnRlbnRSZW5kZXJlZCwgY29udGVudE1hcmtkb3duLCBpZCk7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
