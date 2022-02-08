import React, { createContext, useState } from "react";

export const PolicyContext = createContext();

const policyData=[
{"policyName":"Policy A","Data":[44, 55, 41, 30, 22, 44, 20, 50, 50, 20, 4, 5, 6],"year":"2021"},
{"policyName":"Policy B","Data":[21, 22, 31, 40, 30, 34, 30, 40, 40, 30, 4, 5, 6],"year":"2021"},
{"policyName":"Policy C","Data":[30, 33, 21, 50, 42, 24, 40, 30, 30, 40, 4, 5, 6],"year":"2021"},
{"policyName":"Policy D","Data":[20, 44, 12, 67, 52, 14, 50, 20, 20, 50, 4, 5, 6],"year":"2021"},
{"policyName":"Policy A","Data":[20, 44, 12, 20, 50, 44, 20, 50, 50, 20, 4, 5, 6],"year":"2022"},
{"policyName":"Policy B","Data":[30, 33, 21, 30, 40, 34, 30, 40, 40, 30, 4, 5, 6],"year":"2022"},
{"policyName":"Policy C","Data":[21, 22, 31, 40, 30, 24, 40, 30, 30, 40, 4, 5, 6],"year":"2022"},
{"policyName":"Policy D","Data":[44, 55, 41, 50, 20, 14, 50, 20, 20, 50, 4, 5, 6],"year":"2022"}

];


export const PolicyProvider = (props) => {
  const [policy, setPolicy] = useState(policyData);
  return (
    <PolicyContext.Provider value={{ policy: policy, setPolicy: setPolicy }}>
      {props.children}
    </PolicyContext.Provider>
  );
};
