import { render, screen } from "@testing-library/react";
import App from "./App";
import {
  PREVIEW_CC_CVC,
  PREVIEW_CC_DATE,
  PREVIEW_CC_NAME,
  PREVIEW_CC_NUMBER,
} from "./components/CardPreviewWrap";
import {
  FORM_CC_CVC,
  FORM_CC_DATE,
  FORM_CC_NAME,
  FORM_CC_NUMBER,
  FORM_CC_SUBMIT,
} from "./components/Form";
import userEvent from "@testing-library/user-event";
import * as formHandler from "./formHandler";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders with credit card preview", () => {
    expect(screen.getByText(PREVIEW_CC_NAME)).toBeInTheDocument();
    expect(screen.getByText(PREVIEW_CC_NUMBER)).toBeInTheDocument();
    expect(screen.getByText(PREVIEW_CC_CVC)).toBeInTheDocument();

    // both month and year have the same default value
    expect(screen.getAllByText(PREVIEW_CC_DATE)).toHaveLength(2);
  });

  it("renders with credit card form", () => {
    expect(screen.getByLabelText(FORM_CC_NAME)).toBeInTheDocument();
    expect(screen.getByLabelText(FORM_CC_NUMBER)).toBeInTheDocument();
    expect(screen.getByLabelText(FORM_CC_CVC)).toBeInTheDocument();

    // both month and year inputs have the same label
    expect(screen.getAllByLabelText(FORM_CC_DATE)).toHaveLength(2);

    expect(screen.getByRole("button")).toHaveTextContent(FORM_CC_SUBMIT);
  });

  it("updates preview when form values change", () => {
    const previewCcName = screen.getByText(PREVIEW_CC_NAME);
    const previewCcNumber = screen.getByText(PREVIEW_CC_NUMBER);
    const previewCcCvc = screen.getByText(PREVIEW_CC_CVC);
    const previewCcMonth = screen.getAllByText(PREVIEW_CC_DATE)[0];
    const previewCcYear = screen.getAllByText(PREVIEW_CC_DATE)[1];

    const ccName = "Fulano de Tal";
    const ccNumber = "1234 5678 9012 3456";
    const ccCvc = "789";
    const ccMonth = "10";
    const ccYear = "23";

    userEvent.type(screen.getByText(FORM_CC_NAME), ccName);
    userEvent.type(screen.getByText(FORM_CC_NUMBER), ccNumber);
    userEvent.type(screen.getByText(FORM_CC_CVC), ccCvc);
    userEvent.type(screen.getAllByText(FORM_CC_DATE)[0], ccMonth);
    userEvent.type(screen.getAllByText(FORM_CC_DATE)[1], ccYear);

    expect(previewCcName).toHaveTextContent(ccName);
    expect(previewCcNumber).toHaveTextContent(ccNumber);
    expect(previewCcCvc).toHaveTextContent(ccCvc);
    expect(previewCcMonth).toHaveTextContent(ccMonth);
    expect(previewCcYear).toHaveTextContent(ccYear);
  });

  it("submits the form", () => {
    jest.spyOn(formHandler, "submit").mockImplementation(jest.fn());

    const ccName = "Fulano de Tal";
    const ccNumber = "1234 5678 9012 3456";
    const ccCvc = "789";
    const ccMonth = "10";
    const ccYear = "23";

    userEvent.type(screen.getByText(FORM_CC_NAME), ccName);
    userEvent.type(screen.getByText(FORM_CC_NUMBER), ccNumber);
    userEvent.type(screen.getByText(FORM_CC_CVC), ccCvc);
    userEvent.type(screen.getAllByText(FORM_CC_DATE)[0], ccMonth);
    userEvent.type(screen.getAllByText(FORM_CC_DATE)[1], ccYear);

    screen.getByRole("button").click();

    expect(formHandler.submit).toHaveBeenCalledTimes(1);
    expect(formHandler.submit).toHaveBeenNthCalledWith(1, {
      ccName,
      ccNumber,
      ccCvc,
      ccMonth,
      ccYear,
    });
  });
});
