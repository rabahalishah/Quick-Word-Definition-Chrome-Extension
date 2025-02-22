export const popUpStyles = () => {
  return `:host {
  position: fixed;
  top: 0.5%;
  left: 50%;
  transform: translate(-50%, 0);
  background: #101218;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  min-width: 40%;
  max-width: 60%;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Font inside shadow */
  color: white;
}

.word-header {
  display: flex;
  align-items: center;
  gap: 15px;
}
.speaker {
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: white;
  margin-top: 4px;
}
.close-icon {
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 6px;
}
.close-icon:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.speaker:hover {
  transform: scale(1.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.phonetic {
  font-size: 14px;
  margin-top: -20px;
  color: #bbb;
}
.part-of-speech {
  font-style: italic;
  font-size: 15px;
  color: #ccc;
  margin-top: 10px;
  font-weight: bold;
}
.origin {
  margin-top: 6px;
  font-size: 14px;
  color: #ddd;
  margin-top: 10px;
}
.definition {
  margin-top: 6px;
  font-size: 14px;
  color: #ddd;
}
.example {
  margin-top: 10px;
  font-size: 14px;
  color: #ddd;
  border-left: 3px solid #bbb;
  padding-left: 8px;
}
.word-n-close-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.origin-heading {
  font-weight: bold;
}
.dictionary-heading {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 1px;
}
.definition-list {
  margin-bottom: 10px;
}
.definition-source {
  text-decoration: underline;
  margin-top: -20px;
  color: #ddd;
}
.definition-from {
  font-size: 12px;
}

.loader-n-close-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.google-logo {
  text-decoration: none;
}

a {
  color: #ffffff;
}

a:visited {
  color: #ddd;
}

ol {
  list-style-type: decimal;
  padding-left: 20px;
} /* Style the ol */

@keyframes flowingStripes {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.text-placeholder-header {
  width: 50%; /* Dynamic width */
  height: 0.6em; /* Scales with font size */
  background: repeating-linear-gradient(
    90deg,
    #111 0%,
    #222 15%,
    #333 30%,
    #444 50%,
    #333 70%,
    #222 85%,
    #111 100%
  );
  background-size: 200% 100%;
  animation: flowingStripes 3s linear infinite reverse;
  margin-bottom: 20px;
}

.text-placeholder-dictionary {
  width: 30%;
  height: 0.6em;
  background: repeating-linear-gradient(
    90deg,
    #111 0%,
    #222 15%,
    #333 30%,
    #444 50%,
    #333 70%,
    #222 85%,
    #111 100%
  );
  background-size: 200% 100%;
  animation: flowingStripes 3s linear infinite reverse;
  margin-bottom: 20px;
}

.text-placeholder-part-of-speech {
  width: 15%;
  height: 0.6em;
  background: repeating-linear-gradient(
    90deg,
    #111 0%,
    #222 15%,
    #333 30%,
    #444 50%,
    #333 70%,
    #222 85%,
    #111 100%
  );
  background-size: 200% 100%;
  animation: flowingStripes 3s linear infinite reverse;
  margin-bottom: 20px;
}

.text-placeholder-definitions {
  width: 70%;
  height: 0.6em;
  background: repeating-linear-gradient(
    90deg,
    #111 0%,
    #222 15%,
    #333 30%,
    #444 50%,
    #333 70%,
    #222 85%,
    #111 100%
  );
  background-size: 200% 100%;
  animation: flowingStripes 3s linear infinite reverse;
  margin-bottom: 10px;
}

.text-placeholder-sentences {
  width: 90%;
  height: 0.6em;
  background: repeating-linear-gradient(
    90deg,
    #111 0%,
    #222 15%,
    #333 30%,
    #444 50%,
    #333 70%,
    #222 85%,
    #111 100%
  );
  background-size: 200% 100%;
  animation: flowingStripes 3s linear infinite reverse;
  margin-bottom: 10px;
}

.text-placeholder-origin {
  width: 40%;
  height: 0.6em;
  background: repeating-linear-gradient(
    90deg,
    #111 0%,
    #222 15%,
    #333 30%,
    #444 50%,
    #333 70%,
    #222 85%,
    #111 100%
  );
  background-size: 200% 100%;
  animation: flowingStripes 3s linear infinite reverse;
  margin-top: 20px;
}
`;
};
