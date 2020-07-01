const Counter = ({
  initialValue /*: number */ = 1,
}) => {
  const [value, setValue] = React.useState(initialValue);

  return React.createElement('button', {
    onClick: (e /* SyntheticEvent */) => {
      e.preventDefault();
      // replace
      setValue(value + 1)
    },
  }, `${value} (click to increment)`);
}

Counter.propTypes = {
  initialValue: PropTypes.number,
}
