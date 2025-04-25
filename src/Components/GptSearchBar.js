import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].getSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-500 rounded-lg font-bold text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
