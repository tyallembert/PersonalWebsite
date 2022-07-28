
function showInfo(sender){
    let allGradients = {
        "Salvation Suppers": "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(214, 22, 22, 1))",
        "Memory Game": "linear-gradient(0deg, rgba(47, 120, 59, 1), rgba(161, 95, 33, 01))",
        "UVM Scheduling Assistant": "linear-gradient(0deg, rgba(231, 231, 231, 1), rgba(19, 132, 51, 1))",
        "Secure Signup": "linear-gradient(0deg, rgba(192, 57, 152, 1), rgba(143, 39, 164, 1))"
    };
    $(".project_popup").show(400);
    let title = sender.children[0].innerHTML;
    let color = allGradients[title];
    $(".project_popup_title").html("<h1>"+title+"</h1>");
    $(".project_popup_title").css("background", color)
}
function hideInfo(sender){
    $(".project_popup").css('display', 'none');
}
function showPopup(sender){
    $(".project_popup").css('display', 'block');
}
function hidePopup(sender){
    $(".project_popup").hide(400);
}