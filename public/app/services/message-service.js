System.register(["angular2/core", '../bootstrap/alert/alert-message'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, alert_message_1;
    var MessageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alert_message_1_1) {
                alert_message_1 = alert_message_1_1;
            }],
        execute: function() {
            MessageService = (function () {
                function MessageService() {
                    this.messages = [];
                }
                MessageService.prototype.add = function (message) {
                    this.messages.push(new alert_message_1.AlertMessage(message));
                };
                MessageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MessageService);
                return MessageService;
            })();
            exports_1("MessageService", MessageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21lc3NhZ2Utc2VydmljZS50cyJdLCJuYW1lcyI6WyJNZXNzYWdlU2VydmljZSIsIk1lc3NhZ2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTWVzc2FnZVNlcnZpY2UuYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFLSUE7b0JBQ0lDLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBRURELDRCQUFHQSxHQUFIQSxVQUFJQSxPQUFlQTtvQkFDZkUsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsNEJBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO2dCQUNsREEsQ0FBQ0E7Z0JBWExGO29CQUFDQSxpQkFBVUEsRUFBRUE7O21DQVlaQTtnQkFBREEscUJBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELDJDQVlDLENBQUEiLCJmaWxlIjoic2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtBbGVydE1lc3NhZ2V9IGZyb20gJy4uL2Jvb3RzdHJhcC9hbGVydC9hbGVydC1tZXNzYWdlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG5cbiAgICBtZXNzYWdlczogQWxlcnRNZXNzYWdlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5ldyBBbGVydE1lc3NhZ2UobWVzc2FnZSkpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
