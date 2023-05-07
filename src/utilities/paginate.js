function paginate(items, currentPage, pageSize) {
  const startNumber = (currentPage - 1) * pageSize;

  return items.slice(startNumber, startNumber + pageSize);
}

export { paginate };
