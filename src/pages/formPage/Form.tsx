import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const Form = () => {
  return (
    <Card className="flex flex-col w-full justify-items-center items-center">
      <CardHeader>
        <CardTitle>Name</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Label>Выберите человека</Label>
        <Select
          options={[
            { value: "1", label: "person 1" },
            { value: "2", label: "person 2" },
            { value: "3", label: "person 3" },
            { value: "4", label: "person 4" },
          ]}
        />
      </CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};

export default Form;
