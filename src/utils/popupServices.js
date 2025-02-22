import { popUpStyles } from "./popupStyles.js";
import { loaderHtmlTemplate } from "./popupHtmlTemplates.js";

/**
 * createAndShowPopup creates an Isolated Shadow DOM inside the currently
 * opened browser window's DOM object and inject loader html template as
 * an initial value along with the styles
 * @returns container
 */

export function createAndShowPopup() {
  const existingPopup = document.getElementById("custom-popup");
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement("div");
  popup.id = "custom-popup";
  document.body.appendChild(popup);

  const shadow = popup.attachShadow({ mode: "open" });

  const container = document.createElement("div");
  shadow.appendChild(container);

  const style = document.createElement("style");
  const popupCSS = popUpStyles();
  style.innerHTML = popupCSS;
  document.head.appendChild(style);
  shadow.appendChild(style);

  const suspenseLoaderHTML = loaderHtmlTemplate();

  container.innerHTML = suspenseLoaderHTML;
  return container;
}

/**
 * isSentence simply validates the input whether its a sentence or word.
 * @param {*} word
 * @returns boolean
 */

export const isSentence = (word) => {
  if (word.indexOf(" ") >= 0) {
    return true;
  }
  return false;
};

/**
 * popUpTemplateHydrator is acting as a state updater once the api response
 * for the selected word has feteched successfully. It hydrates the initially
 * rendered template with the filled one.
 *
 * @param {*} data
 * @returns
 */

export function popUpTemplateHydrator(data) {
  const getAudio = () => {
    if (data.phonetics.length === 0) {
      return ``;
    }
    const filteredAudioArr = data.phonetics.filter(
      (phonetic) => phonetic?.audio?.length !== 0
    ); // Get only objects with audio

    const audioTag = filteredAudioArr.length
      ? `</ol></div><audio
        id="pronounciation"
        src="${filteredAudioArr[0]?.audio}"
      ></audio>`
      : ``;

    return audioTag;
  };

  const header = `
            <div class="word-n-close-btn">
          <div class="word-header">
           ${
             getAudio().length !== 0
               ? `<svg
              class="speaker"
              id="speaker-button"
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
                  d="M13 3.7446C13 3.27314 12.8728 2.50021 12.1657 2.14424C11.4151 1.76635 10.7163 2.19354 10.3623 2.51158L4.94661 7.43717H3C1.89543 7.43717 1 8.3326 1 9.43717L1.00001 14.6248C1.00001 15.7293 1.89544 16.6248 3.00001 16.6248H4.95001L10.3623 21.4891C10.7175 21.8081 11.416 22.2331 12.1656 21.8554C12.8717 21.4998 13 20.7286 13 20.2561V3.7446Z"
                  fill="#ffffff"
                />
                <path
                  d="M17.336 3.79605L17.0952 3.72886C16.5633 3.58042 16.0117 3.89132 15.8632 4.42329L15.7289 4.90489C15.5804 5.43685 15.8913 5.98843 16.4233 6.13687L16.6641 6.20406C18.9551 6.84336 20.7501 9.14615 20.7501 12.0001C20.7501 14.854 18.9551 17.1568 16.6641 17.7961L16.4233 17.8632C15.8913 18.0117 15.5804 18.5633 15.7289 19.0952L15.8632 19.5768C16.0117 20.1088 16.5633 20.4197 17.0952 20.2713L17.336 20.2041C20.7957 19.2387 23.2501 15.8818 23.2501 12.0001C23.2501 8.11832 20.7957 4.76146 17.336 3.79605Z"
                  fill="#ffffff"
                />
                <path
                  d="M16.3581 7.80239L16.1185 7.73078C15.5894 7.57258 15.0322 7.87329 14.874 8.40243L14.7308 8.88148C14.5726 9.41062 14.8733 9.96782 15.4024 10.126L15.642 10.1976C16.1752 10.3571 16.75 11.012 16.75 12C16.75 12.9881 16.1752 13.643 15.642 13.8024L15.4024 13.874C14.8733 14.0322 14.5726 14.5894 14.7308 15.1185L14.874 15.5976C15.0322 16.1267 15.5894 16.4274 16.1185 16.2692L16.3581 16.1976C18.1251 15.6693 19.25 13.8987 19.25 12C19.25 10.1014 18.1251 8.33068 16.3581 7.80239Z"
                  fill="#ffffff"
                />
              </g>
            </svg>`
               : ``
           }
            <div class="word-phonetic">
              <h2 class="word">${data.word}</h2>
              <div class="phonetic">${
                data.phonetic
                  ? data.phonetic
                  : `<p>No phonetic found.</p><a href="https://www.google.com/search?q=${data.word}+phonetic" target="_blank">Click Here</a> to search phonetic on <a class="google-logo" href="https://www.google.com/" target="_blank"><span style="color: #4285F4;">G</span><span style="color: #DB4437;">o</span><span style="color: #F4B400;">o</span><span style="color: #4285F4;">g</span><span style="color: #0F9D58;">l</span><span style="color: #DB4437;">e</span></a>.`
              }</div>
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
  
        <div class="definition">
          <div class="dictionary-heading">Dictionary:</div>
          <span class="definition-from">
            Definition from:
            <a
              class="definition-source"
              href="https://en.wiktionary.org/"
              target="_blank"
              >Wiktionary</a
            ></span
          >
          <div class="part-of-speech">${data.meanings[0].partOfSpeech}</div><ol>
  `;

  const getDefinitions = () => {
    if (data.meanings[0].definitions.length > 1) {
      const definitionsAndExamples = data.meanings[0].definitions
        .slice(0, 2)
        .map((definition) => {
          return `
                  <li class="definition-list">
                    ${definition?.definition}
                    ${
                      definition?.example
                        ? `<div class="example">
                      ${definition?.example}
                    </div>`
                        : ``
                    }
                  </li>
                `;
        })
        .join("");

      return definitionsAndExamples;
    } else {
      return `
                  <li class="definition-list">
                    ${data.meanings[0].definitions[0]?.definition}
                    ${
                      data.meanings[0].definitions[0].example
                        ? `<div class="example">
                      ${data.meanings[0].definitions[0]?.example}
                    </div>`
                        : ``
                    }
                  </li>
              `;
    }
  };

  let hydratedHtmlTemplate = header + getDefinitions() + getAudio();
  return hydratedHtmlTemplate;
}
