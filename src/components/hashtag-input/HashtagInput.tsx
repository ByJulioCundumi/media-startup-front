import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./HashtagInput.scss";

/* ---------- Props ---------- */
export interface HashtagInputProps {
  /** Lista de hashtags (sin #). Si se pasa → modo controlado  */
  value?: string[];
  /** Callback para actualizar lista. Requerido en modo controlado */
  onChange?: (tags: string[]) => void;
  /** Placeholder del input */
  placeholder?: string;
  /** Máximo de hashtags permitidos */
  maxTags?: number;
}

const HashtagInput: React.FC<HashtagInputProps> = ({
  value,
  onChange,
  placeholder = "Add hashtags (space or enter)",
  maxTags = 10,
}) => {
  /* Si el componente es controlado usamos `value`, si no usamos estado interno */
  const isControlled = value !== undefined && onChange !== undefined;

  /* Estado interno (solo se usa en modo no controlado) */
  const [internalTags, setInternalTags] = useState<string[]>([]);
  const tags = isControlled ? value! : internalTags; // lista efectiva

  const [inputValue, setInputValue] = useState("");

  /* Mantener estado interno sincronizado si las props cambian */
  useEffect(() => {
    if (isControlled) return;
    // Nada: en modo no controlado tags es interno
  }, [isControlled]);

  /* Helpers */
  const cleanWord = (word: string) => word.replace(/^#/, "").trim();
  const isValid   = (word: string) => /^[\p{L}\p{N}_]{1,30}$/u.test(word);

  const setTags = (newTags: string[]) => {
    if (isControlled) {
      onChange!(newTags);
    } else {
      setInternalTags(newTags);
    }
  };

  const addHashtags = (raw: string) => {
    if (tags.length >= maxTags) return;

    const words = raw
      .split(/[\s#]+/)
      .map(cleanWord)
      .filter(
        (w) => w && isValid(w) && !tags.includes(w)
      )
      .slice(0, maxTags - tags.length); // respeta límite

    if (words.length) setTags([...tags, ...words]);
  };

  const removeHashtag = (tag: string) =>
    setTags(tags.filter((t) => t !== tag));

  /* Handlers */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim()) {
        addHashtags(inputValue);
        setInputValue("");
      }
    }
  };

  /* ---------- Render ---------- */
  return (
    <div className="hashtag-input">
      <label className="hashtag-input__label">Hashtags</label>

      <div className="hashtag-input__container">
        {tags.length > 0 && (
          <div className="hashtag-input__tag-list">
            {tags.map((tag) => (
              <div key={tag} className="hashtag-input__tag">
                #{tag}
                <FaTimes
                  className="hashtag-input__remove"
                  onClick={() => removeHashtag(tag)}
                />
              </div>
            ))}
          </div>
        )}

        {tags.length < maxTags && (
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="hashtag-input__input"
          />
        )}
      </div>
    </div>
  );
};

export default HashtagInput;