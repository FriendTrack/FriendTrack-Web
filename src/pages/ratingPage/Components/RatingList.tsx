import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  pagination?: pagination;
  className?: string;
}

const RatingList = ({ friends, pagination, className }: RatingList) => {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead>Имя</TableHead>
          <TableHead>Рейтинг</TableHead>
          <TableHead className="text-right">Последнее взаимодействие</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {friends.map((friend, index) => (
          <TableRow key={index}>
            <TableCell>{friend.name}</TableCell>
            <TableCell>{friend.rating}</TableCell>
            <TableCell className="text-right">{friend.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RatingList;
