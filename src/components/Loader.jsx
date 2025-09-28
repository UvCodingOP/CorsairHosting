import {SpinnerCircularFixed} from "spinners-react";

const Loader = ({ theme, color }) => {
  return (
    <>
      <div
        className={`h-screen w-screen bg-[${theme}] flex justify-center items-center`}
      >
        {<SpinnerCircularFixed size={61} thickness={100} speed={100} color="rgba(0, 156, 104, 1)" secondaryColor="rgba(218, 218, 218, 1)" />}
      </div>
    </>
  );
};

export default Loader;
