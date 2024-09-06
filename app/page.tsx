import Button from "@/components/button/Button";
import OptionCard from "@/components/optionCards/OptionCard";
import OptionCards from "@/components/optionCards/OptionCards";

export const metadata = {
  title: "Beanly",
};

export default function Page() {
  return (
    <main>
      <h1>Beanly</h1>
      <Button>My Button</Button>
      <hr></hr>
      <OptionCards
        options={[
          {
            title: "Title 1",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            title: "Title 2",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            title: "Title 3",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ]}
      />
    </main>
  );
}
