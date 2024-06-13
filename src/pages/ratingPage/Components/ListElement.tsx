import {
    Card,
    CardContent,
    CardDescription
  } from "@/components/ui/card";

import { Label } from "@radix-ui/react-label";

const ListElement = (props) => {
    return (
        <Card style={{borderRadius:"0px"}}>
          <CardContent className="justify-between" style={{ display: "flex", flexDirection: "row", padding:"20px", textAlign:"center" }}>
            <Label style={{ flex: "30%" }}>{props.date}</Label>
            <Label style={{ flex: "50%" }}>{props.name}</Label>
            <Label style={{ flex: "20%" }}>{props.rating}</Label>
          </CardContent>
        </Card>
    );
  };
  
  export default ListElement;