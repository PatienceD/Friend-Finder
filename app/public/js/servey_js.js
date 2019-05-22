//  //capture on clicks
//  $("#submit-button").on("click", function (event) {
//     event.preventDefault();

//     //validating form
//     function formValidate() {
//         let valid = true;
//         $(".form-input").each(function () {
//             if ($(this).val() === " ") {
//                 valid = false;
//             }
//         });
//         $(".question-choice").each(function () {
//             if ($(this).val() === " ") {
//                 valid = false;
//             }
//         });
//         return valid;
//     }

//     //if all questions are answered
//     if (formValidate()) {
//         //storing user data
//         let userData = {
//             name: $("#name").val(),
//             photo: $("#photo").val(),
//             score: [
//                 $("#q1").val(),
//                 $("#q2").val(),
//                 $("#q3").val(),
//                 $("#q4").val(),
//                 $("#q5").val(),
//                 $("#q6").val(),
//                 $("#q7").val(),
//                 $("#q8").val(),
//                 $("#q9").val(),
//                 $("#q10").val(),
//             ]
//         };

//         //shows data from friends api
//         $.post("/api/friends", userData, function (data) {
//             $("#match-name").text(data.name);
//             $("#match-img").attr("src", data.photo);

//             //showing modal
//             $("#results-modal").modal("toggle");
//         });
//     } else {
//         alert("Please fill out all the questions for continuing!");
//     }
// });