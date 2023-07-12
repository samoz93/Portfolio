import { Leva } from "leva";
import { ThreeComponent } from "./3dContent.tsx";
import { WebContent } from "./WebContent.tsx";

export default function App() {
  return (
    <>
      <Leva hidden />
      <ThreeComponent />
      <WebContent />
    </>
  );
}
