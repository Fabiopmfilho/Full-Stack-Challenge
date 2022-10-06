export const CardMatch = ({ teamA, teamB, matchHour }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 text-center space-y-4">
      <span className="text-sm md:text-base text-gray-700 font-bold">{matchHour.time}</span>

      <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{teamA.slug}</span>
        <img src={`/images/flags/${teamA.slug}.png`} />

        <input
          type="number"
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
        />

        <span className="mx-4 text-red-500 font-bold text-lg">X</span>

        <input
          type="number"
          className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center"
        />

        <img src={`/images/flags/${teamB.slug}.png`} />
        <span className="uppercase">{teamB.slug}</span>
      </div>
    </div>
  );
};
