Email Spam Detection using Decision Trees
A machine learningpowered system that detects whether an email is spam or not spam using
Natural Language Processing (NLP) and a Decision Tree Classifier. This project includes both a
Python backend for ML and a React-based frontend for user interaction.


Features:
- Classifies emails as Spam or Ham (Not Spam)
- Uses Decision Tree Classifier from scikit-learn
- Implements NLP preprocessing (lowercasing, tokenization, stop-word removal, stemming)
- Responsive frontend using React + Vite
- Easily extendable for production or deployment


Tech Stack:
Frontend: React.js, Vite, HTML, CSS
Backend: Python, Flask (or script)
ML/NLP: scikit-learn, pandas, NLTK


Project Structure:
Email-Spam-Detection/
 emailUI/ - Frontend React App
 model/ - ML Model & Training Scripts
 dataset/ - Spam/Ham Email Dataset
 app.py - Backend Flask API (optional)
 train_model.py - Model training script
 .gitignore - Git ignore rule

 Dataset:
- Publicly available labeled dataset of spam and ham emails.
- Preprocessing applied for accurate classification.
Future Improvements:
- Add model evaluation metrics (accuracy, precision, recall)
- Deploy to cloud (e.g., Render for backend, Netlify/Vercel for frontend)
- Allow file upload and full-body email parsing
