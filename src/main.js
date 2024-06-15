'use strict';

import {CoreModule} from "@jamilservices/sb-core-module";
import "@styles/canvas.scss";
import {comeSoonPage} from "@components/come-soon/main.js";

document.addEventListener("DOMContentLoaded", () => {
    if(CoreModule && CoreModule.version.split(".")[0] >= 1) {
        const canvasContainerStruct = {
            "element": "section",
            "attr": {
                "class": "canvas-container"
            },
            "children": [
                comeSoonPage
            ]
        };
        CoreModule.createFromStruct({
            parent: window.document.body,
            struct: canvasContainerStruct
        });
    }
});