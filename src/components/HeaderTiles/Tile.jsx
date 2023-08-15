const Tile = ({ icon, title, description }) => {
  return (
    <div className="px-4 py-5 rounded-md shadow-lg hover:bg-gradient-to-tr from-[#7a85da] to-[#a9b2f6] cursor-pointer group">
      <div>{icon}</div>
      <div className="mt-2 space-y-2">
        <h3 className="text-black group-hover:text-white font-semibold text-xl">
          {title}
        </h3>
        <p className="text-slate-500 group-hover:text-white tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Tile;
