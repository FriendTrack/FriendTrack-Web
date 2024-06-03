import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

const FormForm: React.FC<{ className?: string }> = () => {
    const [inputs, setInputs] = React.useState<string[]>([""]);
  
    const handleAddInput = () => {
      setInputs([...inputs, ""]);
    };
  
    const handleInputChange = (index: number, value: string) => {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
    };
  
    return (
      <CardContent>
        <Label>Ваше настроение сегодня:</Label>
        <Select
          options={[
            { value: "good", label: "Хорошее" },
            { value: "neutral", label: "Нейтральное" },
            { value: "bad", label: "Плохое" },
          ]}
        />
        <CardHeader>
          <CardTitle>С кем вы сегодня общались</CardTitle>
        </CardHeader>
        <CardDescription style={{ fontSize: "18px" }}>
          Постарайтесь вводить имена в том порядке, в котором вспоминаете их. Скорее всего запомнившиеся люди внесли
          больший вклад в ваше настроение сегодня.
        </CardDescription>
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        {inputs.map((value, index) => (
          <Input
            key={index}
            style={{ marginTop: index === 0 ? "25px" : "15px" }}
            placeholder="Имя"
            name="name"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
        </div>
  
        <Button className="w-full md:w-auto" onClick={handleAddInput} style={{ width: "100%", backgroundColor: "gray", marginTop: "20px" }}>
          Добавить
        </Button>
  
        <Button className="w-full md:w-auto" style={{ marginTop: "25px" }}>
          Готово
        </Button>
      </CardContent>
    );
};

export default FormForm;