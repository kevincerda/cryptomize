import React from 'react';

const Button = props => {
  const renderedBtns = props.buttons.map((button, index) => {
    return (
      <button
        className={props.activeBtn === button.value ? 'btn active' : 'btn'}
        onClick={props.handleDateRangeClick}
        name={button.value}
        key={button.value}
      >
        {button.name}
      </button>
    );
  });
  return (
    <div className="col-6" id="config-panel">
      {renderedBtns}
    </div>
  );
};

export default Button;
