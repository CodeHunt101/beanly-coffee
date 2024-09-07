import Accordion from "@/components/accordion/Accordion";
import AccordionItem from "@/components/accordion/AccordionItem";
import Button from "@/components/button/Button";
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

      <Accordion>
        <AccordionItem title="Section 1">
          <OptionCards
            options={[
              {
                title: "Title 1",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Title 2",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Title 3",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ]}
          />
        </AccordionItem>
        <AccordionItem title="Section 2" disabled>
          <OptionCards
            options={[
              {
                title: "Title 4",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Title 5",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Title 6",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ]}
          />
        </AccordionItem>
      </Accordion>
    </main>
  );
}
