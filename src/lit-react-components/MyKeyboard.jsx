import { createComponent } from "@lit/react";
import React from "react";
import { MyKeyboard as MyKeyboardReact} from "../lit-elements/my-keyboard";


export const MyKeyboard = createComponent({
    tagName: "my-keyboard",
    elementClass: MyKeyboardReact,
    react: React,
    events: {
        onactivate: "click",
    },
})

