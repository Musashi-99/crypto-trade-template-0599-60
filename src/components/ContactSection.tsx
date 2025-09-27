import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
            Get in{" "}
            <span className="text-gradient font-medium">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss your vision and bring it to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-xl border-white/10 overflow-hidden"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-2 p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Contact With Us
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl">
                If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400 text-sm">orbitohq@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-400 text-sm">+92 312 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 md:col-span-2 lg:col-span-1">
                  <div className="bg-white/10 rounded-lg p-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400 text-sm">Remote Global Team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border-t border-white/10 md:border-t-0 md:border-l p-6">
              <form className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Name</Label>
                  <Input 
                    type="text" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Email</Label>
                  <Input 
                    type="email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Phone</Label>
                  <Input 
                    type="tel" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Message</Label>
                  <Textarea 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full button-gradient" type="button">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;