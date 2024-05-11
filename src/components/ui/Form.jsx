import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Dropdown } from "./Dropdown";
import { Button } from "./Button";

export const Form = ({ }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

  };

  return (
    <form className="flex flex-col gap-4 items-center justify-center ">
      <Input
        label="Title"
        name="title"
        onChange={handleChange}
        value=""
        placeholder="Enter a Title"
      />
      <Textarea
        label="Description"
        name="description"
        onChange={handleChange}
        value=""
        placeholder="Add a short Description"
      />
      <Dropdown
        label="Priority"
        name="priority"
        onChange={handleChange}
        value=""
        options={[
          { label: "High", value: "high" },
          { label: "Medium", value: "medium" },
          { label: "Low", value: "low" },
        ]}
      />
      <Button>Save</Button>
    </form>
  );
};
