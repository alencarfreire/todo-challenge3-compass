import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";
import Button from "./index";

describe("Component: Button", () => {
  it("should render the Button component", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button-component")).toBeTruthy();
  });

  it("should render text when the text prop is provided", () => {
    const text = "Clique aqui";
    const { getByText } = render(<Button text={text} />);
    expect(getByText(text)).toBeTruthy();
  });

  it("should render children when passed", () => {
    const children = <Text>Child Element</Text>;
    const { getByText } = render(<Button>{children}</Button>);
    expect(getByText("Child Element")).toBeTruthy();
  });

  it("should trigger onPress when the button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Button onPress={onPressMock} />);
    const button = getByTestId("button-component");
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it("should render with a specific variant style", () => {
    const variant = "Authentication";
    const text = "Submit";
    const { getByText } = render(<Button text={text} variant={variant} />);
    const buttonText = getByText(text);
    expect(buttonText.props.variant).toBe(variant);
  });

  it("should render with custom padding when provided", () => {
    const padding = "16px";
    const { toJSON } = render(<Button padding={padding} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
