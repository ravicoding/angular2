/**
 * Created by narer on 5/19/2016.
 */
System.register(['angular2/core', './ivar-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ivar_service_1;
    var IvarGridComponent, Column;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ivar_service_1_1) {
                ivar_service_1 = ivar_service_1_1;
            }],
        execute: function() {
            IvarGridComponent = (function () {
                function IvarGridComponent() {
                    this.rows = [];
                    this.cols = [];
                    this.mockTableService = new ivar_service_1.MockTableService();
                    this.cols.push(new Column('id', 'ID', 150));
                    this.cols.push(new Column('name', 'Name', 300));
                    this.cols.push(new Column('data', 'Data', 400));
                    this.rows = this.mockTableService.generateMockData();
                }
                IvarGridComponent = __decorate([
                    core_1.Component({
                        selector: 'ivar-grid',
                        templateUrl: 'app/grid/grid.tpl.html',
                        styles: ["\n    .ivar-grid-css {\n      margin:20px;\n      width:800px;\n      height:500px;\n    }\n    table {\n        border : 1px solid #ddd;\n     }\n     th{\n     height: 35px;\n     background-color: #b1b1b1;\n     padding-left: 10px;\n     }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], IvarGridComponent);
                return IvarGridComponent;
            }());
            exports_1("IvarGridComponent", IvarGridComponent);
            Column = (function () {
                function Column(id, name, width) {
                    this.id = id;
                    this.name = name;
                    this.width = width;
                }
                return Column;
            }());
        }
    }
});
//# sourceMappingURL=ivar-grid.js.map