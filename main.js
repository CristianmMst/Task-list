$(document).ready(() => {
  let count = 1;
  const tasks = $(".tasks");
  const form = $(".form-container");
  const backgroundBlur = $(".background-blur");

  if (!tasks.html()) {
    tasks.append(`<h2 class="info" >Añade tareas</h2>`);
  }

  $(".btn-add-task").click(() => {
    form.fadeIn(300);
    backgroundBlur.fadeIn(300);
  });

  backgroundBlur.click(function () {
    formOut();
  });

  $(".form").submit((event) => {
    event.preventDefault();
    let inputValue = $("#add-task");
    $(".info").remove();
    if (inputValue.val().length > 0) {
      tasks.prepend(`<div class="task">
          <input
            class="task-radio"
            type="radio"
            aria-label="check"
            id="check${count}"
          />
          <label for="check${count}">${inputValue.val()}</label>
          <button class="btn-task-delete" type="button" aria-label="delete">
            <i class="fa-solid fa-trash-can icon"></i>
          </button>
        </div>`);
      formOut();
      inputValue.val("");
      count++;
    }
  });
  $(document).on("click", ".icon", function () {
    $(this)
      .parent()
      .parent()
      .fadeOut(200, function () {
        $(this).remove();
        if (!tasks.html()) {
          tasks.append(`<h2 class="info" >Añade tareas</h2>`);
        }
      });
  });

  function formOut() {
    form.fadeOut(200);
    backgroundBlur.fadeOut(200, () => {
      $("#add-task").val("");
    });
  }
});
