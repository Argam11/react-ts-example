import { Children, cloneElement, ReactElement } from "react";

interface ITestProps {
  children: ReactElement | ReactElement[];
  current: number;
}

interface ITestItemProps {
  title: string;
  current?: number;
  index?: number;
}

const getFlattenChildren = (children: ReactElement | ReactElement[]): ReactElement | ReactElement[] => {
  if (Array.isArray(children)) {
    return children.map((child) => getFlattenChildren(child)).flat();
  }

  if (children.props.children) {
    return getFlattenChildren(children.props.children);
  }

  return children;
};

const Test = ({ children, current }: ITestProps) => {
  const flattenChildren = getFlattenChildren(children);

  const nodes = Children.map(flattenChildren, (child, index) => {
    return cloneElement(child, { current, index });
  });

  return <div>{nodes}</div>;
};

export const Item = ({ title, current, index = 0 }: ITestItemProps) => {
  return (
    <div>
      N: {index + 1} --///-- title: {title} --///-- current: {current}
    </div>
  );
};

Test.Item = Item;

export default Test;
