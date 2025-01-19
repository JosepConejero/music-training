import { createComponent } from "@lit/react";
import React from "react";
import { MyIntervalButtons3 as MyIntervalButtonsReact3 } from "../lit-elements/my-interval-buttons3";


export const MyIntervalButtons3 = createComponent({
    tagName: "my-interval-buttons3",
    elementClass: MyIntervalButtonsReact3,
    react: React,
    events: {
        onactivate: "click",
    },
})

