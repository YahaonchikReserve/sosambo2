import React, { useState, useEffect } from 'react'
import OrderButton from './OrderButton'

const ReviewModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', review: '', rating: 5 })
  const [hoverRating, setHoverRating] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const closeModal = () => {
    setFormData({ name: '', review: '', rating: 5 })
    onClose()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    if (formData.name.trim() && formData.review.trim()) {
      // Здесь можно добавить логику отправки данных
      alert(`Отзыв принят! Спасибо за обратную связь.\nИмя: ${formData.name}\nОценка: ${formData.rating} звёзд\nОтзыв: ${formData.review}`)
      closeModal()
    } else {
      alert('Пожалуйста, заполните все поля')
    }
  }

  const handleStarClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }))
  }

  const handleStarHover = (rating) => {
    setHoverRating(rating)
  }

  const handleStarLeave = () => {
    setHoverRating(0)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Добавить отзыв</h2>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
          <div className="modal-body">
            <p className="modal-description">
              Поделитесь ��воим опытом! Ваш отзыв поможет другим клиентам сделать прав��льный выбор. 
              Расскажите о качестве ремонта и уровне сервиса.
            </p>
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="rating-label">Оценка:</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${star <= (hoverRating || formData.rating) ? 'filled' : ''}`}
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={handleStarLeave}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  placeholder="Напишите ваш отзыв"
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
              <div className="submit-wrapper">
                <OrderButton onClick={handleSubmit} variant="primary" text="Добавить отзыв" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Стили для модального окна */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          z-index: 1000;
          padding-left: 0;
        }

        .modal-content {
          background: white;
          width: 33.33%;
          height: 100%;
          padding: 40px;
          box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          animation: slideInLeft 0.3s ease-out;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
          color: #333;
          font-family: 'Nunito', sans-serif;
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 30px;
          cursor: pointer;
          color: #999;
          padding: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background-color: #f5f5f5;
          color: #333;
        }

        .modal-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .modal-description {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 40px;
          font-family: 'Nunito', sans-serif;
        }

        .review-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .rating-label {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #333;
          font-family: 'Nunito', sans-serif;
        }

        .star-rating {
          display: flex;
          gap: 5px;
        }

        .star {
          font-size: 30px;
          cursor: pointer;
          color: #ddd;
          transition: all 0.3s ease;
          user-select: none;
        }

        .star:hover {
          transform: scale(1.1);
        }

        .star.filled {
          color: #5FCDEE;
        }


        .form-input {
          padding: 20px;
          font-size: 18px;
          border: 2px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Nunito', sans-serif;
        }

        .form-textarea {
          padding: 20px;
          font-size: 18px;
          border: 2px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
          outline: none;
          resize: none;
          min-height: 120px;
          font-family: 'Nunito', sans-serif;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #4EC8ED;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(78, 200, 237, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #999;
          font-size: 16px;
          font-family: 'Nunito', sans-serif;
        }

        .submit-wrapper {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        /* Адаптивность для мобильных устройств */
        @media (max-width: 768px) {
          .modal-content {
            width: 90%;
            height: auto;
            max-height: 90%;
            margin: 16px;
            padding: 20px;
            border-radius: 12px;
            animation: slideInUp 0.3s ease-out;
          }

          @keyframes slideInUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          .modal-overlay {
            justify-content: center;
            padding: 10px;
          }

          .modal-header {
            margin-bottom: 15px;
            padding-bottom: 15px;
          }

          .modal-header h2 {
            font-size: 23px;
          }

          .modal-description {
            font-size: 15px;
            margin-bottom: 15px;
          }

          .review-form {
            gap: 12px;
          }

          .form-input,
          .form-textarea {
            padding: 11px;
            font-size: 15px;
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            font-size: 15px;
          }

          .submit-wrapper {
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  )
}

export default ReviewModal
