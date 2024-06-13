import RatingList from "./Components/RatingList";

const RatingPage = () => {
    return (
      <main className="w-screen h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-8xl font-semibold">Рейтинг</h1>
        <div className="w-10/12 sm:w-8/12">
          <RatingList friends={[
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
            {date: "22.02.2023", name: "Никита", rating: "4.95243234"},
          ]}/>
        </div>
      </main>
    );
  };
  
  export default RatingPage;