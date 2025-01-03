import { fireEvent, render } from "@testing-library/react-native";
import Input from "./index";

describe("Component: Input", () => {
  it("should be render component", () => {
    render(<Input />);
  });
  it("should be render component with placeholder prop", () => {
    const placeholder = "Clique aqui";
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} />
    );
    expect(getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it("should update the value when typing", () => {
    const onChangeText = jest.fn();
    const initialValue = "Inicial";
    const newValue = "Novo valor";

    const { getByDisplayValue } = render(
      <Input value={initialValue} onChangeText={onChangeText} />
    );

    const input = getByDisplayValue(initialValue);
    fireEvent.changeText(input, newValue);
    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });
});
