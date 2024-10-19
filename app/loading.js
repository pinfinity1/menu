import {PuffLoader} from 'react-spinners';


export default function Loading() {
  return (
      <div className="w-svw h-svh flex items-center justify-center">
        <PuffLoader color="#015428" size={100}/>;
      </div>
  );
};