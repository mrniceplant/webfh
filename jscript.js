

/* <script>
$(document).ready(function(){
    $("body").click(function(){
        $(this).hide();
    });
});
</script> */

var sheetToBeRemoved = document.getElementById('page');
var sheetParent = sheetToBeRemoved.parentNode;
sheetParent.removeChild(sheetToBeRemoved);
