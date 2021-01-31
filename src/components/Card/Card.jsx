import React from 'react';
const Card = (props) => {
    let color = props.color;
    let number = new Intl.NumberFormat().format(props.number);
    return (
        <div class="col-4">
        <div class={`card border-left-${color} shadow h-100 py-2`}>
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                        {props.name}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{number}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;