import React from 'react';

type LoginProps = {
}

type LoginState = {
  value: string,
  seat: string // TODO make this an enum
}

// type ChangeEvent = {
//   title: string,
//   target: {
//     value: string
//   }
// }

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      value: '',
      seat: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSeatChange = this.handleSeatChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event: any) {
    this.setState({value: event.target.value});
  }

  handleSeatChange(event: any) {
    this.setState({seat: event.target.value});
  }

  handleSubmit(event: any) {
    alert(JSON.stringify(this.state, null, 2));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleNameChange} />
        </label>
        <br/>

        {/* TODO make a component for seats and seat */}
        <label>
          North:
          <input type="radio" name="seat" value="north" checked={this.state.seat === 'north'} onChange={this.handleSeatChange} />
        </label>
        <br/>
        <label>
          East:
          <input type="radio" name="seat" value="east" checked={this.state.seat === 'east'} onChange={this.handleSeatChange} />
        </label>
        <br/>
        <label>
          South:
          <input type="radio" name="seat" value="south" checked={this.state.seat === 'south'} onChange={this.handleSeatChange} />
        </label>
        <br/>
        <label>
          West:
          <input type="radio" name="seat" value="west" checked={this.state.seat === 'west'} onChange={this.handleSeatChange} />
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Login;
