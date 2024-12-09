import { createComponent } from "@lit/react";
import React from "react";
import { MyIntervalButtons2 as MyIntervalButtonsReact2 } from "../lit-elements/my-interval-buttons2";


export const MyIntervalButtons2 = createComponent({
    tagName: "my-interval-buttons2",
    elementClass: MyIntervalButtonsReact2,
    react: React,
    events: {
        onactivate: "click",
    },
})

