import { createComponent } from "@lit/react";
import React from "react";
import { My4GenericButtons as My4GenericButtonsReact } from "../lit-elements/my-4-generic-buttons";


export const My4GenericButtons = createComponent({
    tagName: "my-4-generic-buttons",
    elementClass: My4GenericButtonsReact,
    react: React,
    events: {
        onactivate: "click",
    },
})

