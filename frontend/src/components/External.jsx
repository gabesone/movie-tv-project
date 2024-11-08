function External({ link, name, children }) {
  return (
    <li className="cursor-pointer text-xl transition-colors duration-300 hover:text-purple-600 sm:text-2xl">
      <a href={link} alt={`Page of ${name}`} target="_blank">
        {children}
      </a>
    </li>
  );
}

export default External;
