interface ShowProps {
  when: boolean;
  children: JSX.Element;
}

const Show = (props: ShowProps) => {
  if (props.when) {
    return props.children;
  }

  return <></>;
};

export default Show;
