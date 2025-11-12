pages/landing.tsx  import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
            <Button title="Small Button" styles="rounded-sm" />
      <Button title="Large Button" styles="rounded-lg" />
      <Button title="Full Button" styles="rounded-full" />
    </div>
  )
}

export default Landing;
