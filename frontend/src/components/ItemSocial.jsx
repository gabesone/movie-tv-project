function ItemSocial({ children, url }) {
  return (
    <a
      href={url}
      className="cursor-pointer text-[1.4rem] font-medium text-gray-500 transition-colors duration-300 hover:text-gray-200"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default ItemSocial;