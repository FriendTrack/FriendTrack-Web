import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Friend } from "../RatingPage";
import FriendAnalyticDialog from "./FriendAnalyticDialog";
import ListElementAvatar from "./ListElementAvatar";

interface Pagination {
  current: string;
  count: string;
  size: string;
}

interface RatingList {
  friends: Friend[];
  pagination?: Pagination;
  className?: string;
}

const RatingList = ({ friends, className }: RatingList) => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FriendAnalyticDialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        friend={selectedFriend}
      />
      <Table className={className}>
        <TableHeader>
          <TableRow>
            <TableHead>Имя</TableHead>
            <TableHead>Рейтинг</TableHead>
            <TableHead className="text-right">
              Последнее взаимодействие
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {friends.map((friend, index) => (
            <TableRow
              key={index}
              onClick={() => {
                setIsOpen(true);
                setSelectedFriend(friend);
              }}
            >
              <TableCell className="flex gap-5 items-center">
                <ListElementAvatar name={friend.name} src={friend.avatar} />
                {friend.name}
              </TableCell>
              <TableCell>
                {(friend.stats.communication +
                  friend.stats.empathy +
                  friend.stats.pastime +
                  friend.stats.respect +
                  friend.stats.trust) /
                  5}
              </TableCell>
              <TableCell className="text-right">{friend.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default RatingList;
