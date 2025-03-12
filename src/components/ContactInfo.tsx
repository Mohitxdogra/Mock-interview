import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <Card className="p-4 shadow-md">
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" /> support@mockready.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-500" /> +91 75085 13067
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" /> Pathankot, India
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
