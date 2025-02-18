function SelectedItem({ children, selected, setSelected }) {
  return (
    <li
      onClick={() => setSelected(children)}
      className={`${selected === children && "bg-transparent text-gray-100 transition-all duration-300 xl:underline xl:underline-offset-[1rem]"} w-full cursor-pointer bg-gray-800 py-3 text-center transition-all duration-300 hover:text-gray-100 xl:w-auto xl:bg-transparent`}
    >
      <button className="uppercase">{children}</button>
    </li>
  );
}

export default SelectedItem;
