import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Interview } from "@/types";

import { CustomBreadCrumb } from "./custom-bread-crumb";
import { Description } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Headings } from "./headings";
import { useNavigate } from "react-router-dom"; // Added missing import
import { Button } from "./ui/button";
import { Trash, Trash2 } from "lucide-react";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, { message: "Position is required" })
    .max(100, "Position must not exceed 100 characters"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce.number().min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech Stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  });

  const { isValid, isSubmitted } = form.formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Corrected variable name
  const { userId } = useAuth();

  const title = initialData?.position
    ? initialData?.position
    : "Create a new Mock Interview";

  const breadcrumbPage = initialData?.position ? initialData?.position : "Create";
  const toastMessage = initialData
    ? { title: "Updated!", description: "Changes have been saved." }
    : { title: "Created!", description: "New Mock Interview has been created." };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      // Add your form submission logic here

    } catch (error) {
      console.error(error);
      toast.error("Error...", {
        description: "Something went wrong. Please try again later", // Corrected key
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack,
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrumb
        breadCrumbPage="Mock Interview"
        breadCrumpItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />

      <div className="mt-4 flex items-center justify-between"></div>
      <Headings title={title} isSubHeading />
      {initialData && (
    <Button>
        <Trash2 className="w-5 h-5 mr-2" />    
    }
    </div>
  );
};
