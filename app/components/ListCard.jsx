import Link from "next/link";

const ListCard = ({ listCards }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-9 ">
      {listCards.map((card) => (
        <div
          className="bg-[#1F1D2B] p-4 rounded-lg shadow-md flex items-center"
          key={card.id}
        >
         
          <div>
            <Link
              className="text-white text-lg font-semibold cursor-pointer"
              href="/programmer"
            >
              {card.title}
            </Link>
            <p className="text-white">{card.text}</p>
            <div className="flex gap-2 items-center text-blue-500">
              {card.program.map((tool) => (
                <div key={tool}> {tool} </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
