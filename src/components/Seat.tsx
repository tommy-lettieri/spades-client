import React from 'react';

type SeatProps = {
    value: string,
    selectedValue: string,
    handleSeatChange: any
}

function Seat(props: SeatProps) {
  return (
    <label>
        {props.value}
        <input type="radio" name="seat" value={props.value} checked={props.value === props.selectedValue} onChange={props.handleSeatChange} />
        <br/>
    </label>
  );
}

export default Seat;
