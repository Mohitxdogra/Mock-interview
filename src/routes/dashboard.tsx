import { Headings } from "@/components/headings"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
  return ( <>
  <div className="flex w-full items-center justify-between">
    {/* headings */}
    <Headings
    title="Dashboard"
    description="Welcome to your dashboard. Here you can view your generated feedbacks and track your progress."/>
    <Link to= {"/generate/create"}>
    <Button size={"sm"}>
        <Plus/> Add New
    </Button>
    </Link>
 
  </div>
  <Separator className="my-8"/>

     {/* content section */}
  </>
  );
};
