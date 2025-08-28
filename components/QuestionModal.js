import React, { useState, useEffect } from 'react'

const QuestionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ question: '', phone: '' })

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
    setFormData({ question: '', phone: '' })
    onClose()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.question.trim() && formData.phone.trim()) {
      // Здесь можно добавить логику отправки данных
      alert(`Вопрос принят! Мастер свяжется с вами в ближайшее время.\nВопрос: ${formData.question}\nТелефон: ${formData.phone}`)
      closeModal()
    } else {
      alert('Пожалуйста, заполните все поля')
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Спросить Мастера</h2>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
          <div className="modal-body">
            <p className="modal-description">
              Остались вопросы? Задайте их нашему мастеру бесплатно! 
              Укажите ваш вопрос и номер телефона. Наш спец��алист свяжется с вами и даст подробную консультацию.
            </p>
            <form onSubmit={handleSubmit} className="question-form">
              <div className="form-group">
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  placeholder="Напишите ваш вопрос"
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Номер телефона"
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                ОТПРАВИТЬ ВОПРОС
              </button>
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
        }

        .question-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-input {
          padding: 20px;
          font-size: 18px;
          border: 2px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-textarea {
          padding: 20px;
          font-size: 18px;
          border: 2px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
          outline: none;
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
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
        }

        .submit-button {
          fill: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          width: 325px;
          height: auto;
          font-size: 16px;
          max-width: 330px;
          min-width: 170px;
          align-self: center;
          font-style: normal;
          max-height: 50px;
          min-height: 50px;
          font-family: 'Spectral';
          font-weight: 600;
          border: 1px solid rgba(25, 24, 24, 0.35);
          border-radius: 8px;
          letter-spacing: 1.15px;
          background-color: rgb(40, 40, 40);
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .submit-button:hover {
          background-color: #4a4a4a;
          opacity: 0.9;
        }

        .submit-button:active {
          background-color: #333;
          opacity: 1;
        }

        /* Адаптивность для мобильных устройств */
        @media (max-width: 768px) {
          .modal-content {
            width: 90%;
            height: auto;
            max-height: 90%;
            margin: 20px;
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
            padding: 20px;
          }

          .modal-header h2 {
            font-size: 24px;
          }

          .form-input,
          .form-textarea {
            padding: 15px;
            font-size: 16px;
          }

          .submit-button {
            padding: 15px 30px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  )
}

export default QuestionModal
