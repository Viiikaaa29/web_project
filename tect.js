const questions = [
        {
            "question": "Яка основна мета фотоблогу?",
            "answers": [
                {
                    "answer": "Публікація тільки текстового контенту.",
                    "isCorrect": false
                },
                {
                    "answer": "Ілюстрація життя та вираження ідеї через фотографії.",
                    "isCorrect": true
                },
                {
                    "answer": "Створення відео контенту.",
                    "isCorrect": false
                },
                {
                    "answer": "Поділ інформації виключно через графічні діаграми.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Що означає термін 'кольорокорекція' у відеоіндустрії?",
            "answers": [
                {
                    "answer": "Підготовка кадру до остаточної обробки з виправленням кольорових фрагментів та відтінків.",
                    "isCorrect": true
                },
                {
                    "answer": "Маніпуляції з кадром з метою досягнення бажаного ефекту.",
                    "isCorrect": false
                },
                {
                    "answer": "Визначення палітри кольорів для конкретного проекту.",
                    "isCorrect": false
                },
                {
                    "answer": "Використання спеціальних фільтрів для покращення якості відео.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Що включає в себе процес 'грейдинг' у відеоіндустрії?",
            "answers": [
                {
                    "answer": "Технічні маніпуляції з кадром для виправлення помилок та дефектів.",
                    "isCorrect": false
                },
                {
                    "answer": "Маніпуляції з кадром з метою досягнення бажаного ефекту.",
                    "isCorrect": false
                },
                {
                    "answer": "Додавання стилю, настрою та індивідуальності кадру через корекцію кольору та інших аспектів.",
                    "isCorrect": true
                },
                {
                    "answer": "Перетворення відео у чорно-біле.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Що включає в себе технічна ретуш фотографій?",
            "answers": [
                {
                    "answer": "Виправлення технічних недоліків, таких як пересвіт, недоекспонованість, пил на матриці, а також корекція шкіри, фігури, зачіски та обличчя.",
                    "isCorrect": true
                },
                {
                    "answer": "Додавання стилю та настрою кадру через колажування.",
                    "isCorrect": false
                },
                {
                    "answer": "Опрацювання фотографій для рекламних та творчих проектів.",
                    "isCorrect": false
                },
                {
                    "answer": "Створення hi-end продукту для реклами, журналів та творчих проектів.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Що включає в себе гламурна ретуш фотографій?",
            "answers": [
                {
                    "answer": "Корекцію кольору та контрасту, видалення дефектів шкіри, обробку очей, губ, вій, роботу над одягом та заміну фону фотографії.",
                    "isCorrect": true
                },
                {
                    "answer": "Виправлення технічних недоліків та корекцію кольору.",
                    "isCorrect": false
                },
                {
                    "answer": "Омолодження обличчя та зменшення зморшок на фотографії.",
                    "isCorrect": false
                },
                {
                    "answer": "Створення hi-end продукту для реклами, журналів та творчих проектів.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Який метод найбільш популярний для коричневого тонування?",
            "answers": [
                {
                    "answer": "Прямий метод, що здійснюється в розчині з тіосульфату натрію, алюмокалієвих галунів і хлориду натрію.",
                    "isCorrect": false
                },
                {
                    "answer": "Класичний непрямий метод, який включає в себе відбілювання у розчині гексаціаноферату калію та подальше забарвлення у розчині сульфіду натрію.",
                    "isCorrect": true
                },
                {
                    "answer": "Процес коричневого тонування не включає жодного з перелічених методів.",
                    "isCorrect": false
                },
                {
                    "answer": "Використання органічних барвників для непрямого тонування.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Який метод використовується для синього тонування?",
            "answers": [
                {
                    "answer": "Прямий процес, який проводять у розчині з гексаціаноферату калію та кислоти.",
                    "isCorrect": true
                },
                {
                    "answer": "Непрямий метод з використанням хлориду заліза (III).",
                    "isCorrect": false
                },
                {
                    "answer": "Використання органічних барвників для забарвлення в синій відтінок.",
                    "isCorrect": false
                },
                {
                    "answer": "Прямий метод з використанням розчину сульфату міді та броміду калію.",
                    "isCorrect": false
                }
            ]
        }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.tect-container');
        const submitButton = document.querySelector('.submit-button');
        const resultDisplay = document.querySelector('.result');
    
       
            const backBtn = document.getElementById('backBtn');
          
            backBtn.addEventListener('click', function() {
              window.location.href = 'index.html';
            });
 // Ініціалізація змінних для зберігання загальної кількості питань та кількості правильних відповідей
    let totalQuestions = questions.length;
    let correctAnswers = 0;

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionElement.appendChild(questionText);

        question.answers.forEach(answer => {
            const answerElement = document.createElement('input');
            answerElement.type = 'radio';
            answerElement.name = `question${index}`;
            answerElement.value = answer.answer;

            const answerLabel = document.createElement('label');
            answerLabel.textContent = answer.answer;
            questionElement.appendChild(answerElement);
            questionElement.appendChild(answerLabel);

            answerElement.addEventListener('change', function() {
                if (answer.isCorrect) {
                    correctAnswers++;
                }
            });
        });

      

        container.appendChild(questionElement);
    });

    submitButton.addEventListener('click', function() {
        const percentage = (correctAnswers / totalQuestions) * 100;
        resultDisplay.textContent = `Ви відповіли правильно на ${correctAnswers} з ${totalQuestions} питань. Ваш результат: ${percentage}%`;
    });
});
