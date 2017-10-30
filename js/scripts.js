function Todo(task, description) {
  this.task = task;
  this.description = description;
};


$(function(){
  $("form#to-do-add").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task-input").val(); //userInput
    var inputtedDescription = $("input#description-input").val(); //userInput

    var newInput = new Todo(inputtedTask, inputtedDescription); //new object calling Todo function

    $("ul#task-list").append("<li><span class='todo-added'>" + newInput.task + "</span></li>"); //

    $("input#task-input").val("");
    $("input#description-input").val("");

    $(".todo-added").last().click(function() {
      $("#show-task-description").show();
      $(".task").text(newInput.task);
      $(".description").text(newInput.description);
    });
  });
});
