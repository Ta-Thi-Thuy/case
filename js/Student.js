class Student {
    constructor(id, fullname, date, grade, img) {
        this.id= id;
        this.fullname= fullname;
        this.date= date;
        this.grade= grade;
        this.img;
    }
    getID() {
        return this.id;
    }
    getFullname() {
        return this.fullname;
    }
    getDate() {
        return this.date;
    }
    getGrade() {
        return this.grade;

    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setFullname(fullname) {
        this.fullname=fullname;
    }
    setDate(date) {
        this.date=date;
    }
    setGrade(grade) {
        this.grade=grade;
    }
    setImg(img){
        this.img=img;
    }

    edit(id, fullname, date, grade, img){
        this.id = id;
        this.fullname = fullname;
        this.date = date;
        this.grade = grade;
        this.img = img
    }
}