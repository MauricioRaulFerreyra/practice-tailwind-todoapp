const handleSubmit = (
  e: React.FormEvent,
  title: string,
  setTitle: (title: string) => void,
  handleAddTodo: (title: string) => void
): void => {
  e.preventDefault();
  if (!title.trim()) {
    return setTitle('');
  }

  handleAddTodo(title);
  setTitle('');
};

export default handleSubmit;
