import React from "react";
import Login from "./Login";
import renderer from "react-test-renderer";

test('first snapshot test',() => {
    const component = renderer.create(
      <Login/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })