import { createComponent } from "@lit/react";
import React from "react";
import { MyEasyIntervalsButtons as MyEasyIntervalsButtonsReact } from "../lit-elements/my-easy-intervals-buttons";


export const MyEasyIntervalsButtons = createComponent({
    tagName: "my-easy-intervals-buttons",
    elementClass: MyEasyIntervalsButtonsReact,
    react: React,
    events: {
        onactivate: "click",
    },
})

