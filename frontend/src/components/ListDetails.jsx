function ListDetails({ children }) {
  return (
    <li className="grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr]">
      {children}
    </li>
  );
}

export default ListDetails;
