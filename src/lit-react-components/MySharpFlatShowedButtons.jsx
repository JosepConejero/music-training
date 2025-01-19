import { createComponent } from "@lit/react";
import React from "react";
import { MyIntervalButtons as MySharpFlatShowedButtonsReact } from "../lit-elements/my-sharp-flat-showed-buttons";


export const MySharpFlatShowedButtons = createComponent({
    tagName: "my-sharp-flat-showed-buttons",
    elementClass: MySharpFlatShowedButtonsReact,
    react: React,
    events: {
        onactivate: "click",
    },
})

