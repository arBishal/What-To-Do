import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Dropdown } from "./Dropdown";
import { Button } from "./Button";

export const Form = ({ todoData, setTodoData, onSubmit }) => {
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({
      ...todoData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center justify-center">
      <Input
        label="Title"
        name="title"
        onChange={handleChange}
        value={todoData.title}
        placeholder="Enter a Title"
      />
      <Textarea
        label="Description"
        name="description"
        onChange={handleChange}
        value={todoData.description}
        placeholder="Add a short Description"
      />
      <Dropdown
        label="Priority"
        name="priority"
        onChange={handleChange}
        value={todoData.priority}
        options={[
          { label: "High", value: "high" },
          { label: "Medium", value: "medium" },
          { label: "Low", value: "low" },
        ]}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};
