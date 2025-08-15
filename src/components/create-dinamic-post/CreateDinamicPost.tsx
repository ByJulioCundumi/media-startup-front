import React, { useState, type ChangeEvent } from 'react';
import { FaImage, FaPoll, FaTimes, FaTrash } from 'react-icons/fa';
import './CreateDinamicPost.scss';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { MdOutlineCardMembership } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setCreateDinamicPostStatus } from '../../reducers/popupStatusSlice';
import HashtagInput from '../hashtag-input/HashtagInput';

const CreateDinamicPost: React.FC = () => {
  const [postType, setPostType] = useState<'image' | 'poll'>('image');
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [pollOptions, setPollOptions] = useState<string[]>(['', '']);
  const [visibility, setVisibility] = useState<'public' | 'private'>('public');
  const dispatch = useDispatch()

  const closePopup = ()=>{
    dispatch(setCreateDinamicPostStatus("closed"))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handlePollOptionChange = (index: number, value: string) => {
    const updated = [...pollOptions];
    updated[index] = value;
    setPollOptions(updated);
  };

  const addPollOption = () => {
    if (pollOptions.length < 5) setPollOptions([...pollOptions, '']);
  };

  const removePollOption = (index: number) => {
    if (pollOptions.length > 2) {
      const updated = [...pollOptions];
      updated.splice(index, 1);
      setPollOptions(updated);
    }
  };

  const toggleVisibility = () => {
    setVisibility(prev => (prev === 'public' ? 'private' : 'public'));
  };

  const handleSubmit = () => {
    const data = {
      type: postType,
      text,
      image,
      visibility,
      pollOptions: pollOptions.filter(opt => opt.trim() !== ''),
    };
    console.log('Publishing post:', data);
  };

  return (
    <div className="create-dinamic-post">
      <div className="create-dinamic-post__popup">
        <button onClick={closePopup} className="create-dinamic-post__close" aria-label="Cerrar popup">
          <FaTimes />
        </button>
        <h2>Que deseas compartir?</h2>

        <div className="create-dinamic-post__options">
          <button
            onClick={() => setPostType('image')}
            className={postType === 'image' ? 'active' : ''}
          >
            <FaImage /> Publicacion
          </button>
          <button
            onClick={() => setPostType('poll')}
            className={postType === 'poll' ? 'active' : ''}
          >
            <FaPoll /> Encuesta
          </button>
        </div>

        <textarea
          className="create-dinamic-post__textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué quieres compartir?"
        />

        

        {postType === 'image' && (
          <div className="create-dinamic-post__image-upload">
            <div className="image-upload-row">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="image-upload"
                hidden
              />
              <label htmlFor="image-upload" className="upload-label">
                <FaImage /> Seleccionar imagen
              </label>

              <div
                className="visibility-switch"
                data-state={visibility}
                onClick={() =>
                    setVisibility((prev) => (prev === 'public' ? 'private' : 'public'))
                }
                >
                {visibility === 'public' ? (
                    <>
                    <FaEye className="icon" />
                    <div className="selected-text">Público</div>
                    </>
                ) : (
                    <>
                    <MdOutlineCardMembership className="icon" />
                    <div className="selected-text">Privado</div>
                    </>
                )}
                <div className="toggle"></div>
                </div>
            </div>

            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Vista previa" />
                <button className="remove-image" onClick={removeImage}>
                  <FaTrash />
                </button>
              </div>
            )}
          </div>
        )}

        {postType === 'poll' && (
          <div className="create-dinamic-post__poll-options">
            {pollOptions.map((option, index) => (
              <div className="poll-option" key={index}>
                <input
                  type="text"
                  value={option}
                  placeholder={`Opción ${index + 1}`}
                  onChange={(e) => handlePollOptionChange(index, e.target.value)}
                />
                {pollOptions.length > 2 && (
                  <button className="remove" onClick={() => removePollOption(index)}>
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}

            <div className="poll-bottom-row">
              {pollOptions.length < 5 && (
                <button className="add-option" onClick={addPollOption}>
                  + Añadir opción
                </button>
              )}

              <div
                className="visibility-switch"
                data-state={visibility}
                onClick={() =>
                    setVisibility((prev) => (prev === 'public' ? 'private' : 'public'))
                }
                >
                {visibility === 'public' ? (
                    <>
                    <FaEye className="icon" />
                    <div className="selected-text">Público</div>
                    </>
                ) : (
                    <>
                    <MdOutlineCardMembership className="icon" />
                    <div className="selected-text">Privado</div>
                    </>
                )}
                <div className="toggle"></div>
                </div>
            </div>
          </div>
        )}

        <div className="create-dinamic-post__hashtags">
          <HashtagInput/>
        </div>

        <button className="create-dinamic-post__submit" onClick={handleSubmit}>
          Publicar
        </button>
      </div>
    </div>
  );
};

export default CreateDinamicPost;