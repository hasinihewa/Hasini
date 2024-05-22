package com.example.SpringMongooProject.Service;


import com.example.SpringMongooProject.Entity.Student;
import com.example.SpringMongooProject.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

    @Autowired
    private StudentRepo studentRepo;
    public void saverUpdate(Student students) {
        studentRepo.save(students);
    }

    public Iterable<Student> listAll() {
        return  this.studentRepo.findAll();
    }

    public void deleteStudent(String id) {
        studentRepo.deleteById(id);
    }

    public Student getStudentById(String studentid) {
        return studentRepo.findById(studentid).get();
    }
}
