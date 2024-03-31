"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.tect-container');
  var submitButton = document.querySelector('.submit-button');
  var resultDisplay = document.querySelector('.result');
  var backBtn = document.getElementById('backBtn');
  backBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  }); // Додайте ваші тестові дані без об'єкта

  var questions = [{
    "question": "Яка основна мета фотоблогу?",
    "answers": [{
      "answer": "Публікація тільки текстового контенту.",
      "isCorrect": false
    }, {
      "answer": "Ілюстрація життя та вираження ідеї через фотографії.",
      "isCorrect": true
    }, {
      "answer": "Створення відео контенту.",
      "isCorrect": false
    }, {
      "answer": "Поділ інформації виключно через графічні діаграми.",
      "isCorrect": false
    }]
  }, {
    "question": "Що означає термін 'кольорокорекція' у відеоіндустрії?",
    "answers": [{
      "answer": "Підготовка кадру до остаточної обробки з виправленням кольорових фрагментів та відтінків.",
      "isCorrect": true
    }, {
      "answer": "Маніпуляції з кадром з метою досягнення бажаного ефекту.",
      "isCorrect": false
    }, {
      "answer": "Визначення палітри кольорів для конкретного проекту.",
      "isCorrect": false
    }, {
      "answer": "Використання спеціальних фільтрів для покращення якості відео.",
      "isCorrect": false
    }]
  }, {
    "question": "Що включає в себе процес 'грейдинг' у відеоіндустрії?",
    "answers": [{
      "answer": "Технічні маніпуляції з кадром для виправлення помилок та дефектів.",
      "isCorrect": false
    }, {
      "answer": "Маніпуляції з кадром з метою досягнення бажаного ефекту.",
      "isCorrect": false
    }, {
      "answer": "Додавання стилю, настрою та індивідуальності кадру через корекцію кольору та інших аспектів.",
      "isCorrect": true
    }, {
      "answer": "Перетворення відео у чорно-біле.",
      "isCorrect": false
    }]
  }, {
    "question": "Що включає в себе технічна ретуш фотографій?",
    "answers": [{
      "answer": "Виправлення технічних недоліків, таких як пересвіт, недоекспонованість, пил на матриці, а також корекція шкіри, фігури, зачіски та обличчя.",
      "isCorrect": true
    }, {
      "answer": "Додавання стилю та настрою кадру через колажування.",
      "isCorrect": false
    }, {
      "answer": "Опрацювання фотографій для рекламних та творчих проектів.",
      "isCorrect": false
    }, {
      "answer": "Створення hi-end продукту для реклами, журналів та творчих проектів.",
      "isCorrect": false
    }]
  }, {
    "question": "Що включає в себе гламурна ретуш фотографій?",
    "answers": [{
      "answer": "Корекцію кольору та контрасту, видалення дефектів шкіри, обробку очей, губ, вій, роботу над одягом та заміну фону фотографії.",
      "isCorrect": true
    }, {
      "answer": "Виправлення технічних недоліків та корекцію кольору.",
      "isCorrect": false
    }, {
      "answer": "Омолодження обличчя та зменшення зморшок на фотографії.",
      "isCorrect": false
    }, {
      "answer": "Створення hi-end продукту для реклами, журналів та творчих проектів.",
      "isCorrect": false
    }]
  }, {
    "question": "Який метод найбільш популярний для коричневого тонування?",
    "answers": [{
      "answer": "Прямий метод, що здійснюється в розчині з тіосульфату натрію, алюмокалієвих галунів і хлориду натрію.",
      "isCorrect": false
    }, {
      "answer": "Класичний непрямий метод, який включає в себе відбілювання у розчині гексаціаноферату калію та подальше забарвлення у розчині сульфіду натрію.",
      "isCorrect": true
    }, {
      "answer": "Процес коричневого тонування не включає жодного з перелічених методів.",
      "isCorrect": false
    }, {
      "answer": "Використання органічних барвників для непрямого тонування.",
      "isCorrect": false
    }]
  }, {
    "question": "Який метод використовується для синього тонування?",
    "answers": [{
      "answer": "Прямий процес, який проводять у розчині з гексаціаноферату калію та кислоти.",
      "isCorrect": true
    }, {
      "answer": "Непрямий метод з використанням хлориду заліза (III).",
      "isCorrect": false
    }, {
      "answer": "Використання органічних барвників для забарвлення в синій відтінок.",
      "isCorrect": false
    }, {
      "answer": "Прямий метод з використанням розчину сульфату міді та броміду калію.",
      "isCorrect": false
    }]
  }];
  var totalQuestions = questions.length;
  var correctAnswers = 0;
  questions.forEach(function (question, index) {
    var questionElement = document.createElement('div');
    questionElement.classList.add('question');
    var questionText = document.createElement('p');
    questionText.textContent = "".concat(index + 1, ". ").concat(question.question);
    questionElement.appendChild(questionText);
    question.answers.forEach(function (answer) {
      var answerElement = document.createElement('input');
      answerElement.type = 'radio';
      answerElement.name = "question".concat(index);
      answerElement.value = answer.answer;
      var answerLabel = document.createElement('label');
      answerLabel.textContent = answer.answer;
      questionElement.appendChild(answerElement);
      questionElement.appendChild(answerLabel);
      answerElement.addEventListener('change', function () {
        if (answer.isCorrect) {
          correctAnswers++;
        }
      });
    });
    container.appendChild(questionElement);
  });
  submitButton.addEventListener('click', function () {
    var percentage = correctAnswers / totalQuestions * 100;
    resultDisplay.textContent = "\u0412\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043B\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430 ".concat(correctAnswers, " \u0437 ").concat(totalQuestions, " \u043F\u0438\u0442\u0430\u043D\u044C. \u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ").concat(percentage, "%");
  });
});
//# sourceMappingURL=tect.dev.js.map
