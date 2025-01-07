import { fireEvent, render } from "@testing-library/react-native";
import Input from "./index";

describe("Component: Input", () => {
  it("should render the component", () => {
    render(<Input />);
  });

  it("should render the component with placeholder prop", () => {
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

  it("should update the isFocused state on focus and blur", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Clique aqui" />
    );

    const input = getByPlaceholderText("Clique aqui");

    fireEvent(input, "focus");
    expect(input.props.isFocused).toBe(true);

    fireEvent(input, "blur");
    expect(input.props.isFocused).toBe(false);
  });

  it("should render with secureTextEntry prop", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Senha" secureTextEntry />
    );

    const input = getByPlaceholderText("Senha");
    expect(input.props.secureTextEntry).toBe(true);
  });

  it("should render with multiline prop", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite algo" multiline />
    );

    const input = getByPlaceholderText("Digite algo");
    expect(input.props.multiline).toBe(true);
  });

  it("should render without onChangeText prop", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Sem handler" />
    );

    const input = getByPlaceholderText("Sem handler");
    expect(input.props.onChangeText).toBeUndefined();
  });

  it("should match the snapshot", () => {
    const { toJSON } = render(<Input placeholder="Clique aqui" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
