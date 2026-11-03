// webapp/controller/App.controller.js
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    const AppController = Controller.extend(
        "ui5.tutorial.walkthrough.controller.App",
        {
            onShowHello() {
                alert("onShowHello() - Hello World!");
            },
        },
    );

    return AppController;
});
