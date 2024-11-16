import { createComponent } from "@lit/react";
import React from "react";
import { MyButton as MyReactButton} from "../lit-elements/my-button";


export const MyButton = createComponent({
    tagName: "my-button",
    elementClass: MyReactButton,
    react: React,
    events: {
        onactivate: "click",
    },
})

