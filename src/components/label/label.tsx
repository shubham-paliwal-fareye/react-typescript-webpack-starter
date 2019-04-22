import React from "react";
interface LabelProps {
  labelCss: React.CSSProperties;
  label: string;
}
const Label = ({ labelCss, label }: LabelProps) => {
  return (
    <div>
      <h4 style={labelCss}>{label}</h4>
    </div>
  );
};
export default Label;
