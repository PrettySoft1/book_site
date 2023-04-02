var t = document.getElementById('book_container');

var box = "<div class = \"box\"> <img src = \"BooksCover/adab/alagani.jpg\">";
box +=
    "<div class = \"details\"> <h3>الأغاني</h3> <p>المؤلف: <span class=\"about\">أبو القاسم الشابي</span></p><p>عدد الصفحات: <span class=\"about\">450</span></p>";
box +=
    "<p> عدد الأجزاء: <span class = \"about\">1</span></p><a href = \"#\" class= \"download\" download> تحميل الكتاب</a>";
box += "</div></div>";
t.innerHTML += box;