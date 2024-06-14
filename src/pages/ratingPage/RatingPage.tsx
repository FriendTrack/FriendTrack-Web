import RatingList from "./Components/RatingList";

const RatingPage = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-semibold">Рейтинг</h1>
      <div className="w-12/12 sm:w-10/12 xl:w-8/12">
        <RatingList
          friends={[
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
            { date: "22.02.2023", name: "Никита", rating: "4.95243234" },
          ]}
        />
      </div>
    </main>
  );
};

export default RatingPage;
