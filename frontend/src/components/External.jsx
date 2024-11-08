function External({ link, name, children }) {
  return (
    <ul className="text-xl transition-colors duration-300 hover:text-purple-600 sm:text-2xl">
      <li>
        <a href={link} alt={`Page of ${name}`} target="_blank">
          {children}
        </a>
      </li>
    </ul>
  );
}

export default External;
