import { useContext, useEffect } from "react";
import { PregaoContext } from "../contexts/PregaoContext";

import { ItemsTableAtivos } from "./TableAtivos.tsx/TableHead";

export const PregaoAtivos = () => {
  const { getInProgressInputs, inProgress }: any = useContext(PregaoContext);

  useEffect(() => {
    getInProgressInputs();
  }, []);

  return (
    <div>
      <span>pregaoAtivos</span>
      <div>{inProgress && <ItemsTableAtivos items={inProgress} />}</div>
    </div>
  );
};
