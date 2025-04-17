import { ClipLoader } from "react-spinners";
import "./Spinner.css";

type Props = {
  isLoading?: boolean;
};

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div
        id="loading-spinner"
        className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <ClipLoader
          color="#36d7b7"
          loading={isLoading}
          size={35}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Spinner;
