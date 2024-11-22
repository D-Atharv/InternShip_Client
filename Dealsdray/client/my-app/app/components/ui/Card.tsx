interface CardProps {
    title:string;
    description: string;
    icon: string;
}
export default function Card({ title , description, icon } : CardProps) {
    return (
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300  ">
        <div className="flex items-center space-x-4 mb-4 ">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-xl font-semibold text-yellow-300 ">{title}</h2>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  }
  