import { createComponent } from "@lit/react";
import React from "react";
import { MyEasyIntervalsConfigurationModal as MyReactEasyIntervalsConfigurationModal } from "../lit-elements/my-easy-intervals-configuration-modal";

export const MyEasyIntervalsConfigurationModal = createComponent({
  tagName: "my-easy-intervals-configuration-modal",
  elementClass: MyReactEasyIntervalsConfigurationModal,
  react: React,
  events: {
    onactivate: "click",
  },
});
