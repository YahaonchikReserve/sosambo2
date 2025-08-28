import React, { useState, useEffect } from 'react'
import AskButton from './AskButton'

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
    if (e) e.preventDefault()
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
              Укажите ваш вопрос и номер телефона. Наш спец��алист свяжется с вами и даст подробную консул��тацию.
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
              <div className="submit-wrapper">
                <AskButton onClick={handleSubmit} variant="primary" />
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
            padding: 16px;
          }

          .modal-header h2 {
            font-size: 23px;
          }

          .modal-description {
            font-size: 15px;
            margin-bottom: 36px;
          }

          .question-form {
            gap: 21px;
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
            margin-top: 16px;
          }
        }
      `}</style>
    </>
  )
}

export default QuestionModal
