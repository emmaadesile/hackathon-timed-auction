import { Section } from "../components";
import "../index.css";

export function Loader() {
  return (
    <Section>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Section>
  );
}
