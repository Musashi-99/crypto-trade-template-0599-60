import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
	return (
		<div className="min-h-screen bg-black text-foreground">
			<Navigation />
			
			<main className="relative flex w-full items-center justify-center p-4 pt-32 pb-20">
				<div className="mx-auto max-w-5xl w-full">
					<ContactCard
						title="Get in touch"
						description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
						contactInfo={[
							{
								icon: MailIcon,
								label: 'Email',
								value: 'contact@orbito.dev',
							},
							{
								icon: PhoneIcon,
								label: 'Phone',
								value: '+1 (555) 123-4567',
							},
							{
								icon: MapPinIcon,
								label: 'Address',
								value: 'Global Remote Team',
								className: 'col-span-2',
							}
						]}
					>
						<form className="w-full space-y-4">
							<div className="flex flex-col gap-2">
								<Label>Name</Label>
								<Input type="text" placeholder="Your full name" />
							</div>
							<div className="flex flex-col gap-2">
								<Label>Email</Label>
								<Input type="email" placeholder="your@email.com" />
							</div>
							<div className="flex flex-col gap-2">
								<Label>Phone</Label>
								<Input type="tel" placeholder="+1 (555) 123-4567" />
							</div>
							<div className="flex flex-col gap-2">
								<Label>Message</Label>
								<Textarea placeholder="Tell us about your project..." />
							</div>
							<Button className="w-full button-gradient" type="button">
								Send Message
							</Button>
						</form>
					</ContactCard>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Contact;