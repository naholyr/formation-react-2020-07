class Counter extends React.Component {

  static propTypes = {
    initialValue: PropTypes.number,
  }

  static defaultProps = {
    initialValue: 1,
  }

  // Class fields
  state = {
    value: this.props.initialValue,
  }

  render() {
    return React.createElement('button', {
      onClick: (e /* SyntheticEvent */) => {
        e.preventDefault();
        // merge
        this.setState((state) => { // push(function () {...})
          return { value: state.value + 1 }
        })
      },
    }, `${this.state.value} (click to increment)`);
  }
}
