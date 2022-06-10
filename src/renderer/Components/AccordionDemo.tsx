import { Accordion, AccordionHeader, AccordionItem, AccordionPanel, Text } from "@fluentui/react-components";
import { FC } from "react";

export const AccordionDemo: FC = () => {
    return (
        <Accordion multiple collapsible>
            <AccordionItem value="1">
                <AccordionHeader>Accordion Header 1</AccordionHeader>
                <AccordionPanel>
                    <Text>
                        Et quia voluptates quae quis sunt necessitatibus qui minima. Blanditiis rerum aut sequi est sed.
                        Dolorem laborum est vel officia reiciendis. Officiis velit ducimus ab nemo optio id voluptas.
                        Aut atque eius totam iure recusandae. Quia dignissimos nihil dolorum commodi est possimus.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="2">
                <AccordionHeader>Accordion Header 2</AccordionHeader>
                <AccordionPanel>
                    <Text>
                        Sint est sint sequi aspernatur architecto dolor. Autem voluptatibus omnis vitae id. Occaecati
                        nam tenetur aspernatur. Et doloribus dolore inventore provident magni ipsa et. Voluptatem
                        officia repellat aliquam ad vero doloremque.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem value="3">
                <AccordionHeader>Accordion Header 3</AccordionHeader>
                <AccordionPanel>
                    <Text>
                        Hic molestias ex consequatur neque. Iste et id consequatur ipsa dolor dolore. Animi tenetur et
                        facere facilis iusto officiis est. Iure qui dolorem et veniam. Enim sequi dolor corrupti illum
                        sunt voluptas sit culpa. Et soluta voluptatem quos.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
