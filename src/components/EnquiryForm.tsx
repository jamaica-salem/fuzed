import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface EnquiryFormProps {
  productName?: string;
}

export default function EnquiryForm({ productName }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName ? `I'd like to enquire about the ${productName}.` : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-1 block">
            Full Name *
          </label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-1 block">
            Email *
          </label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-1 block">
          Phone
        </label>
        <Input
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="04XX XXX XXX"
        />
      </div>
      <div>
        <label className="text-sm font-heading font-semibold uppercase tracking-wider text-foreground mb-1 block">
          Message *
        </label>
        <Textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we help?"
        />
      </div>
      <Button type="submit" size="lg" className="w-full md:w-auto">
        Submit Enquiry
      </Button>
    </form>
  );
}
