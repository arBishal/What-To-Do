import CloseIcon from "./icons/CloseIcon";

export const Modal = ({ heading, onClose, children }) => {
  return (
    <div className="block top-0 fixed z-10 flex items-center justify-center h-full w-full overflow-auto bg-neutral-950 opacity-80">
      <div className="z-20 bg-white opacity-100 m-auto p-6 border-[1px] rounded-lg w-1/3 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl leading-none"> {heading} </p>
          <span
            className="text-neutral-500 hover:text-neutral-900 text-4xl p-1 hover:bg-neutral-100 hover:rounded-full cursor-pointer"
            onClick={onClose}
          >
            <CloseIcon/>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};
