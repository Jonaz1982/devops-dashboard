import MyButton from "./components/MyButton.vue";

export default {
  install(app) {
    app.component("MyButton", MyButton);
  },
};

export { MyButton };
