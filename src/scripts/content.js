import { getWordDefinition } from "../api/queries/index.js";
import {
  createAndShowPopup,
  defNotFoundHtmlTemplate,
  sentenceHtmlTemplate,
  isSentence,
  popUpTemplateHydrator,
} from "../utils/index.js";

chrome.runtime.onMessage.addListener(async function (request) {
  if (request.action === "defineWord") {
    let word = await request.word;

    const container = createAndShowPopup();

    if (isSentence(word)) {
      const sentenceHTMLTemplate = sentenceHtmlTemplate();
      container.innerHTML = sentenceHTMLTemplate;

      const closeButton = container.querySelector("#closePopup"); // Use container.querySelector

      closeButton.addEventListener("click", () => {
        document.getElementById("custom-popup").remove();
      });

      return;
    }

    getWordDefinition(word).then((definition) => {
      if (definition.status === 404) {
        const definitionNotFoundHTML = defNotFoundHtmlTemplate(word);
        container.innerHTML = definitionNotFoundHTML;
        const closeButton = container.querySelector("#closePopup");

        closeButton.addEventListener("click", () => {
          document.getElementById("custom-popup").remove();
        });

        return;
      }

      const hydratedPopUpHtmlTemplate = popUpTemplateHydrator(
        definition.data[0]
      );

      container.innerHTML = hydratedPopUpHtmlTemplate;

      const speakerButton = container.querySelector("#speaker-button");
      const closeButton = container.querySelector("#closePopup");
      const pronounciation = container.querySelector("#pronounciation");

      if (speakerButton) {
        speakerButton.addEventListener("click", () => {
          pronounciation.play();
        });
      }

      if (closeButton) {
        closeButton.addEventListener("click", () => {
          document.getElementById("custom-popup").remove();
        });
      }
    });
  }
});
