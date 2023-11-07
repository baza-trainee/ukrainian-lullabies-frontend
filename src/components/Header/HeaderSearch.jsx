import classNames from "classnames";

export const HeaderSearch = ({ isLightTheme, searchBarRef, headerOptionsWrapperRef }) => {
  const searchIconClick = () => {
    const parent = headerOptionsWrapperRef.current.parentNode;
    const input = document.getElementById("headerSearchInput");
    const headerAboutLink = document.querySelector(".header-about-link");
    const headerDropdownWrapper = document.querySelector(".header-dropdown-wrapper");

    headerAboutLink.style.display = "none";
    headerDropdownWrapper.style.display = "none";

    headerOptionsWrapperRef.current.style.display = "none";
    parent.classList.remove("container");
    parent.classList.add("header-with-search-bar-open");
    searchBarRef.current.classList.remove("hidden");
    searchBarRef.current.classList.add("header-search-bar-open");
    input.focus();
    console.log(parent);
  };

  return (
    <div className={classNames("header-search-icon", { "header-search-icon-light": isLightTheme })} onClick={searchIconClick}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 22L8.35 17.65M6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C9.58172 4 6 7.58172 6 12Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
};
