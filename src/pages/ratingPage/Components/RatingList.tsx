import ListElement from "./ListElement";

import {
  Card,
  CardContent
} from "@/components/ui/card";

import { Label } from "@radix-ui/react-label";

import order from "/assets/changeOrder.svg";

interface friend {
  date: string;
  name: string;
  rating: string;
}

interface pagination {
  current: string;
  count: string;
  size: string;
}

interface RatingList {
  friends: friend[];
  pagination: pagination;
}


const RatingList: React.FC<RatingList> = (list) => {
    return (
      <Card style={{paddingTop:"20px", paddingBottom:"20px"}}>
          <CardContent className="justify-between" style={{ display: "flex", flexDirection: "row", color:"gray", padding:"10px", textAlign:"center" }}>
            <div style={{ flex: "30%" }}><Label>Последнее взаимодействие </Label><button><img src={order} style={{position:"relative", top:"5px"}}></img></button></div>
            <div style={{ flex: "50%" }}><Label>Имя </Label><button><img src={order} style={{position:"relative", top:"5px"}}></img></button></div>
            <div style={{ flex: "20%" }}><Label>Рейтинг </Label><button><img src={order} style={{position:"relative", top:"5px"}}></img></button></div>
          </CardContent>
          {list.friends.map((friend) => (
              <ListElement date={friend.date} name={friend.name} rating={friend.rating}/>
            ))
          }
      </Card>
    );
  };
  
  export default RatingList;