// Step. 3 Controls
// sap.ui.define(["sap/m/Text"], function (Text) {
//     "use strict";

//     new Text({
//         text: "Hello World",
//     }).placeAt("content");
// });

// Step. 4 XMLView
// sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
//     "use strict";

//     XMLView.create({
//         viewName: "ui5.tutorial.walkthrough.view.App",
//         id: "app",
//     }).then(function (view) {
//         view.placeAt("content");
//     });
// });

sap.ui.define(
    ["sap/ui/core/ComponentContainer"],
    function (ComponentContainer) {
        "use strict";

        new ComponentContainer({
            id: "container",
            name: "ui5.tutorial.walkthrough",
            settings: {
                id: "walkthrough",
            },
            autoPrefixId: true,
            async: true,
        }).placeAt("content");
    },
);
