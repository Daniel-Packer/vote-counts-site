interface TooltipProps {
  children: JSX.Element;
  position: Array<number>;
}

const Tooltip = ({ children, position }: TooltipProps) => {

  const tooltipContent = (
    <div
      className="tooltip"
      style={{ position:"absolute", left: position[0] - 20, top: position[1] - 80}}
    >
      {children}
    </div>
  );
  return <>{tooltipContent}</>;
};

export default Tooltip;
