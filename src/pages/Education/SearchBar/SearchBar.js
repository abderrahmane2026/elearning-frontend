import "./SearchBar.css";

const SearchBar = ({ handleInputChange, query }) => {
  return (
    <div className="begcontainer-searchbar">
    <div className="service-title max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="space-y-6 sm:text-center sm:max-w-md sm:mx-auto">
        <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">التصميم التعليمي</h1>
        <p className="text-gray-600">منصة التكوين والتعليم الرقمي الموثوق
رسالتنا ...........التكوين من أجل التوظيف والترقية في منصب العمل 
رؤيتنا.............التقدم بمستقبل التعليم والتكوين اونالين فنجمع افضل المدرسين، الخبراء، المكونين المتخصصين في مكان واحد.</p>
      </div>
    </div>
    <h2 className="Search-title">ابحث</h2>
    <div onSubmit={(e) => e.preventDefault()} className="search-container">
      <div className="search-bar">
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto'>
          <path
            fillRule='evenodd'
            d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
            clipRule='evenodd'
          />
        </svg>
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="ابحث عن تخصصك"
        />
      </div>
    </div>
  </div>
  );
};

export default SearchBar;
