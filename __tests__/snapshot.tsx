/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Page from "@/app/page";
import { Path } from "@/app/_utils/types";
import About from "@/app/about/page";
import CreatePlan from "@/app/create-plan/page";

it(`renders ${Path.HOME} page unchanged`, () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});

it(`renders ${Path.ABOUT} page unchanged`, () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});

it(`renders ${Path.CREATE_PLAN} page unchanged`, () => {
  const { container } = render(<CreatePlan />);
  expect(container).toMatchSnapshot();
});
