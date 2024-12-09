import { createComponent } from "@lit/react";
import React from "react";
import { MyStaff as MyReactStaff} from "../lit-elements/my-staff";


export const MyStaff = createComponent({
    tagName: "my-staff",
    elementClass: MyReactStaff,
    react: React,
    events: {
        onactivate: "click",
    },
})

