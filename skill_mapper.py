import json
from flask import Flask, jsonify, request
from pdfminer.high_level import extract_text
import re
import nltk
import docx2txt
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
set(stopwords.words('english'))
from textblob import TextBlob
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('maxent_ne_chunker')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('words')

app = Flask(__name__)


@app.route('/data', methods = ['GET', 'POST'])
def home():
	if request.method == 'POST':
		resume = request.files["file"]
		resume.save(resume.filename)
		if (resume.filename).endswith(".pdf"):
			resume = extract_text(resume.filename)
			resume = resume.lower()
			resume = re.sub(r'[^\w\s]', ' ', resume)
			resume = resume.strip()
			resume = word_tokenize(resume)
			stop = stopwords.words('english')
			resume = [w for w in resume if not w in stop]
		# resume = str(resume)
		# text = ''.join(resume)
		# text = text.replace("\n", "")
		# if text:
		#     resume = text
		elif (resume.filename).endswith(".docx"):
			resume = docx2txt.process(resume.filename)
			resume = resume.lower()
			resume = resume.strip()
			resume = re.sub(r'[^\w\s]', ' ', resume)
			resume = word_tokenize(resume)
			stop = stopwords.words('english')
			resume = [w for w in resume if not w in stop]
		# resume = str(resume)
		# text = ''.join(resume)
		# text = text.replace("\n", "")
		# if text:
		#     resume = text
		else:
			print("Only pdf and Docx files are accepted")
		try:
			jdtext = str(request.form['jdtext'])
			jdtext = jdtext.lower()
			jdtext = jdtext.strip()
			jdtext = re.sub(r'[^\w\s]', ' ', jdtext)
			jdtext = word_tokenize(jdtext)
			stop = stopwords.words('english')
			jdtext = [w for w in jdtext if not w in stop]
			# searching jd in resume
			n = len(jdtext)
			l = 0
			for i in jdtext:
				if i in resume:
					l += 1
			percentage = (l / n) * 100

			technical_skills = ['python', 'c','r', 'c++','java','hadoop','scala','flask','pandas','spark','scikit-learn',
                    'numpy','php','sql','mysql','css','mongdb','nltk','fastai' , 'keras', 'pytorch','tensorflow',
                   'linux','Ruby','JavaScript','django','react','reactjs','ai','ui','tableau']
			soft_skills =['communication','critical thinking','conflict resolution',
						'problem solving','negotiation','emotional intelligence', 'handing difficult people',
						'delivering constructive criticism','working under pressure','team work', 'managing people','adaptability','esilience','perseverance','influence',
						'networking','time management', 'organizational skills']

			top_technical_skills = list(set(technical_skills).intersection(jdtext))

			# Delete technical skills from jd text list
			# jdtext = [x for x in jdtext if x not in top_technical_skills]
			# jdtext = list(set(jdtext) - set(top_technical_skills))

			top_soft_skills = []
			txt = " ".join(jdtext)
			for i in soft_skills:
				if i in txt:
					top_soft_skills.append(i)

			other_keywords = [w for (w, pos) in TextBlob(txt).pos_tags if pos.startswith("JJ")][:6]
			response = jsonify({'percentage': percentage},{'technicalskills':top_technical_skills},{'softskills':top_soft_skills},{'otherkeywords':other_keywords})

			# Enable Access-Control-Allow-Origin
			response.headers.add("Access-Control-Allow-Origin", "*")
			return response
		except:
			response = jsonify({'error':'Invalid file'})

			# Enable Access-Control-Allow-Origin
			response.headers.add("Access-Control-Allow-Origin", "*")
			return response
	response = jsonify({'error':'file is note uploaded'})
	return response

if __name__ == '__main__':
	app.run(debug = True)
