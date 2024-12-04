import React, { useState } from 'react';

type Question = {
  id: string;
  title: string;
  type: 'MULTIPLE_CHOICE' | 'TRUE_FALSE' | 'FILL_BLANK';
  points: number;
  question: string;
  choices?: string[];
  correctAnswer?: string | boolean;
  possibleAnswers?: string[];
};

const QuestionEditor = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      title: 'New Question',
      type: 'MULTIPLE_CHOICE',
      points: 1,
      question: '',
      choices: ['Option 1', 'Option 2'],
      correctAnswer: 'Option 1'
    };
    setQuestions([...questions, newQuestion]);
    setEditingQuestion(newQuestion);
  };

  const handleSaveQuestion = (question: Question) => {
    setQuestions(questions.map(q => q.id === question.id ? question : q));
    setEditingQuestion(null);
  };

  const handleEditQuestion = (question: Question) => {
    setEditingQuestion(question);
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions(questions.filter(q => q.id !== questionId));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Questions</h4>
        <button className="btn btn-danger" onClick={handleAddQuestion}>
          + New Question
        </button>
      </div>

      {questions.length === 0 ? (
        <div className="text-center p-4 bg-light rounded">
          <p>No questions added yet. Click "New Question" to begin.</p>
        </div>
      ) : (
        <div className="question-list">
          {questions.map((question, index) => (
            <div key={question.id} className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Question {index + 1}</h5>
                <div>
                  <button 
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEditQuestion(question)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="card-body">
                <h6>{question.title}</h6>
                <p>{question.question}</p>
                <div className="text-muted">
                  Type: {question.type} | Points: {question.points}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingQuestion && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Question</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setEditingQuestion(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Question Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingQuestion.title}
                      onChange={(e) => setEditingQuestion({
                        ...editingQuestion,
                        title: e.target.value
                      })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Question Type</label>
                    <select
                      className="form-select"
                      value={editingQuestion.type}
                      onChange={(e) => setEditingQuestion({
                        ...editingQuestion,
                        type: e.target.value as Question['type']
                      })}
                    >
                      <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                      <option value="TRUE_FALSE">True/False</option>
                      <option value="FILL_BLANK">Fill in the Blank</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Points</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editingQuestion.points}
                      onChange={(e) => setEditingQuestion({
                        ...editingQuestion,
                        points: parseInt(e.target.value)
                      })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Question Text</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={editingQuestion.question}
                      onChange={(e) => setEditingQuestion({
                        ...editingQuestion,
                        question: e.target.value
                      })}
                    />
                  </div>

                  {editingQuestion.type === 'MULTIPLE_CHOICE' && (
                    <div className="mb-3">
                      <label className="form-label">Choices</label>
                      {editingQuestion.choices?.map((choice, index) => (
                        <div key={index} className="input-group mb-2">
                          <div className="input-group-text">
                            <input
                              type="radio"
                              checked={editingQuestion.correctAnswer === choice}
                              onChange={() => setEditingQuestion({
                                ...editingQuestion,
                                correctAnswer: choice
                              })}
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            value={choice}
                            onChange={(e) => {
                              const newChoices = [...(editingQuestion.choices || [])];
                              newChoices[index] = e.target.value;
                              setEditingQuestion({
                                ...editingQuestion,
                                choices: newChoices
                              });
                            }}
                          />
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              const newChoices = editingQuestion.choices?.filter((_, i) => i !== index);
                              setEditingQuestion({
                                ...editingQuestion,
                                choices: newChoices
                              });
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => setEditingQuestion({
                          ...editingQuestion,
                          choices: [...(editingQuestion.choices || []), `Option ${(editingQuestion.choices?.length || 0) + 1}`]
                        })}
                      >
                        Add Choice
                      </button>
                    </div>
                  )}

                  {editingQuestion.type === 'TRUE_FALSE' && (
                    <div className="mb-3">
                      <label className="form-label">Correct Answer</label>
                      <div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            checked={editingQuestion.correctAnswer === true}
                            onChange={() => setEditingQuestion({
                              ...editingQuestion,
                              correctAnswer: true
                            })}
                          />
                          <label className="form-check-label">True</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            checked={editingQuestion.correctAnswer === false}
                            onChange={() => setEditingQuestion({
                              ...editingQuestion,
                              correctAnswer: false
                            })}
                          />
                          <label className="form-check-label">False</label>
                        </div>
                      </div>
                    </div>
                  )}

                  {editingQuestion.type === 'FILL_BLANK' && (
                    <div className="mb-3">
                      <label className="form-label">Correct Answers (one per line)</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        value={editingQuestion.possibleAnswers?.join('\n') || ''}
                        onChange={(e) => setEditingQuestion({
                          ...editingQuestion,
                          possibleAnswers: e.target.value.split('\n').filter(answer => answer.trim())
                        })}
                        placeholder="Enter possible correct answers, one per line"
                      />
                    </div>
                  )}
                </form>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setEditingQuestion(null)}
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => handleSaveQuestion(editingQuestion)}
                >
                  Save Question
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionEditor;