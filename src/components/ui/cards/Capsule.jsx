export const Capsule = ({ priority }) => {
  
  const getStyles = (priority) => {
    switch (priority) {
      case 'high':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-700',
          borderColor: 'border-red-300',
        };
      case 'medium':
        return {
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-700',
          borderColor: 'border-amber-300',
        };
      case 'low':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-700',
          borderColor: 'border-green-300',
        };
      default:
        return {
          bgColor: 'bg-neutral-100',
          textColor: 'text-neutral-500',
          borderColor: 'border-neutral-300',
        };
    }
  };
  
  const { bgColor, textColor, borderColor } = getStyles(priority);

  return (
    <span className={`text-sm ${textColor} px-1 border-2 ${borderColor} rounded ${bgColor}`}>
      {priority}
    </span>
  );
};
