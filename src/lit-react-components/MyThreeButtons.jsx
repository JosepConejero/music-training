import { createComponent } from "@lit/react";
import React from "react";
import { MyButtons } from "../lit-elements/my-buttons";


export const MyThreeButtons = createComponent({
    tagName: "my-buttons",
    elementClass: MyButtons,
    react: React,
    events: {
        onactivate: "click",
    },
})

