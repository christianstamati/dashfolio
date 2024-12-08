import { Button } from "@/components/ui/button";

function Stack() {
  return <div>Stack</div>;
}

function Thoughts() {
  return <div>Thoughts</div>;
}

function Drops() {
  return <div>Drops</div>;
}
function Hero() {
  return (
    <div>
      <h1 className={"text-5xl font-bold"}>
        Your Ultimate Personal Online Business Hub.
      </h1>
      <p>
        The Original Dashboard-Styled Personal Website Template for Framer just
        got even better – with Dashfolio+
      </p>
      <div className={"flex gap-3"}>
        <Button>About</Button>
        <Button variant={"secondary"}>E-mail</Button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex max-w-4xl flex-col gap-16 bg-green-50 py-28">
        <Hero />
        <Drops />
        <Thoughts />
        <Stack />
      </div>
    </main>
  );
}
