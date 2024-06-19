import RatingList from "./components/RatingList";

export interface Friend {
  date: string;
  name: string;
  stats: {
    empathy: number;
    communication: number;
    respect: number;
    pastime: number;
    trust: number;
  };
}

const FRIENDS_DATA: Friend[] = [
  {
    date: "22.02.2023",
    name: "Никита",
    stats: {
      communication: 5,
      empathy: 4,
      pastime: 3,
      respect: 5,
      trust: 4,
    },
  },
  {
    date: "22.02.2023",
    name: "Вася",
    stats: {
      communication: 5,
      empathy: 4,
      pastime: 3,
      respect: 2,
      trust: 1,
    },
  },
  {
    date: "22.02.2023",
    name: "Саша",
    stats: {
      communication: 4,
      empathy: 3,
      pastime: 2,
      respect: 3,
      trust: 4,
    },
  },
  {
    date: "22.02.2023",
    name: "Коля",
    stats: {
      communication: 3,
      empathy: 4,
      pastime: 1,
      respect: 5,
      trust: 1,
    },
  },
  {
    date: "22.02.2023",
    name: "Женя",
    stats: {
      communication: 5,
      empathy: 1,
      pastime: 2,
      respect: 5,
      trust: 5,
    },
  },
  {
    date: "22.02.2023",
    name: "Кирилл",
    stats: {
      communication: 5,
      empathy: 2,
      pastime: 2,
      respect: 5,
      trust: 2,
    },
  },
  {
    date: "22.02.2023",
    name: "Дима",
    stats: {
      communication: 5,
      empathy: 2,
      pastime: 3,
      respect: 1,
      trust: 5,
    },
  },
  {
    date: "22.02.2023",
    name: "Андрей",
    stats: {
      communication: 5,
      empathy: 4,
      pastime: 5,
      respect: 3,
      trust: 2,
    },
  },
];

const RatingPage = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-semibold">Рейтинг</h1>
      <div className="w-12/12 sm:w-10/12 xl:w-8/12">
        <RatingList friends={FRIENDS_DATA} />
      </div>
    </main>
  );
};

export default RatingPage;
