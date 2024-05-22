package com.example.SpringMongooProject.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "teachers")
public class Teacher {
    @Id
    private String _id;
    private String teacherName;
    private String teacherAddress;
    private String mobile;

    public Teacher(String _id, String teacherName, String teacherAddress, String mobile) {
        this._id = _id;
        this.teacherName = teacherName;
        this.teacherAddress = teacherAddress;
        this.mobile = mobile;
    }

    public Teacher() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getStudentName() {
        return teacherName;
    }

    public void setStudentName(String studentName) {
        this.teacherName = teacherName;
    }

    public String getStudentAddress() {
        return teacherAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.teacherAddress = teacherAddress;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id='" + _id + '\'' +
                ", studentName='" + teacherName + '\'' +
                ", studentAddress='" + teacherAddress + '\'' +
                ", mobile='" + mobile + '\'' +
                '}';
    }
}
