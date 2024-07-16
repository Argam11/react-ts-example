import { useState } from "react";
import { StyledRate } from "./Rate.styles";

import Star from "./star";

interface IRateProps {
  defaultValue?: number;
}

interface IRateItemProps {
  index: number;
  value: number;
  onClick: (index: number) => void;
}

const RateItem = ({ index, value, onClick }: IRateItemProps) => {
  return (
    <div className={`rate-item${value >= index ? " active" : ""}`}>
      <div className="rate-star-first" onClick={() => onClick(index)}>
        <Star />
      </div>
      <div className={`rate-star-second${index - value === 0.5 ? " active" : ""}`} onClick={() => onClick(index - 0.5)}>
        <Star />
      </div>
    </div>
  );
};

const Rate = ({ defaultValue = 0 }: IRateProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleClick = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <StyledRate>
        <RateItem index={5} value={value} onClick={handleClick} />
        <div className="rate-gap" />
        <RateItem index={4} value={value} onClick={handleClick} />
        <div className="rate-gap" />
        <RateItem index={3} value={value} onClick={handleClick} />
        <div className="rate-gap" />
        <RateItem index={2} value={value} onClick={handleClick} />
        <div className="rate-gap" />
        <RateItem index={1} value={value} onClick={handleClick} />
      </StyledRate>
      Count: {value}
    </>
  );
};

export default Rate;
