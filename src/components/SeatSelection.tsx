import React from 'react';
import Seat from './Seat';

type SeatSelectionProps = {
    selectedValue: string,
    handleSeatChange: any
}

function SeatSelection(props: SeatSelectionProps) {
    return (
        <div>
            <Seat value="North" selectedValue={props.selectedValue} handleSeatChange={props.handleSeatChange} />
            <Seat value="East" selectedValue={props.selectedValue} handleSeatChange={props.handleSeatChange} />
            <Seat value="South" selectedValue={props.selectedValue} handleSeatChange={props.handleSeatChange} />
            <Seat value="West" selectedValue={props.selectedValue} handleSeatChange={props.handleSeatChange} />
        </div>
    );
}

export default SeatSelection;
