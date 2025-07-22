import string
import numpy as np
import pandas as pd
import nltk
from nltk.corpus import stopwords
from sklearn.model_selection import train_test_split
from nltk.stem.porter import PorterStemmer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics import accuracy_score
from nltk import word_tokenize
import pickle 

nltk.download('punkt')
class Node:
    def __init__(self, feature=None, threshold=None, value=None, left=None, right=None):
        self.left = left
        self.right = right
        self.value = value
        self.threshold = threshold
        self.feature = feature

    @property
    def is_leaf(self):
        return self.value is not None

class DecisionTree:
    def __init__(self, max_depth=None):
        self.max_depth = max_depth
        self.feature_set = None

    def fit(self, X, y):
        self.n_classes = len(set(y))
        self.n_features = X.shape[1]
        self.tree = self.buildTree(X, y)

    def gini_impurity(self, column, target):
        best_gini = float('inf')
        best_threshold = None

        unique_values = sorted(set(column))

        for threshold in unique_values:
            left_indices = column < threshold
            right_indices = ~left_indices
            left_labels = target[left_indices]
            right_labels = target[right_indices]

            gini_left = self.calculate_gini(left_labels)
            gini_right = self.calculate_gini(right_labels)

            n_left = len(left_labels)
            n_right = len(right_labels)
            total_samples = n_left + n_right
            weighted_gini = (n_left / total_samples) * gini_left + (n_right / total_samples) * gini_right

            if weighted_gini < best_gini:
                best_gini = weighted_gini
                best_threshold = threshold

        return best_threshold, best_gini

    def calculate_gini(self, labels):
        if len(labels) == 0:
            return 0.0

        counts = np.bincount(labels)
        probabilities = counts / len(labels)
        gini = 1.0 - np.sum(probabilities ** 2)

        return gini

    def classify(self, y):
        return np.bincount(y).argmax()

    def buildTree(self, X, y, depth=0):
        n_rows, n_feat = X.shape
        n_labels = len(set(y))

        if (self.max_depth is not None and depth >= self.max_depth) or n_labels == 1:
            return Node(value=self.classify(y))

        best_feature, best_threshold = self.best_split(X, y)
        left_indices = X[:, best_feature] < best_threshold
        right_indices = ~left_indices
        left_node = self.buildTree(X[left_indices], y[left_indices], depth=depth + 1)
        right_node = self.buildTree(X[right_indices], y[right_indices], depth=depth + 1)
        return Node(threshold=best_threshold, feature=best_feature, left=left_node, right=right_node)

    def best_split(self, X, y):
        best_gini = float('inf')
        best_feature = None
        best_threshold = None

        for feature in range(self.n_features):
            cur_threshold, gini = self.gini_impurity(X[:, feature], y)
            if best_gini > gini:
                best_gini = gini
                best_feature = feature
                best_threshold = cur_threshold

        return best_feature, best_threshold

    def predict_batch(self, X):
        return np.array([self.traversal(x, self.tree) for x in X])

    def preprocess_text(self, text):
        stemmer = PorterStemmer()
        stopwords_set = set(stopwords.words('english'))
        text = text.lower()
        text = text.translate(str.maketrans('', '', string.punctuation)).split()
        text = [stemmer.stem(word) for word in text if word not in stopwords_set]
        text = ' '.join(text)
        return text

    def predict(self, text):
        preprocessed_text = self.preprocess_text(text)
        text_vectorized = vectorizer.transform([preprocessed_text]).toarray()
        prediction = self.predict_batch(text_vectorized)
        return prediction

    def traversal(self, x, node):
        if node.is_leaf:
            return node.value

        if x[node.feature] < node.threshold:
            return self.traversal(x, node.left)
        else:
            return self.traversal(x, node.right)

path = r'E:\Django\Email_Spam\template\spam_ham_dataset.csv'
df = pd.read_csv(path)
df['text'] = df['text'].apply(lambda x: x.replace('\r\n', ' '))
stemmer = PorterStemmer()
nltk.download('stopwords')
corpus = []
stopwords_set = set(stopwords.words('english'))
for i in range(len(df)):
    text = df['text'].iloc[i].lower()
    text = text.translate(str.maketrans('', '', string.punctuation)).split()
    text = [stemmer.stem(word) for word in text if word not in stopwords_set]
    text = ' '.join(text)
    corpus.append(text)

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus).toarray()
V = vectorizer.get_feature_names_out()
y = df.label_num

classifier = DecisionTree()
classifier.feature_set = V
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
classifier.fit(X_train, y_train)

pickle.dump(classifier, open('trained_model.sav','wb'))