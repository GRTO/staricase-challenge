import { render } from "../../../utils/test-util";
import Input from "../Input";

describe("Input", () => {
  it("should have render the input element", () => {
    const rendered = render(
      <Input name="Custom Value" value="Custom Value" testId="customId" />
    );

    expect(rendered.getByTestId("customId")).toBeDefined();
  });

  it("should have render the error element", () => {
    const error = "This is a custom Error";
    const rendered = render(
      <Input
        name="Custom Value"
        value="Custom Value"
        hasError={error}
      />
    );

    expect(rendered.getByText(error)).toBeDefined();
  });
});
