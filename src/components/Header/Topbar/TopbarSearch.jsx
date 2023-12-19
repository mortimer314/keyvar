
import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function TopbarSearch({ isLanguageFa, isDarkTheme, statusTopbar, isSlim }) {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [inputValue, setInputValue] = useState()
  const refElem = useRef(false);
  const refElem2 = useRef(null);
  const refElem3 = useRef(null);

  const showDetails = useCallback(() => {
    refElem.current = true;
    setIsShowDropdown(true);
  }, []);

  const closeDetails = useCallback(() => {
    refElem.current = false;
    setIsShowDropdown(false);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      if (!refElem3.current.contains(event.target) && !refElem2.current.contains(event.target)) {
        closeDetails();
      }
    },
    [closeDetails]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);



  let searchItemsStyle = {}
  switch (statusTopbar) {
    case ("thick-dark-default" || "slim-dark-default"):
      searchItemsStyle = { inputWrapper: "border-[#373e53] text-gray-400 bg-slate-800", input: "text-gray-400", placeholder: "placeholder:text-gray-400", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case ("thick-dark-darker" || "slim-dark-darker"):
      searchItemsStyle = { inputWrapper: "border-[#373e53] text-gray-400 bg-slate-900", input: "text-gray-400", placeholder: "placeholder:text-gray-400", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case ("thick-light-default" || "slim-light-default"):
      searchItemsStyle = { inputWrapper: "border-zinc-300 text-gray-400 bg-gray-50", input: "text-gray-600", placeholder: "placeholder:text-gray-400", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case ("thick-light-darker" || "slim-light-darker"):
      searchItemsStyle = { inputWrapper: "border-[#373e53] text-gray-400 bg-slate-800", input: "text-gray-400", placeholder: "placeholder:text-gray-400", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;

  }



  return (
    <div className={`topbar__search relative flex-center w-full m-auto max-w-[400px]`}>
      <div ref={refElem3}
        className={`topbar__input-wrapper transision ease-linear  overflow-hidden border border-solid
        relative flex-center  duration-100 w-full 
        ${searchItemsStyle.inputWrapper}
        ${isSlim ? "border-zinc-300 text-gray-400":""}
        ${refElem.current ? 'rounded-b-none rounded-t-md' : 'rounded-2xl'}
       `} >

        <div
          onClick={() => {
            setInputValue('')
            closeDetails()
          }
          }
          className={`topbar__search-icon absolute  cursor-pointer 
              ${isLanguageFa ? "left-2.5" : "right-2.5"} 
          ${isShowDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <svg className="w-7 h-7">
            <use href="#x-mark"></use>
          </svg>
        </div>

        <div className={`topbar__search-icon absolute 
         ${isLanguageFa ? "right-3.5" : "left-3.5"}
        `}>
          <svg className="w-4 h-4">
            <use href="#magnifying-glass"></use>
          </svg>
        </div>

        <input
          autoComplete="off"
          dir={isLanguageFa ? "rtl" : "ltr"}
          id="search-input"
          type="text"
          onChange={e => {
            showDetails()
            setInputValue(e.target.value)
          }}
          value={inputValue}
          onClick={showDetails}
          className={`topbar__input font-DanaMedium  w-full outline-0 border-0 px-9 pe-2
            placeholder:text-gray-400  bg-inherit text-sm  py-1
            ${searchItemsStyle.input}
            ${isSlim ?"text-base bg-white py-2 placeholder:text-gray-500 text-gray-600 mt-0":"mt-1"}
           `}
          placeholder={isLanguageFa ? "جستوجو..." : "Search..."}
        />

      </div>
      <div
        id="topbar__search-suggestion"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        ref={refElem2}
        className={`topbar__search-suggestion absolute transition-all ease-linear duration-100 
        w-full max-h-[400px] overflow-y-auto border border-solid text-center py-2 px-4  border-zinc-300 dark:border-[#373e53]
        rounded-md bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-gray-400 font-DanaMedium
        rounded-t-none 
        ${refElem.current || isMouseEnter ? `opacity-100 visible ${isSlim ? "top-9" : "top-8"}` : 'opacity-0 top-20 invisible'}`}
      >
        <div>🤷‍♂️ بدون نتیجه</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
        <div>gfgg</div>
      </div>


    </div>
  );
}