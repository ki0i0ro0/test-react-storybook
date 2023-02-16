import Button from "./Button";

// export defaultでmetadataを設定後その下にストーリーを記述
export default {
  title: "Button",
  component: Button,
};

export const HelloButton = () => <Button>Hello World!</Button>;
export const ClickButton = () => <Button>Click!</Button>;
