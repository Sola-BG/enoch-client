import * as React from 'react';

interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
}

class Home extends React.Component<IProps, IState> {
  public static efaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    count: 0,
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  }

  public render() {
    return (
      <div>
        <p>
          My Not Found number is {this.state.count}
        </p>
        <button onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default Home;
