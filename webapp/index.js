// Step. 3 Controls
// sap.ui.define(["sap/m/Text"], function (Text) {
//     "use strict";

//     new Text({
//         text: "Hello World",
//     }).placeAt("content");
// });

sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
    "use strict";

    XMLView.create({
        viewName: "ui5.tutorial.walkthrough.view.App",
        id: "app",
    }).then(function (view) {
        view.placeAt("content");
    });
});
