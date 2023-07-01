import { useEffect, useState } from "react";
import { dataAPI } from "../../services/auth";

function Data() {
  const [apiResp, setApoiResp] = useState([]);
  const dataAPICall = async () => {
    try {
      const resp = await dataAPI();
      setApoiResp(resp.data.data);
      console.log("resp :>> ", resp.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    dataAPICall();
  }, []);

  useEffect(() => {
    console.log("apiResp :>> ", apiResp);
  }, [apiResp]);

  return (
    <>
      <h1>Data</h1>
      <ul>
        {apiResp.length &&
          apiResp.map((e) => {
            return <li>{e}</li>;
          })}
      </ul>
    </>
  );
}

export default Data;
