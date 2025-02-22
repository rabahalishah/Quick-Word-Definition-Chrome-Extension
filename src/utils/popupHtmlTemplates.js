export const loaderHtmlTemplate = () => {
  return ` <div class="loader-n-close-btn">
          <div class="text-placeholder-header"></div>
          <svg
            class="close-icon"
            id="closePopup"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
        <div class="text-placeholder-dictionary"></div>
        <div class="text-placeholder-sentences"></div>
        <div class="text-placeholder-definitions"></div>
        <div class="text-placeholder-sentences"></div>
        <div class="text-placeholder-definitions"></div>
        <div class="text-placeholder-origin"></div>`;
};

export const sentenceHtmlTemplate = () => {
  return `<div class="word-n-close-btn">
        <div class="word-header">
          <div class="word-phonetic">
            <h2 class="word">
              Oops! It seems you are trying to select a sentence.
            </h2>
          </div>
        </div>
        <div>
          <svg
            class="close-icon"
            id="closePopup"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
      </div>
      <div class="origin">
        Please select only a single word to get its definition. Try selecting
        one word at a time for better results.
      </div>`;
};
export const defNotFoundHtmlTemplate = (word) => {
  return `<div class="word-n-close-btn">
        <div class="word-header">
          <div class="word-phonetic">
            <h2>No Definition Found :&#40;</h2>
            <h5><a href="https://www.google.com/search?q=${word}+meaning" target="_blank">Click Here</a> to search on <a class="google-logo" href="https://www.google.com/" target="_blank"><span style="color: #4285F4;">G</span><span style="color: #DB4437;">o</span><span style="color: #F4B400;">o</span><span style="color: #4285F4;">g</span><span style="color: #0F9D58;">l</span><span style="color: #DB4437;">e</span></a>.</h5>
          </div>
        </div>
          <svg
            class="close-icon"
            id="closePopup"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#ffffff"
              />
            </g>
          </svg>
      </div>
      <div class="origin">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </div>`;
};
