import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// type CardProps = React.ComponentProps<typeof Card>;
interface Blog {
  blog: { title: string; subtitle: string; content: string; id: number };
}

export function Cards({ blog }: Blog) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{blog?.title || "--"}</CardTitle>
        <CardDescription>{blog?.subtitle || "--"}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">{blog?.content || "--"}</CardContent>
      <CardFooter>
        <Button className="w-full ">
          <Link
            href={`/blogs/${blog.id}`}
            className="w-full flex justify-center items-center"
          >
            <Check className="mr-2 h-4 w-4" /> Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
