import React from "react";

import ClientFrom from "../clientsComp/ClientForm";

const AddForm = (props) => {
  const formSubmission = (onValuesSubmit) => {
    console.log(onValuesSubmit);
  };
  return (
    <div className="nav__form">
      <ClientFrom formSubmission={formSubmission} />
    </div>
  );
};

export default AddForm;
