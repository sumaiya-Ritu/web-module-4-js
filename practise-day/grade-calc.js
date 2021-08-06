var students = [['David', 80], ['vincen', 77], ['Dibbo', 95], ['ishita', 34], ['tom', 50]];
var avgMark = 0;

for (i = 0; i < students.length; i++) {
    avgMark += students[i][1];
    var avg = avgMark / students.length;
}