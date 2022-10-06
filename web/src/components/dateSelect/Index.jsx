import { useState } from "react";
import { addDays, format, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Icon } from "../../components/icon";

const initialDate = "2022-11-20T00:00:00Z";

export const DateSelect = () => {
  const [currentDate, setCurrentDate] = useState(new Date(initialDate));

  const prevDay = () => {
    const previousDate = subDays(currentDate, 1);
    setCurrentDate(previousDate);
  };

  const nextDay = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  return (
    <div className="p-4 flex space-x-4 items-center justify-center">
      <Icon
        name="arrowLeft"
        className="w-6 text-red-500 cursor-pointer"
        onClick={prevDay}
      />
      <span className="font-bold">
        {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
      </span>
      <div>
        <Icon
          name="arrowRight"
          className="w-6 text-red-500 cursor-pointer"
          onClick={nextDay}
        />
      </div>
    </div>
  );
};