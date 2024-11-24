import { createComponent } from "@lit/react";
import React from "react";
import { MyIntervalButtons as MyIntervalButtonsReact } from "../lit-elements/my-interval-buttons";


export const MyIntervalButtons = createComponent({
    tagName: "my-interval-buttons",
    elementClass: MyIntervalButtonsReact,
    react: React,
    events: {
        onactivate: "click",
    },
})

