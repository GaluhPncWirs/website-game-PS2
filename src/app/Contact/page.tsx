import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RootLayout from "@/layout/rootLayout/content";

export default function Contact() {
  function handleSubmitMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const targetValueInput = event.target as HTMLFormElement;
    console.log(targetValueInput.message.value);
  }
  return (
    <RootLayout
      titlePage="Contact Us"
      descPage="have questions or feedback? we`re here to help, fill out the form below or use one of our contact methods"
    >
      <h1 className="text-3xl font-semibold tracking-wide mb-5">Reach out</h1>
      <div className="flex items-center justify-around bg-slate-50 rounded-md border-2 border-slate-700">
        <form
          className="w-1/2 flex flex-col gap-y-3 justify-center"
          onSubmit={(e) => handleSubmitMessage(e)}
        >
          <div>
            <label htmlFor="">Fullname</label>
            <Input type="text" placeholder="jhonDoe" id="fullname" />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <Input type="email" placeholder="jhonDoe@gmail.com" id="email" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <Textarea placeholder="Write your message here..." id="message" />
          </div>
          <div>
            <Button type="submit" className="bg-blue-500 mb-2">
              Send Message
            </Button>
            <h3 className="text-sm tracking-wide">
              We typically respond within 24-48 hours
            </h3>
          </div>
        </form>
        <img src="/images/contact/mailBox.png" alt="Mail" className="w-1/3" />
      </div>
      <h1 className="text-3xl font-semibold tracking-wide my-5">
        Other methods
      </h1>
      <div className="flex gap-x-5 items-center">
        <div className="flex flex-col items-center justify-center gap-y-3 max-w-xs bg-blue-100 p-5 rounded-md">
          <img
            src="/images/contact/discord.png"
            alt="Discord"
            className="size-14"
          />
          <div>
            <h2 className="text-xl tracking-wide font-semibold">
              Join our discord
            </h2>
            <p>Connect with our community and get support in real time.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-3 max-w-xs bg-blue-100 p-5 rounded-md">
          <img
            src="/images/footer/facebook.png"
            alt="Facebook"
            className="size-14"
          />
          <div>
            <h2 className="text-xl tracking-wide font-semibold">
              Facebook Page
            </h2>
            <p>Send us a message on our facebook page for quick</p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
