import { createComponent } from "@lit/react";
import React from "react";
import { MyModal1 as MyReactModal1 } from "../lit-elements/my-modal-1";

export const MyModal1 = createComponent({
  tagName: "my-modal-1",
  elementClass: MyReactModal1,
  react: React,
  events: {
    onactivate: "click",
  },
});
