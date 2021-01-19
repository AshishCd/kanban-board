import React from "react";
import App from "./components/App";
import { Column, Card, ActionButton } from "./components";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";
import toJson from "enzyme-to-json";

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("renders Column component without crashing", () => {
    shallow(<Column />);
  });
  it("renders Card component without crashing", () => {
    shallow(<Card />);
  });
  it("renders ActionButton component without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ActionButton />
      </Provider>
    );
  });
});

describe("snapshots", () => {
  it("App snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("ActionButton snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ActionButton />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
