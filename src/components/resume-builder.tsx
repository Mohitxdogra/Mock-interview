import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { saveAs } from "file-saver";

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  // Fix: Add type for event parameter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const resumeText = `Name: ${resumeData.name}
Email: ${resumeData.email}
Phone: ${resumeData.phone}

Summary:
${resumeData.summary}

Experience:
${resumeData.experience}

Education:
${resumeData.education}

Skills:
${resumeData.skills}`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "resume.txt");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
      <Card>
        <CardContent className="space-y-4">
          <Input name="name" placeholder="Name" onChange={handleChange} />
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input name="phone" placeholder="Phone" onChange={handleChange} />
          <Textarea name="summary" placeholder="Summary" onChange={handleChange} />
          <Textarea name="experience" placeholder="Experience" onChange={handleChange} />
          <Textarea name="education" placeholder="Education" onChange={handleChange} />
          <Textarea name="skills" placeholder="Skills" onChange={handleChange} />
          <Button onClick={handleDownload} className="w-full">Download Resume</Button>
        </CardContent>
      </Card>
    </div>
  );
}
