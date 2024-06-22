import { useState } from "react";

const usePathname = () => {
  const [page, setPage] = useState("/");

  return { page, setPage };
};

export default usePathname;
