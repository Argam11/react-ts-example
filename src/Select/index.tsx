import { styled } from "@linaria/react";
import RcSelect, { Option } from "rc-select";
import "rc-select/assets/index.css";

const StyledRcSelect = styled(RcSelect)`
  color: "red";
`;

function SelectComp() {
  return (
    <StyledRcSelect>
      <Option value="jack">jack</Option>
      <Option value="lucy">lucy</Option>
      <Option value="yiminghe">yiminghe</Option>
    </StyledRcSelect>
  );
}

export default SelectComp;
