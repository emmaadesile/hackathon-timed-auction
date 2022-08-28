import { Button, Section, Text } from "../components";

export function SelectRole({ deploy, attach }) {
  return (
    <Section>
      <Text fontWeight={700}>Choose an option</Text>
      <Button onClick={() => deploy()}>Create Auction</Button>
      <Button onClick={() => attach()}>Attach to existing auction</Button>
    </Section>
  );
}
