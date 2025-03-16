import { createComponent } from "@lit/react";
import React from "react";
import { MyModal0 as MyReactModal0 } from "../lit-elements/my-modal-0";

export const MyModal0 = createComponent({
  tagName: "my-modal-0",
  elementClass: MyReactModal0,
  react: React,
  events: {
    onactivate: "click",
  },
});
