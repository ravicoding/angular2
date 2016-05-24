System.register(['angular2/platform/browser', './multi.input.component', './grid/ivar-grid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, multi_input_component_1, ivar_grid_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (multi_input_component_1_1) {
                multi_input_component_1 = multi_input_component_1_1;
            },
            function (ivar_grid_1_1) {
                ivar_grid_1 = ivar_grid_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(multi_input_component_1.MultiInputComponent);
            browser_1.bootstrap(ivar_grid_1.IvarGridComponent);
        }
    }
});
//# sourceMappingURL=main.js.map