import { createComponent } from "@lit/react";
import React from "react";
import { MyIntervals as MyIntervalsReact} from "../lit-elements/my-intervals";


export const MyIntervals = createComponent({
    tagName: "my-intervals",
    elementClass: MyIntervalsReact,
    react: React,
    events: {
        onactivate: "click",
    },
})

